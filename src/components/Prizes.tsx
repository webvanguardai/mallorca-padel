"use client";

import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

export default function Prizes() {
  const { t } = useLanguage();

  return (
    <section id="prizes" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">
              {t.prizes.label}
            </span>
            <h2 className="section-title mx-auto">
              {t.prizes.title} <span className="gradient-text">{t.prizes.titleHighlight}</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {t.prizes.items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="card p-8 text-center border-t-4 border-padel-orange/30 hover:-translate-y-3 transition-all duration-500 group">
                <div className="w-16 h-16 bg-padel-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-deep-blue mb-3">
                  {item.title}
                </h3>
                <p className="text-body-gray leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="max-w-sm mx-auto mb-12">
            {/* Full package */}
            <div className="card p-8 text-center border-t-4 border-padel-orange hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-14 h-14 bg-padel-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🛏️</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-deep-blue mb-1">
                {t.prizes.pricing.full.label}
              </h3>
              <p className="text-body-gray text-sm mb-4">{t.prizes.pricing.full.description}</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-heading text-4xl font-black text-padel-orange">{t.prizes.pricing.full.price}</span>
                <span className="text-padel-orange font-bold text-lg">{t.prizes.pricing.full.currency}</span>
              </div>
              <span className="text-body-gray text-xs uppercase tracking-wider">{t.prizes.pricing.perPerson}</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-center text-body-gray text-sm mb-10">
            {t.prizes.footerNote}
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-[80px] bg-deep-blue/10" />
            <a href="https://lovethepadel.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className="text-body-gray text-[11px] uppercase tracking-[0.2em]">In partnership with</span>
              <img src="/ltp-logo.png" alt="Love The Padel" className="h-12" />
            </a>
            <div className="h-px flex-1 max-w-[80px] bg-deep-blue/10" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
