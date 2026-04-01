"use client";

import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "Padel Coaching",
    icon: "🏸",
    teams: "3 Sessions",
    format: "Morning & Evening",
    description: "Sesiones de coaching profesional en pista. Mejora tu técnica con entrenadores expertos en el mejor entorno del Mediterráneo.",
  },
  {
    title: "Corcuera Cup",
    icon: "🏆",
    teams: "Torneo incluido",
    format: "Día 3 · 5pm–9pm",
    description: "Competición oficial Corcuera Cup con todos los participantes del camp. El momento más esperado del fin de semana.",
  },
  {
    title: "Boat Trip",
    icon: "⛵",
    teams: "Incluido",
    format: "Día 2 · 3pm–7pm",
    description: "Sunset boat trip por las aguas cristalinas de Mallorca. Pádel, sol y Mediterráneo — la combinación perfecta.",
  },
];

const schedule = [
  { day: "Mié 6 Ago", event: "Llegada · Transfer al hotel · 1ª sesión pádel 5pm–7pm", icon: "✈️" },
  { day: "Jue 7 Ago", event: "Desayuno · Sesión mañana 10am–12pm · Boat trip sunset 3pm–7pm", icon: "⛵" },
  { day: "Vie 8 Ago", event: "Desayuno · Sesión mañana 11am–1pm · Corcuera Cup 5pm–9pm", icon: "🏆" },
  { day: "Sáb 9 Ago", event: "Desayuno · Sesión final 11am–1pm · Tour Palma · Transfer aeropuerto 6pm", icon: "🌅" },
];

export default function TournamentInfo() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-padel-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-deep-blue/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">
                The Tournament
              </span>
              <h2 className="section-title">
                ¿Qué es el <span className="gradient-text">MPC?</span>
              </h2>
            </div>
            <p className="section-subtitle md:text-right">
              El Mallorca Padel Camp es una experiencia de 4 días que combina pádel de alto nivel, alojamiento en Tomir Portals Suites y lo mejor del Mediterráneo. Coaching, competición y boat trip incluidos.
            </p>
          </div>
        </AnimatedSection>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.15}>
              <div className="card p-8 group hover:-translate-y-2 border border-transparent hover:border-padel-orange/20">
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </span>
                <h3 className="font-heading text-2xl font-bold text-deep-blue mb-2">
                  {cat.title}
                </h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-deep-blue/10 text-deep-blue text-xs font-bold px-3 py-1 rounded-full">
                    {cat.teams}
                  </span>
                  <span className="bg-padel-orange/10 text-padel-orange text-xs font-bold px-3 py-1 rounded-full">
                    {cat.format}
                  </span>
                </div>
                <p className="text-body-gray leading-relaxed">{cat.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Schedule */}
        <AnimatedSection>
          <h3 className="font-heading text-3xl font-bold text-deep-blue mb-10 text-center">
            Tournament Schedule
          </h3>
        </AnimatedSection>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-padel-orange/50 via-deep-blue/30 to-padel-orange/50" />

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-1 md:gap-0">
            {schedule.map((item, i) => (
              <AnimatedSection key={item.day} delay={i * 0.1}>
                <div
                  className={`flex items-center gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}>
                    <div className="bg-light-gray rounded-xl p-5 inline-block hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="font-bold text-padel-orange text-sm uppercase tracking-wider">
                        {item.day}
                      </span>
                      <p className="font-heading text-lg font-bold text-deep-blue mt-1">
                        {item.event}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-padel-orange rounded-full border-4 border-white shadow-lg z-10 flex-shrink-0" />
                  <div className="md:w-1/2" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
