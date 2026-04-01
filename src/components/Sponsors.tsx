"use client";

import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

export default function Sponsors() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-light-gray relative">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">{t.sponsors.label}</span>
          <h2 className="section-title mb-6">
            {t.sponsors.title} <span className="gradient-text">{t.sponsors.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto mb-10">{t.sponsors.subtitle}</p>
          <a
            href="#register"
            className="inline-flex items-center gap-2 bg-deep-blue text-white font-bold px-8 py-4 rounded-xl hover:bg-deep-blue/80 transition-all duration-300 text-sm uppercase tracking-wider"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.sponsors.cta}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
