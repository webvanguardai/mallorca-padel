"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerNavHrefs = ["#about", "#players", "#results", "#prizes", "#about"];

  return (
    <footer className="bg-dark-navy text-white/60 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-padel-orange/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-padel-orange rounded-lg flex items-center justify-center font-heading font-bold text-white text-xl">
                M
              </div>
              <div>
                <span className="text-white font-heading font-bold text-lg block">MPC 2026</span>
                <span className="text-padel-orange text-xs tracking-widest uppercase">
                  Mallorca Padel Camp LTP Edition
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.tournamentTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              {t.footer.tournamentLinks.map((link, i) => (
                <li key={link}>
                  <a
                    href={footerNavHrefs[i]}
                    className="hover:text-padel-orange transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.resourcesTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/downloads/Breakdown_MPC_2026.pdf"
                  download
                  className="hover:text-padel-orange transition-colors duration-300"
                >
                  {t.footer.resourcesDownload}
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-padel-orange transition-colors duration-300">
                  {t.footer.resourcesRegister}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-padel-orange transition-colors duration-300">
                  {t.footer.resourcesVenue}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@mallorcapadelcup.com"
                  className="hover:text-padel-orange transition-colors duration-300"
                >
                  info@mallorcapadelcup.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+34600000000"
                  className="hover:text-padel-orange transition-colors duration-300"
                >
                  +34 600 000 000
                </a>
              </li>
              <li className="text-sm">Palma de Mallorca, Spain</li>
            </ul>
            <div className="flex gap-3 mt-4">
              {["Instagram", "X", "TikTok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-padel-orange/20 hover:text-padel-orange transition-all duration-300 text-xs font-bold"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Partner badge */}
        <div className="border-t border-white/10 pt-8 pb-6 flex justify-center">
          <a href="https://lovethepadel.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity duration-300">
            <span className="text-[10px] uppercase tracking-widest text-white/40">In partnership with</span>
            <img src="/ltp-logo.png" alt="Love The Padel" className="h-8 brightness-[2] invert-0" />
          </a>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            {t.footer.copyright}
          </p>
          <p className="text-xs">
            {t.footer.builtBy}{" "}
            <a
              href="https://truelovecreative.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-padel-orange hover:underline"
            >
              TrueLoveCreative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
