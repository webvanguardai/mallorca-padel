"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay" style={{ backgroundColor: "#0f2233", backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(135deg, #1a3a52 0%, #0f2233 50%, #1a3a52 100%)", backgroundSize: "60px 60px, 60px 60px, 100% 100%" }}>
      {/* Background glows */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-padel-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-padel-orange/5 rounded-full blur-3xl" />

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-padel-orange/5 skew-x-[-12deg] translate-x-20" />

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-padel-orange/40 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5"
        >
          <span className="inline-flex items-center gap-2 bg-padel-orange/20 text-padel-orange font-bold text-xs sm:text-sm uppercase tracking-[0.15em] px-4 py-2 border border-padel-orange/30">
            🏆 September 15–21, 2026 · Mallorca
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading font-black text-white leading-none mb-5"
          style={{ fontSize: "clamp(2.2rem, 10vw, 9rem)" }}
        >
          MALLORCA<br />
          <span className="gradient-text">PADEL</span><br />
          CUP<span className="text-padel-orange">.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-base sm:text-lg max-w-lg mb-8 leading-relaxed"
        >
          El torneo de pádel internacional más esperado del Mediterráneo.
          7 días, 64 equipos, €25.000 en premios.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 mb-12"
        >
          <a
            href="#register"
            className="inline-flex items-center justify-center gap-2 bg-padel-orange text-white font-bold px-6 py-3.5 text-sm uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-padel-orange/30"
            style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Inscripción
          </a>
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 border border-padel-orange/40 text-white font-bold px-6 py-3.5 text-sm uppercase tracking-wider hover:border-padel-orange hover:bg-padel-orange/10 transition-all duration-300"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar Breakdown
          </a>
        </motion.div>

        {/* Stats — visible en todos los tamaños */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
        >
          {[
            { number: "64", label: "Equipos", icon: "👥" },
            { number: "€25K", label: "Premios", icon: "💰" },
            { number: "7", label: "Días", icon: "📅" },
            { number: "3", label: "Categorías", icon: "🏅" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
              className="bg-white/5 border border-white/10 p-4 text-center hover:bg-white/10 hover:border-padel-orange/30 transition-all duration-300"
            >
              <span className="text-2xl block mb-1">{stat.icon}</span>
              <span className="font-heading text-2xl sm:text-3xl font-black text-white block leading-none">
                {stat.number}
              </span>
              <span className="text-white/40 text-xs uppercase tracking-widest mt-1 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/20 text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-padel-orange/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
