import { chromium } from "playwright";
import { PDFDocument, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";

const SECTIONS = [
  { id: "hero", selector: "section:first-of-type", bg: "dark" },
  { id: "about", selector: "#about", bg: "white" },
  { id: "players", selector: "#players", bg: "dark" },
  { id: "prizes", selector: "#prizes", bg: "white" },
  { id: "location", selector: "#location", bg: "dark" },
  { id: "sponsors", selector: "#sponsors", bg: "light" },
];

const WIDTH = 1440;
const PDF_PATH = path.resolve("public/downloads/Breakdown_MPC_2026.pdf");
const TEMP_DIR = path.resolve(".tmp-pdf-pages");

// A4 in points
const A4_W = 595.28;
const A4_H = 841.89;
const MARGIN = 30;

async function run() {
  fs.mkdirSync(TEMP_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await (
    await browser.newContext({ viewport: { width: WIDTH, height: 900 }, deviceScaleFactor: 2 })
  ).newPage();

  console.log("Loading page…");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);

  // Force all Framer Motion animations to final state + fix dark section backgrounds
  await page.addStyleTag({
    content: `
      /* Force all animated elements visible */
      [style*="opacity"], [style*="transform"] {
        opacity: 1 !important;
        transform: none !important;
      }
      /* Disable CSS animations/transitions */
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
      /* Fix dark sections: replace noisy grid background with clean gradient */
      .noise-overlay,
      section[style*="0f2233"] {
        background-image: linear-gradient(135deg, #1a3a52 0%, #0f2233 50%, #1a3a52 100%) !important;
      }
      /* Fix location section background too */
      #location > div[style] {
        background-image: linear-gradient(135deg, #1a3a52 0%, #0f2233 50%, #1a3a52 100%) !important;
      }
    `,
  });
  await page.waitForTimeout(500);

  // Scroll through entire page to trigger any lazy-loaded content
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await delay(100);
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1000);

  // Re-apply opacity after scroll triggers
  await page.addStyleTag({
    content: `[style*="opacity"] { opacity: 1 !important; } [style*="transform"] { transform: none !important; }`,
  });
  await page.waitForTimeout(500);

  // Fix dark section backgrounds: remove grid pattern, keep clean gradient
  await page.evaluate(() => {
    document.querySelectorAll("[style]").forEach((el) => {
      const s = el.getAttribute("style") || "";
      if (s.includes("0f2233") || s.includes("1a3a52")) {
        el.style.backgroundImage = "linear-gradient(135deg, #1a3a52 0%, #0f2233 50%, #1a3a52 100%)";
        el.style.backgroundSize = "100% 100%";
      }
    });
  });

  // Remove unwanted elements
  await page.evaluate(() => {
    document.querySelector("nav")?.remove();
    document.querySelectorAll(".fixed").forEach((el) => el.remove());
    document.querySelectorAll("section").forEach((s) => {
      const id = s.id || "";
      const text = s.textContent || "";
      if (id === "register" || id === "download" || id === "results")
        s.remove();
    });
    document.querySelector("footer")?.remove();
    // Remove scroll indicator
    const scrollInd = document.querySelector(".absolute.bottom-6");
    scrollInd?.remove();

    // Location: remove the iframe (map won't render) and the "View Hotel" / "Ver Hotel" button
    const iframe = document.querySelector("#location iframe");
    if (iframe) {
      const wrapper = iframe.closest(".rounded-2xl") || iframe.parentElement;
      wrapper?.remove();
    }
  });

  // Capture each section
  const captures = [];
  for (const section of SECTIONS) {
    const el = await page.$(section.selector);
    if (!el) { console.log(`  ⚠ "${section.id}" not found`); continue; }
    const box = await el.boundingBox();
    const jpgPath = path.join(TEMP_DIR, `${section.id}.jpg`);
    await el.screenshot({ path: jpgPath, type: "jpeg", quality: 95 });
    captures.push({ ...section, jpgPath, w: box.width, h: box.height });
    console.log(`  ✓ ${section.id} (${Math.round(box.width)}×${Math.round(box.height)})`);
  }
  await browser.close();

  // Build A4 PDF
  console.log("Building A4 PDF…");
  const pdf = await PDFDocument.create();

  const BG_COLORS = {
    dark: rgb(15 / 255, 34 / 255, 51 / 255),   // #0f2233
    white: rgb(1, 1, 1),                          // #ffffff
    light: rgb(247 / 255, 248 / 255, 250 / 255), // #f7f8fa
  };

  for (const cap of captures) {
    const jpgBytes = fs.readFileSync(cap.jpgPath);
    const img = await pdf.embedJpg(jpgBytes);
    const pg = pdf.addPage([A4_W, A4_H]);

    // Fill entire A4 page with section background color
    pg.drawRectangle({ x: 0, y: 0, width: A4_W, height: A4_H, color: BG_COLORS[cap.bg] });

    // Scale image to fit width (full bleed horizontal), center vertically
    const drawW = A4_W;
    const scale = drawW / img.width;
    const drawH = img.height * scale;

    const x = 0;
    const y = (A4_H - drawH) / 2;

    pg.drawImage(img, { x, y, width: drawW, height: drawH });
    console.log(`  ✓ ${cap.id} → A4 (bg: ${cap.bg})`);
  }

  const finalBytes = await pdf.save();
  fs.writeFileSync(PDF_PATH, finalBytes);

  fs.rmSync(TEMP_DIR, { recursive: true, force: true });

  const sizeKB = (finalBytes.length / 1024).toFixed(0);
  console.log(`\n✅ PDF saved: ${PDF_PATH} (${sizeKB} KB, ${captures.length} pages)`);
}

run().catch((e) => { console.error(e); process.exit(1); });
