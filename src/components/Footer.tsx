"use client";

export default function Footer() {
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
                  Mallorca Padel Camp
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Padel, sol y Mediterráneo. 4 días en Tomir Portals Suites, Mallorca.
              6–9 agosto 2026.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Tournament
            </h4>
            <ul className="space-y-2 text-sm">
              {["About", "Players", "Results", "Prizes", "Schedule"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
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
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/downloads/Breakdown_MPC_2026.pdf"
                  download
                  className="hover:text-padel-orange transition-colors duration-300"
                >
                  Download Breakdown PDF
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-padel-orange transition-colors duration-300">
                  Register
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-padel-orange transition-colors duration-300">
                  Venue & Travel
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contact
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

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © 2026 Mallorca Padel Camp. All rights reserved.
          </p>
          <p className="text-xs">
            Built by{" "}
            <a
              href="https://webvanguard.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-padel-orange hover:underline"
            >
              Web Vanguard AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
