"use client";

import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

export default function Players() {
  const { t } = useLanguage();

  return (
    <section
      id="players"
      className="section-padding relative overflow-hidden noise-overlay"
      style={{
        backgroundColor: "#1a3a52",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      <div className="absolute top-10 left-10 w-40 h-40 border border-padel-orange/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-60 h-60 border border-padel-orange/10 rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">{t.players.label}</span>
          <h2 className="section-title text-white mb-4">
            {t.players.title} <span className="gradient-text">{t.players.titleHighlight}</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mb-14">{t.players.subtitle}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center max-w-2xl mx-auto">
            <span className="text-6xl block mb-6">🏸</span>
            <h3 className="font-heading text-2xl font-black text-white mb-3">{t.players.soon}</h3>
            <p className="text-white/50 mb-8">{t.players.soonSub}</p>
            <a
              href="#register"
              className="inline-flex items-center gap-2 bg-padel-orange text-white font-bold px-8 py-3.5 text-sm uppercase tracking-wider hover:bg-orange-600 transition-all duration-300"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              {t.players.cta}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
