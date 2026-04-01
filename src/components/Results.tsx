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
          <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">
            {t.results.label}
          </span>
          <h2 className="section-title mb-4">
            {t.results.title} <span className="gradient-text">{t.results.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mb-14">
            {t.results.subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="text-center bg-deep-blue/5 rounded-2xl p-12 md:p-16 border border-deep-blue/10 max-w-3xl mx-auto">
            <span className="text-5xl block mb-4">📡</span>
            <h3 className="font-heading text-2xl font-bold text-deep-blue mb-3">
              {t.results.comingSoonTitle}
            </h3>
            <p className="text-body-gray text-lg leading-relaxed mb-4">
              {t.results.comingSoonText}
            </p>
            <p className="text-padel-orange font-bold text-sm uppercase tracking-wider mb-8">
              {t.results.dateNote}
            </p>
            <a
              href="#register"
              className="inline-flex items-center gap-2 bg-padel-orange text-white font-bold px-8 py-3.5 text-sm uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-padel-orange/30"
              style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {t.results.ctaText}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
