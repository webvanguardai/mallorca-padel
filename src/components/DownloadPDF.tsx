"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const pdfContents = [
  "Itinerario completo día a día (6–9 agosto)",
  "Qué está incluido y qué no",
  "Info del hotel Tomir Portals Suites",
  "Sesiones de pádel y horarios",
  "Corcuera Cup — formato y reglas",
  "Boat trip sunset — detalles",
  "Transfers aeropuerto incluidos",
  "Guía de llegada a Mallorca (PMI)",
];

export default function DownloadPDF() {
  return (
    <section id="download" className="relative overflow-hidden">
      {/* Top diagonal */}
      <div className="bg-white h-20 diagonal-clip" />

      <div
        className="section-padding -mt-1 noise-overlay relative"
        style={{
          backgroundColor: "#0f2233",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(135deg, #1a3a52 0%, #0f2233 50%, #1a3a52 100%)",
          backgroundSize: "60px 60px, 60px 60px, 100% 100%",
        }}
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">
                Documento oficial
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                Camp <span className="gradient-text">Breakdown</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Descarga el documento oficial con el itinerario completo, qué está incluido, info del hotel Tomir Portals Suites y todo lo que necesitas saber para el camp.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* PDF preview info */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Breakdown_MPC_2026.pdf</h3>
                    <p className="text-white/40 text-sm">Official Tournament Document</p>
                  </div>
                </div>

                <h4 className="text-white/60 text-xs uppercase tracking-wider mb-4 font-bold">
                  What&apos;s Inside
                </h4>
                <ul className="space-y-3">
                  {pdfContents.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <svg className="w-4 h-4 text-padel-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Download CTA */}
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-br from-padel-orange to-orange-600 rounded-2xl p-10 shadow-2xl shadow-padel-orange/20"
                >
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </div>

                  <h3 className="font-heading text-2xl font-black text-white mb-2">
                    Download Now
                  </h3>
                  <p className="text-white/80 text-sm mb-6">
                    Free PDF — No registration required
                  </p>

                  <a
                    href="/downloads/Breakdown_MPC_2026.pdf"
                    download
                    className="inline-flex items-center gap-3 bg-white text-padel-orange font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 text-lg group"
                  >
                    <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </a>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Bottom diagonal */}
      <div className="bg-white h-20 diagonal-clip-reverse -mt-1" />
    </section>
  );
}
