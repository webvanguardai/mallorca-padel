"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="bg-white/10 rounded-full px-3 py-1 text-xs font-bold flex items-center gap-1">
      <button
        onClick={() => setLang("en")}
        className={`px-1.5 py-0.5 rounded-full transition-colors duration-200 ${
          lang === "en" ? "text-padel-orange" : "text-white/50 hover:text-white/80"
        }`}
      >
        EN
      </button>
      <span className="text-white/30">|</span>
      <button
        onClick={() => setLang("es")}
        className={`px-1.5 py-0.5 rounded-full transition-colors duration-200 ${
          lang === "es" ? "text-padel-orange" : "text-white/50 hover:text-white/80"
        }`}
      >
        ES
      </button>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (scrolled && mobileOpen) setMobileOpen(false);
  }, [scrolled]);

  return (
    <>
      {/* Línea superior naranja */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-padel-orange z-50" />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-[2px] left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#0d1f2d]/95 backdrop-blur-md shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 bg-padel-orange flex items-center justify-center font-heading font-black text-white text-lg group-hover:rotate-12 transition-transform duration-300">
              M
            </div>
            <div>
              <span className="text-white font-heading font-bold text-base tracking-wide">MPC</span>
              <span className="text-padel-orange text-[10px] block -mt-0.5 tracking-widest uppercase">Ago 2026</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-padel-orange transition-colors duration-200 text-xs font-medium tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Toggle + CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <LanguageToggle />
            <a
              href="#register"
              className="bg-padel-orange text-white font-bold px-5 py-2 text-xs uppercase tracking-wider hover:bg-orange-600 transition-all duration-300"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 flex-shrink-0 transition-opacity duration-200 ${mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu — full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#0a1922]/98 backdrop-blur-xl flex flex-col"
          >
            {/* Línea naranja top en el overlay también */}
            <div className="h-[2px] bg-padel-orange flex-shrink-0" />

            {/* Header del menu */}
            <div className="px-5 h-16 flex items-center justify-between flex-shrink-0">
              <span className="text-white font-heading font-bold text-base">MPC 2026</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white/60 hover:text-white w-10 h-10 flex items-center justify-center"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links centrados */}
            <div className="flex-1 flex flex-col items-center justify-center gap-2 px-5">
              {t.nav.links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="text-white/80 hover:text-padel-orange text-3xl font-heading font-black uppercase tracking-wide transition-colors duration-200 py-2"
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Language Toggle in mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4"
              >
                <LanguageToggle />
              </motion.div>

              {/* CTA en mobile */}
              <motion.a
                href="#register"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 bg-padel-orange text-white font-bold px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-orange-600 transition-all duration-300"
              >
                {t.nav.ctaMobile}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
