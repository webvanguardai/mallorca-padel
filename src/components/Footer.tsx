"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark-navy text-white/60 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-padel-orange/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-padel-orange rounded-lg flex items-center justify-center font-heading font-bold text-white text-xl">M</div>
              <div>
                <span className="text-white font-heading font-bold text-lg block">MPC 2026</span>
                <span className="text-padel-orange text-xs tracking-widest uppercase">Mallorca Padel Camp</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Camp links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{t.footer.col1}</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: t.footer.links1[0], href: "#about" },
                { label: t.footer.links1[1], href: "#players" },
                { label: t.footer.links1[2], href: "#results" },
                { label: t.footer.links1[3], href: "#prizes" },
                { label: t.footer.links1[4], href: "#about" },
              ].map((link) => (
                <li key={link.href + link.label}>
                  <a href={link.href} className="hover:text-padel-orange transition-colors duration-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{t.footer.col2}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/downloads/Breakdown_MPC_2026.pdf" download className="hover:text-padel-orange transition-colors duration-300">{t.footer.links2[0]}</a></li>
              <li><a href="#register" className="hover:text-padel-orange transition-colors duration-300">{t.footer.links2[1]}</a></li>
              <li><a href="#location" className="hover:text-padel-orange transition-colors duration-300">{t.footer.links2[2]}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{t.footer.col3}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@mallorcapadelcamp.com" className="hover:text-padel-orange transition-colors duration-300">info@mallorcapadelcamp.com</a></li>
              <li className="text-sm">Portals Nous, Mallorca, Spain</li>
            </ul>
            <div className="flex gap-3 mt-4">
              {["I", "X", "T"].map((social) => (
                <a key={social} href="#" className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-padel-orange/20 hover:text-padel-orange transition-all duration-300 text-xs font-bold">{social}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">{t.footer.copyright}</p>
          <p className="text-xs">
            {t.footer.builtBy}{" "}
            <a href="https://truelovecreative.es" target="_blank" rel="noopener noreferrer" className="text-padel-orange hover:underline">
              True Love Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
