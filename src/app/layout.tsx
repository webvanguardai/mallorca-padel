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
  title: "Mallorca Padel Camp 2026 | MPC — Agosto, Tomir Portals Suites",
  description:
    "Mallorca Padel Camp 2026 — 4 días de pádel, sol y Mediterráneo. 6–9 agosto en Tomir Portals Suites. Coaching, Corcuera Cup, boat trip y transfers incluidos. ¡Plazas limitadas!",
  keywords: [
    "padel",
    "mallorca padel camp",
    "MPC 2026",
    "padel holidays mallorca",
    "padel camp spain",
    "tomir portals suites",
    "corcuera cup",
  ],
  openGraph: {
    title: "Mallorca Padel Camp 2026",
    description:
      "4 días de pádel, sol y Mediterráneo. 6–9 agosto en Tomir Portals Suites, Mallorca.",
    type: "website",
    locale: "es_ES",
    url: "https://mallorca-padel.vercel.app",
    siteName: "Mallorca Padel Camp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mallorca Padel Camp 2026",
    description:
      "4 días de pádel en Mallorca · Tomir Portals Suites · 6–9 agosto 2026.",
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
