import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const PDF_PATH = path.resolve("public/downloads/Breakdown_MPC_2026.pdf");

// Colors matching the website
const DARK = "#0f2233";
const DARK2 = "#1a3a52";
const ORANGE = "#FF6B35";
const GOLD = "#FFB800";
const LIGHT = "#f7f8fa";

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  @page { size: A4; margin: 0; }

  body {
    font-family: 'Inter', sans-serif;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .page {
    width: 210mm;
    height: 297mm;
    position: relative;
    overflow: hidden;
    page-break-after: always;
    display: flex;
    flex-direction: column;
  }
  .page:last-child { page-break-after: auto; }

  h1, h2, h3 { font-family: 'Playfair Display', serif; }

  /* ===== PAGE 1: COVER ===== */
  .cover {
    background: linear-gradient(135deg, ${DARK2} 0%, ${DARK} 50%, ${DARK2} 100%);
    color: white;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 28mm 22mm 24mm;
  }
  .cover::before {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(135deg, transparent, rgba(255,107,53,0.06));
    transform: skewX(-12deg) translateX(30%);
  }
  .cover::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, ${ORANGE}66, transparent);
  }
  .cover-badge {
    display: inline-block;
    border: 1px solid ${ORANGE}50;
    background: ${ORANGE}20;
    color: ${ORANGE};
    font-weight: 700;
    font-size: 10pt;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 6px 20px;
    margin-bottom: 30px;
  }
  .cover h1 {
    font-size: 48pt;
    font-weight: 900;
    line-height: 0.92;
    margin-bottom: 12px;
    position: relative;
  }
  .cover h1 .orange { color: ${ORANGE}; }
  .cover h1 .gradient { color: ${ORANGE}; }
  .cover .edition {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: 26pt;
    color: ${ORANGE};
    letter-spacing: 0.15em;
    margin-bottom: 28px;
  }
  .cover .ltp-box {
    display: inline-block;
    background: white;
    border-radius: 12px;
    padding: 14px 28px;
    margin-bottom: 0;
  }
  .cover .ltp-box img { height: 55px; }
  .cover .subtitle {
    font-size: 12.5pt;
    color: rgba(255,255,255,0.65);
    max-width: 420px;
    margin: 0 auto;
    line-height: 1.7;
  }
  .cover .stats-row {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  .cover .stat-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 18px 22px;
    text-align: center;
    min-width: 108px;
  }
  .cover .stat-card .icon { font-size: 22pt; margin-bottom: 4px; }
  .cover .stat-card .num {
    font-family: 'Playfair Display', serif;
    font-size: 28pt;
    font-weight: 900;
    display: block;
    line-height: 1;
  }
  .cover .stat-card .lbl {
    font-size: 7pt;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(255,255,255,0.4);
    margin-top: 4px;
    display: block;
  }
  .cover-top, .cover-middle, .cover-bottom {
    position: relative;
    z-index: 1;
  }

  /* ===== PAGE 2: ITINERARY ===== */
  .itinerary {
    background: white;
    padding: 30mm 25mm;
  }
  .page-label {
    font-size: 8pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: ${ORANGE};
    margin-bottom: 10px;
    display: block;
  }
  .page-title {
    font-size: 32pt;
    font-weight: 900;
    color: ${DARK};
    line-height: 1.1;
    margin-bottom: 8px;
  }
  .page-title .highlight { color: ${ORANGE}; }
  .page-desc {
    font-size: 10pt;
    color: #4a5568;
    line-height: 1.7;
    max-width: 440px;
    margin-bottom: 30px;
  }
  .day-card {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    padding: 20px;
    margin-bottom: 14px;
    border-radius: 12px;
    background: ${LIGHT};
    border-left: 4px solid ${ORANGE};
    position: relative;
  }
  .day-card .day-icon {
    font-size: 26pt;
    flex-shrink: 0;
    width: 44px;
    text-align: center;
  }
  .day-card .day-info { flex: 1; }
  .day-card .day-name {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 13pt;
    color: ${DARK};
    margin-bottom: 4px;
  }
  .day-card .day-events {
    font-size: 9.5pt;
    color: #4a5568;
    line-height: 1.6;
  }
  .schedule-note {
    font-size: 8pt;
    color: #9ca3af;
    font-style: italic;
    margin-top: 20px;
    text-align: center;
  }

  /* ===== PAGE 3: WHAT'S INCLUDED ===== */
  .included {
    background: linear-gradient(135deg, ${DARK2} 0%, ${DARK} 50%, ${DARK2} 100%);
    color: white;
    padding: 30mm 25mm;
  }
  .included .page-label { color: ${ORANGE}; }
  .included .page-title { color: white; }
  .included .page-desc { color: rgba(255,255,255,0.65); }
  .included-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 10px;
  }
  .included-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 22px;
  }
  .included-card .ic-icon {
    font-size: 24pt;
    margin-bottom: 10px;
    display: block;
  }
  .included-card .ic-title {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 12pt;
    margin-bottom: 6px;
    color: white;
  }
  .included-card .ic-desc {
    font-size: 8.5pt;
    color: rgba(255,255,255,0.55);
    line-height: 1.6;
  }
  .included-footer {
    text-align: center;
    margin-top: 24px;
    font-size: 9pt;
    color: rgba(255,255,255,0.4);
  }

  /* ===== PAGE 4: HOTEL & LOCATION ===== */
  .hotel {
    background: white;
    padding: 30mm 25mm;
  }
  .hotel-info-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
    margin-top: 10px;
  }
  .hotel-info-item {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 16px 20px;
    background: ${LIGHT};
    border-radius: 10px;
  }
  .hotel-info-item .hi-icon {
    font-size: 22pt;
    flex-shrink: 0;
    width: 36px;
    text-align: center;
  }
  .hotel-info-item .hi-label {
    font-size: 8pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: ${ORANGE};
    margin-bottom: 2px;
  }
  .hotel-info-item .hi-value {
    font-size: 10pt;
    color: ${DARK};
    line-height: 1.5;
  }

  /* ===== PAGE 5: REGISTER CTA ===== */
  .register {
    background: linear-gradient(135deg, ${DARK2} 0%, ${DARK} 50%, ${DARK2} 100%);
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40mm 30mm;
  }
  .register::before {
    content: '';
    position: absolute;
    top: 15%; left: 5%;
    width: 300px; height: 300px;
    background: radial-gradient(circle, ${ORANGE}10, transparent 70%);
    border-radius: 50%;
  }
  .register::after {
    content: '';
    position: absolute;
    bottom: 15%; right: 5%;
    width: 400px; height: 400px;
    background: radial-gradient(circle, ${ORANGE}08, transparent 70%);
    border-radius: 50%;
  }
  .register .reg-content { position: relative; z-index: 1; }
  .register .reg-title {
    font-size: 42pt;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 20px;
  }
  .register .reg-subtitle {
    font-size: 12pt;
    color: rgba(255,255,255,0.6);
    max-width: 380px;
    margin: 0 auto 35px;
    line-height: 1.7;
  }
  .register .reg-btn {
    display: inline-block;
    background: ${ORANGE};
    color: white;
    font-weight: 700;
    font-size: 11pt;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    padding: 14px 40px;
    text-decoration: none;
  }
  .register .reg-url {
    display: block;
    margin-top: 16px;
    font-size: 9pt;
    color: rgba(255,255,255,0.35);
  }
  .register .reg-divider {
    width: 60px;
    height: 2px;
    background: ${ORANGE}40;
    margin: 35px auto;
  }
  .register .reg-details {
    font-size: 9pt;
    color: rgba(255,255,255,0.45);
    line-height: 1.8;
  }
  .register .partnership {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
  .register .partnership span {
    font-size: 7pt;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(255,255,255,0.3);
  }
  .register .partnership .ltp-sm {
    background: white;
    border-radius: 8px;
    padding: 6px 14px;
  }
  .register .partnership .ltp-sm img { height: 28px; }
</style>
</head>
<body>

<!-- PAGE 1: COVER -->
<div class="page cover">
  <div class="cover-top">
    <div class="cover-badge">🏸 August 6–9, 2026 · Mallorca</div>
  </div>
  <div class="cover-middle">
    <h1>
      MALLORCA<br>
      <span class="gradient">PADEL</span><br>
      CAMP<span class="orange">.</span>
    </h1>
    <div class="edition">LTP EDITION</div>
    <div class="ltp-box">
      <img src="LTP_LOGO_PLACEHOLDER" alt="Love The Padel">
    </div>
  </div>
  <div class="cover-bottom">
    <p class="subtitle">4 days of padel, sun and Mediterranean. Coaching sessions, sunset boat trip, Corcuera Cup and accommodation at Tomir Portals Suites.</p>
    <div class="stats-row" style="margin-top:24px">
      <div class="stat-card">
        <div class="icon">📅</div>
        <span class="num">4</span>
        <span class="lbl">Days</span>
      </div>
      <div class="stat-card">
        <div class="icon">🏸</div>
        <span class="num">4</span>
        <span class="lbl">Sessions</span>
      </div>
      <div class="stat-card">
        <div class="icon">⛵</div>
        <span class="num">1</span>
        <span class="lbl">Boat Trip</span>
      </div>
      <div class="stat-card">
        <div class="icon">🏨</div>
        <span class="num">4★</span>
        <span class="lbl">Hotel</span>
      </div>
    </div>
  </div>
</div>

<!-- PAGE 2: ITINERARY -->
<div class="page itinerary">
  <span class="page-label">The Tournament</span>
  <h2 class="page-title">Tournament <span class="highlight">Schedule</span></h2>
  <p class="page-desc">The Mallorca Padel Camp LTP Edition is a 4-day experience combining top-level padel, accommodation at Tomir Portals Suites and the best of the Mediterranean.</p>

  <div class="day-card">
    <div class="day-icon">✈️</div>
    <div class="day-info">
      <div class="day-name">Wednesday, August 6</div>
      <div class="day-events">Arrival at Palma de Mallorca (PMI) · Airport transfer to hotel<br>Check-in at Tomir Portals Suites · Welcome pack<br><strong style="color:${ORANGE}">1st Padel Session — 5:00pm to 7:00pm</strong></div>
    </div>
  </div>

  <div class="day-card">
    <div class="day-icon">⛵</div>
    <div class="day-info">
      <div class="day-name">Thursday, August 7</div>
      <div class="day-events">Breakfast at hotel<br><strong style="color:${ORANGE}">2nd Padel Session — 10:00am to 12:00pm</strong><br>Free time for lunch & beach<br><strong style="color:${ORANGE}">Sunset Boat Trip — 3:00pm to 7:00pm</strong></div>
    </div>
  </div>

  <div class="day-card">
    <div class="day-icon">🏆</div>
    <div class="day-info">
      <div class="day-name">Friday, August 8</div>
      <div class="day-events">Breakfast at hotel<br><strong style="color:${ORANGE}">3rd Padel Session — 11:00am to 1:00pm</strong><br>Free time for lunch<br><strong style="color:${ORANGE}">Corcuera Cup Tournament — 5:00pm to 9:00pm</strong></div>
    </div>
  </div>

  <div class="day-card">
    <div class="day-icon">🌅</div>
    <div class="day-info">
      <div class="day-name">Saturday, August 9</div>
      <div class="day-events">Breakfast at hotel<br><strong style="color:${ORANGE}">4th Padel Session (Final) — 11:00am to 1:00pm</strong><br>Palma city tour<br>Airport transfer — 6:00pm</div>
    </div>
  </div>

  <p class="schedule-note">Schedules might differ. Final confirmation will be sent closer to the date.</p>
</div>

<!-- PAGE 3: WHAT'S INCLUDED -->
<div class="page included">
  <span class="page-label">The Experience</span>
  <h2 class="page-title">What's <span class="highlight">Included</span></h2>
  <p class="page-desc">Everything you need for the ultimate padel experience in Mallorca — all in a single package.</p>

  <div class="included-grid">
    <div class="included-card">
      <span class="ic-icon">🏸</span>
      <div class="ic-title">Professional Coaching</div>
      <div class="ic-desc">4 padel coaching sessions with expert coaches. Morning and evening sessions to improve your game in the best Mediterranean setting.</div>
    </div>
    <div class="included-card">
      <span class="ic-icon">🏆</span>
      <div class="ic-title">Corcuera Cup</div>
      <div class="ic-desc">Official tournament with all camp participants. Compete, have fun and take home the trophy. The highlight of the weekend.</div>
    </div>
    <div class="included-card">
      <span class="ic-icon">⛵</span>
      <div class="ic-title">Sunset Boat Trip</div>
      <div class="ic-desc">Unforgettable boat trip through the crystal-clear waters of Mallorca. The perfect way to unwind after a day on court.</div>
    </div>
    <div class="included-card">
      <span class="ic-icon">🏨</span>
      <div class="ic-title">Tomir Portals Suites</div>
      <div class="ic-desc">3 nights at one of Mallorca's most exclusive 4★ hotels. Portals Nous, minutes from the sea.</div>
    </div>
    <div class="included-card">
      <span class="ic-icon">✈️</span>
      <div class="ic-title">Airport Transfers</div>
      <div class="ic-desc">Round-trip transfer from Palma de Mallorca airport (PMI) to the hotel. No logistics to worry about.</div>
    </div>
    <div class="included-card">
      <span class="ic-icon">🎒</span>
      <div class="ic-title">Welcome Pack</div>
      <div class="ic-desc">Official MPC welcome pack with exclusive merchandise and everything you need for the camp.</div>
    </div>
  </div>

  <p class="included-footer">All included in a single package · Limited spots available</p>
</div>

<!-- PAGE 4: HOTEL & LOCATION -->
<div class="page hotel">
  <span class="page-label">Venue</span>
  <h2 class="page-title">Tomir <span class="highlight">Portals Suites</span></h2>
  <p class="page-desc">Accommodation included at Tomir Portals Suites, one of the most exclusive hotels in Mallorca. Portals Nous, minutes from the sea with direct access to the best padel courts on the island.</p>

  <div class="hotel-info-grid">
    <div class="hotel-info-item">
      <div class="hi-icon">🏨</div>
      <div>
        <div class="hi-label">Hotel</div>
        <div class="hi-value">Tomir Portals Suites — Portals Nous, Mallorca<br>4★ hotel with premium amenities and sea proximity</div>
      </div>
    </div>
    <div class="hotel-info-item">
      <div class="hi-icon">📅</div>
      <div>
        <div class="hi-label">Dates</div>
        <div class="hi-value">August 6–9, 2026 (3 nights included)<br>Check-in Wednesday · Check-out Saturday</div>
      </div>
    </div>
    <div class="hotel-info-item">
      <div class="hi-icon">🌡️</div>
      <div>
        <div class="hi-label">Weather</div>
        <div class="hi-value">August in Mallorca · 28–32°C<br>Guaranteed sunshine, perfect conditions for padel</div>
      </div>
    </div>
    <div class="hotel-info-item">
      <div class="hi-icon">✈️</div>
      <div>
        <div class="hi-label">Airport</div>
        <div class="hi-value">Palma de Mallorca (PMI)<br>Round-trip transfer included in the package</div>
      </div>
    </div>
    <div class="hotel-info-item">
      <div class="hi-icon">🏸</div>
      <div>
        <div class="hi-label">Padel Courts</div>
        <div class="hi-value">Professional padel courts nearby<br>4 coaching sessions + 1 Corcuera Cup tournament</div>
      </div>
    </div>
  </div>
</div>

<!-- PAGE 5: REGISTER CTA -->
<div class="page register">
  <div class="reg-content">
    <span class="page-label" style="color:${ORANGE};text-align:center;display:block;margin-bottom:20px">Join Us</span>
    <h2 class="reg-title">Sign up for<br><span style="color:${ORANGE}">MPC 2026</span></h2>
    <p class="reg-subtitle">Secure your spot at the Mallorca Padel Camp LTP Edition. August 6–9, 2026 · Tomir Portals Suites. Limited spots.</p>
    <div class="reg-btn">✦ REGISTER NOW</div>
    <span class="reg-url">mallorca-padel.vercel.app</span>
    <div class="reg-divider"></div>
    <div class="reg-details">
      Mallorca Padel Camp 2026 LTP Edition<br>
      August 6–9, 2026 · Tomir Portals Suites · Portals Nous, Mallorca<br>
      4 coaching sessions · Corcuera Cup · Sunset boat trip · Airport transfers
    </div>
    <div class="partnership">
      <span>In partnership with</span>
      <div class="ltp-sm">
        <img src="LTP_LOGO_PLACEHOLDER" alt="Love The Padel">
      </div>
    </div>
  </div>
</div>

</body>
</html>`;

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Load HTML
  await page.setContent(html, { waitUntil: "networkidle" });

  // Replace logo placeholders with actual base64 image
  const logoPath = path.resolve("public/ltp-logo.png");
  if (fs.existsSync(logoPath)) {
    const logoB64 = fs.readFileSync(logoPath).toString("base64");
    const logoDataUri = `data:image/png;base64,${logoB64}`;
    await page.evaluate((uri) => {
      document.querySelectorAll('img[src="LTP_LOGO_PLACEHOLDER"]').forEach((img) => {
        img.setAttribute("src", uri);
      });
    }, logoDataUri);
    await page.waitForTimeout(500);
  }

  // Generate PDF
  const pdfBytes = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  fs.writeFileSync(PDF_PATH, pdfBytes);
  await browser.close();

  const sizeKB = (pdfBytes.length / 1024).toFixed(0);
  console.log(`✅ PDF saved: ${PDF_PATH} (${sizeKB} KB, 5 pages)`);
}

run().catch((e) => { console.error(e); process.exit(1); });
