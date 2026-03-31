"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient noise-overlay court-lines">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-padel-orange/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-padel-orange/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-padel-orange/5 skew-x-[-12deg] translate-x-20" />

      {/* Court line decorations */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-padel-orange/40 to-transparent" />
      <div className="absolute top-1/2 right-0 w-px h-40 bg-gradient-to-b from-transparent via-padel-orange/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-padel-orange/20 text-padel-orange font-bold text-sm uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 border border-padel-orange/30">
                🏆 September 15–21, 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-6"
            >
              MALLORCA
              <br />
              <span className="gradient-text">PADEL</span>
              <br />
              CUP
              <span className="text-padel-orange">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/70 text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
            >
              The premier international padel tournament returns to the
              Mediterranean. 7 days, 64 teams, €25,000 in prizes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#register" className="btn-primary animate-pulse-glow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Register Now
              </a>
              <a href="#download" className="btn-outline">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Breakdown
              </a>
            </motion.div>
          </div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {[
              { number: "64", label: "Teams", icon: "👥" },
              { number: "€25K", label: "Prize Pool", icon: "💰" },
              { number: "7", label: "Days", icon: "📅" },
              { number: "3", label: "Categories", icon: "🏅" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-padel-orange/30 transition-all duration-500 group"
              >
                <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </span>
                <span className="font-heading text-4xl font-black text-white block">
                  {stat.number}
                </span>
                <span className="text-white/50 text-sm uppercase tracking-widest mt-1 block">
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
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-padel-orange/50 to-transparent animate-bounce-subtle" />
        </motion.div>
      </div>
    </section>
  );
}
