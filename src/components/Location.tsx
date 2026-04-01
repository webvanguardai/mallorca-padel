"use client";

import AnimatedSection from "./AnimatedSection";

export default function Location() {
  return (
    <section id="location" className="section-padding bg-deep-blue relative overflow-hidden noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-padel-orange/40 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">
              Venue
            </span>
            <h2 className="section-title text-white mb-6">
              Tomir <span className="gradient-text">Portals Suites</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Alojamiento incluido en <strong className="text-white">Tomir Portals Suites</strong>, uno de los hoteles más exclusivos de Mallorca. Portals Nous, a minutos del mar y con acceso directo a las mejores pistas de pádel de la isla.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: "🏨", label: "Hotel", value: "Tomir Portals Suites — Portals Nous, Mallorca" },
                { icon: "📅", label: "Fechas", value: "6–9 agosto 2026 (3 noches)" },
                { icon: "🌡️", label: "Tiempo", value: "Agosto en Mallorca · 28–32°C, sol garantizado" },
                { icon: "✈️", label: "Aeropuerto", value: "Palma de Mallorca (PMI) — transfer incluido" },
                { icon: "🏸", label: "Pistas", value: "Pistas profesionales de pádel · 3 sesiones incluidas" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <div>
                    <span className="text-white/40 text-xs uppercase tracking-wider block">
                      {item.label}
                    </span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.olahotels.com/en/tomir-portals-suites/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-padel-orange text-white font-bold px-6 py-3 text-sm uppercase tracking-wider hover:bg-orange-600 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver Hotel
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.5!2d2.5413!3d39.5163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297753b93b1c4e7%3A0x9e6b5b7e1c3e1b8!2sTomir%20Portals%20Suites%2C%20Portals%20Nous%2C%20Mallorca!5e0!3m2!1sen!2ses!4v1700000000000"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="MPC 2026 Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
