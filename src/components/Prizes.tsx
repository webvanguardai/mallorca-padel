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
          <p className="text-center text-body-gray text-sm">
            {t.prizes.footerNote}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
