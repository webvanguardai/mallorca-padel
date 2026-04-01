"use client";

import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

export default function Results() {
  const { t } = useLanguage();

  return (
    <section id="results" className="section-padding bg-light-gray relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-padel-orange/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">{t.results.label}</span>
          <h2 className="section-title mb-4">
            {t.results.title} <span className="gradient-text">{t.results.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mb-14">{t.results.subtitle}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="text-center bg-deep-blue/5 rounded-2xl p-12 border border-deep-blue/10 max-w-2xl mx-auto">
            <span className="text-5xl block mb-4">📡</span>
            <h3 className="font-heading text-xl font-bold text-deep-blue mb-3">{t.results.comingSoon}</h3>
            <p className="text-body-gray">{t.results.comingSoonSub}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
