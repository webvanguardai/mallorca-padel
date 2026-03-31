"use client";

import AnimatedSection from "./AnimatedSection";

const bracketMatches = [
  { round: "Quarter-Final 1", team1: "Ruiz / Torres 🇪🇸", team2: "Dubois / Laurent 🇫🇷", score: "—", status: "Upcoming" },
  { round: "Quarter-Final 2", team1: "Vega / Morales 🇦🇷", team2: "Rossi / Bianchi 🇮🇹", score: "—", status: "Upcoming" },
  { round: "Quarter-Final 3", team1: "TBD", team2: "TBD", score: "—", status: "TBD" },
  { round: "Quarter-Final 4", team1: "TBD", team2: "TBD", score: "—", status: "TBD" },
];

export default function Results() {
  return (
    <section id="results" className="section-padding bg-light-gray relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-padel-orange/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">
            Competition
          </span>
          <h2 className="section-title mb-4">
            Matches & <span className="gradient-text">Results</span>
          </h2>
          <p className="section-subtitle mb-14">
            Follow the tournament bracket live. Results updated after each match.
          </p>
        </AnimatedSection>

        {/* Bracket */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {bracketMatches.map((match, i) => (
            <AnimatedSection key={match.round} delay={i * 0.1}>
              <div className="card p-6 border-l-4 border-l-padel-orange hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-bold text-deep-blue text-sm">
                    {match.round}
                  </span>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      match.status === "Upcoming"
                        ? "bg-padel-orange/10 text-padel-orange"
                        : "bg-deep-blue/10 text-deep-blue"
                    }`}
                  >
                    {match.status}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-light-gray rounded-lg p-3">
                    <span className="font-medium text-deep-blue">{match.team1}</span>
                    <span className="font-heading font-bold text-lg text-body-gray">{match.score}</span>
                  </div>
                  <div className="text-center text-xs text-body-gray font-bold">VS</div>
                  <div className="flex items-center justify-between bg-light-gray rounded-lg p-3">
                    <span className="font-medium text-deep-blue">{match.team2}</span>
                    <span className="font-heading font-bold text-lg text-body-gray">{match.score}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center bg-deep-blue/5 rounded-2xl p-8 border border-deep-blue/10">
            <span className="text-4xl block mb-3">📡</span>
            <h3 className="font-heading text-xl font-bold text-deep-blue mb-2">
              Live Results Coming Soon
            </h3>
            <p className="text-body-gray">
              Full bracket and live scoring will be available once the tournament begins on September 15, 2026.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
