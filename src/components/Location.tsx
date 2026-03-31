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
              Palma de <span className="gradient-text">Mallorca</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Set in the heart of the Mediterranean, the MPC 2026 takes place at
              the world-class <strong className="text-white">Rafa Nadal Academy</strong> padel
              facilities. Crystal-clear courts, stunning views, and professional-grade
              infrastructure.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: "📍", label: "Address", value: "Rafa Nadal Academy, Manacor, Mallorca, Spain" },
                { icon: "🏟️", label: "Courts", value: "8 professional padel courts (4 covered)" },
                { icon: "🌡️", label: "Weather", value: "September avg. 26°C — perfect conditions" },
                { icon: "✈️", label: "Airport", value: "Palma de Mallorca (PMI) — 45 min drive" },
                { icon: "🏨", label: "Hotels", value: "Partner rates at nearby resort hotels" },
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
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.9!2d3.2194!3d39.5693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297b809a5a3b4e3%3A0x9c75e8e1c3e1e8!2sPalma%2C%20Mallorca!5e0!3m2!1sen!2ses!4v1700000000000"
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
