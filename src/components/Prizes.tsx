"use client";

import AnimatedSection from "./AnimatedSection";

const prizes = [
  {
    position: "1st",
    mens: "€8,000",
    womens: "€5,000",
    mixed: "€3,000",
    color: "from-accent-gold to-yellow-600",
    icon: "🥇",
    border: "border-accent-gold",
  },
  {
    position: "2nd",
    mens: "€4,000",
    womens: "€2,500",
    mixed: "€1,500",
    color: "from-gray-300 to-gray-400",
    icon: "🥈",
    border: "border-gray-300",
  },
  {
    position: "3rd",
    mens: "€1,500",
    womens: "€1,000",
    mixed: "€500",
    color: "from-orange-600 to-orange-800",
    icon: "🥉",
    border: "border-orange-700",
  },
];

export default function Prizes() {
  return (
    <section id="prizes" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">
              What&apos;s at Stake
            </span>
            <h2 className="section-title mx-auto">
              Prize <span className="gradient-text">Pool</span>
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 bg-deep-blue text-white font-heading text-4xl md:text-5xl font-black px-8 py-4 rounded-2xl">
              <span className="text-3xl">💰</span>
              €25,000
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {prizes.map((prize, i) => (
            <AnimatedSection key={prize.position} delay={i * 0.15}>
              <div className={`card p-8 text-center border-t-4 ${prize.border} hover:-translate-y-3 transition-all duration-500`}>
                <span className="text-5xl block mb-4">{prize.icon}</span>
                <h3 className="font-heading text-3xl font-black text-deep-blue mb-6">
                  {prize.position} Place
                </h3>
                <div className="space-y-4">
                  <div className="bg-light-gray rounded-xl p-4">
                    <span className="text-xs font-bold text-body-gray uppercase tracking-wider block mb-1">
                      Men&apos;s Doubles
                    </span>
                    <span className="font-heading text-2xl font-bold text-deep-blue">{prize.mens}</span>
                  </div>
                  <div className="bg-light-gray rounded-xl p-4">
                    <span className="text-xs font-bold text-body-gray uppercase tracking-wider block mb-1">
                      Women&apos;s Doubles
                    </span>
                    <span className="font-heading text-2xl font-bold text-deep-blue">{prize.womens}</span>
                  </div>
                  <div className="bg-light-gray rounded-xl p-4">
                    <span className="text-xs font-bold text-body-gray uppercase tracking-wider block mb-1">
                      Mixed Doubles
                    </span>
                    <span className="font-heading text-2xl font-bold text-deep-blue">{prize.mixed}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <p className="text-center text-body-gray text-sm">
            * All prizes per team. Additional sponsor prizes to be announced.
            Full breakdown available in the{" "}
            <a href="#download" className="text-padel-orange font-bold hover:underline">
              tournament PDF
            </a>.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
