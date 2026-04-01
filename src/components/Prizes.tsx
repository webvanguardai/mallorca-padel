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
            <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">{t.prizes.label}</span>
            <h2 className="section-title mx-auto">
              {t.prizes.title} <span className="gradient-text">{t.prizes.titleHighlight}</span>
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 bg-deep-blue text-white font-heading text-xl md:text-2xl font-black px-8 py-4 rounded-2xl">
              <span className="text-2xl">🏸</span>
              {t.prizes.total}
            </div>
          </div>
        </AnimatedSection>

        {/* Included items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.prizes.items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="card p-6 border-t-4 border-padel-orange hover:-translate-y-2 transition-all duration-500">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-heading text-xl font-bold text-deep-blue mb-1">{item.title}</h3>
                <span className="inline-block bg-padel-orange/10 text-padel-orange text-xs font-bold px-3 py-1 rounded-full mb-3">{item.sub}</span>
                <p className="text-body-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Not included */}
        <AnimatedSection delay={0.3}>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="font-heading text-lg font-bold text-deep-blue mb-4 text-center">{t.prizes.notIncludedTitle}</h4>
            <ul className="flex flex-wrap gap-3 justify-center">
              {t.prizes.notIncluded.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-body-gray bg-white border border-gray-200 rounded-full px-4 py-1.5">
                  <span className="text-red-400 font-bold">✗</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
