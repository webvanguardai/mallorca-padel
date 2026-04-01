"use client";

import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

export default function Sponsors() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-light-gray relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">
              {t.sponsors.label}
            </span>
            <h2 className="section-title">
              {t.sponsors.title} <span className="gradient-text">{t.sponsors.titleHighlight}</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="bg-white rounded-2xl p-12 md:p-16 text-center max-w-3xl mx-auto border border-transparent hover:border-padel-orange/20 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-deep-blue/10 to-padel-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🤝</span>
            </div>
            <p className="text-body-gray text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              {t.sponsors.description}
            </p>
            <a
              href="#register"
              className="inline-flex items-center gap-2 bg-padel-orange text-white font-bold px-8 py-3.5 text-sm uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-padel-orange/30"
              style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.sponsors.ctaText}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
