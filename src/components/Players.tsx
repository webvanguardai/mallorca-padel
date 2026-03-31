"use client";

import AnimatedSection from "./AnimatedSection";

const players = [
  { name: "Carlos Ruiz", partner: "Miguel Torres", country: "🇪🇸", category: "Men's", seed: 1 },
  { name: "Alejandro Vega", partner: "Diego Morales", country: "🇦🇷", category: "Men's", seed: 2 },
  { name: "Marco Rossi", partner: "Luca Bianchi", country: "🇮🇹", category: "Men's", seed: 3 },
  { name: "Pierre Dubois", partner: "Antoine Laurent", country: "🇫🇷", category: "Men's", seed: 4 },
  { name: "Sofia Martinez", partner: "Ana García", country: "🇪🇸", category: "Women's", seed: 1 },
  { name: "Valentina Costa", partner: "Camila Reyes", country: "🇧🇷", category: "Women's", seed: 2 },
  { name: "Emma Johansson", partner: "Klara Berg", country: "🇸🇪", category: "Women's", seed: 3 },
  { name: "Carlos & Sofia", partner: "Mixed Pair", country: "🇪🇸", category: "Mixed", seed: 1 },
];

export default function Players() {
  return (
    <section id="players" className="section-padding bg-deep-blue relative overflow-hidden noise-overlay court-lines">
      <div className="absolute top-10 left-10 w-40 h-40 border border-padel-orange/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-60 h-60 border border-padel-orange/10 rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">
            Competitors
          </span>
          <h2 className="section-title text-white mb-4">
            Featured <span className="gradient-text">Players</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mb-14">
            Top seeds from around the world competing for the Mallorca Padel Cup title.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.map((player, i) => (
            <AnimatedSection key={player.name} delay={i * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-padel-orange/30 transition-all duration-500 group hover:-translate-y-2">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 bg-gradient-to-br from-padel-orange to-accent-gold rounded-xl flex items-center justify-center text-white font-heading font-bold text-xl mb-4 group-hover:rotate-6 transition-transform duration-300">
                  {player.name.charAt(0)}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{player.country}</span>
                  <span className="bg-padel-orange/20 text-padel-orange text-xs font-bold px-2 py-0.5 rounded-full">
                    Seed #{player.seed}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg">{player.name}</h3>
                <p className="text-white/50 text-sm">& {player.partner}</p>
                <span className="inline-block mt-3 text-xs font-bold text-white/40 uppercase tracking-wider border border-white/10 px-2 py-1 rounded">
                  {player.category}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="text-center text-white/40 mt-10 text-sm">
            + 56 more teams registered. Full list available in the{" "}
            <a href="#download" className="text-padel-orange hover:underline">
              tournament breakdown PDF
            </a>
            .
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
