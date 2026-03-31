"use client";

import AnimatedSection from "./AnimatedSection";

const sponsors = [
  { name: "Bullpadel", tier: "Title Sponsor" },
  { name: "HEAD", tier: "Official Ball" },
  { name: "Visit Mallorca", tier: "Tourism Partner" },
  { name: "Estrella Damm", tier: "Official Beer" },
  { name: "Decathlon", tier: "Equipment Partner" },
  { name: "Iberostar", tier: "Hotel Partner" },
];

export default function Sponsors() {
  return (
    <section className="section-padding bg-light-gray relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">
              Partners
            </span>
            <h2 className="section-title">
              Our <span className="gradient-text">Sponsors</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor, i) => (
            <AnimatedSection key={sponsor.name} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full border border-transparent hover:border-padel-orange/20">
                <div className="w-16 h-16 bg-gradient-to-br from-deep-blue/10 to-padel-orange/10 rounded-xl flex items-center justify-center font-heading font-bold text-deep-blue text-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {sponsor.name.charAt(0)}
                </div>
                <span className="font-bold text-deep-blue text-sm">{sponsor.name}</span>
                <span className="text-body-gray text-xs mt-1">{sponsor.tier}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="text-center text-body-gray text-sm mt-10">
            Interested in sponsoring MPC 2026?{" "}
            <a href="#register" className="text-padel-orange font-bold hover:underline">
              Get in touch
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
