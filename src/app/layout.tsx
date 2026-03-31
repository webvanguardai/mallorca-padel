import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "700", "900"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mallorca Padel Cup 2026 | MPC — International Padel Tournament",
  description:
    "Join the Mallorca Padel Cup 2026 — the premier international padel tournament in Mallorca, Spain. Men's, Women's & Mixed Doubles. €25,000 prize pool. Register now!",
  keywords: [
    "padel",
    "tournament",
    "mallorca",
    "padel cup",
    "MPC 2026",
    "padel spain",
    "international padel",
  ],
  openGraph: {
    title: "Mallorca Padel Cup 2026",
    description:
      "The premier international padel tournament in Mallorca, Spain. €25,000 prize pool.",
    type: "website",
    locale: "en_US",
    url: "https://mallorca-padel.vercel.app",
    siteName: "Mallorca Padel Cup",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mallorca Padel Cup 2026",
    description:
      "The premier international padel tournament in Mallorca, Spain.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        {/* GA4 placeholder */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}} /> */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
