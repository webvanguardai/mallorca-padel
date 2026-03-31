"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Registration() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xpznqjpw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <section id="register" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-padel-orange/5 rounded-full translate-x-1/2" />
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-deep-blue/5 rounded-full -translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-padel-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">
              Join Us
            </span>
            <h2 className="section-title">
              Register for <span className="gradient-text">MPC 2026</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Secure your spot in the Mallorca Padel Cup. Early bird registration
              open until June 30, 2026.
            </p>
          </div>
        </AnimatedSection>

        {submitted ? (
          <AnimatedSection>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <span className="text-5xl block mb-4">🎾</span>
              <h3 className="font-heading text-2xl font-bold text-deep-blue mb-2">
                Registration Received!
              </h3>
              <p className="text-body-gray">
                Thank you! We&apos;ll be in touch with confirmation details soon.
              </p>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="bg-light-gray rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-padel-orange focus:ring-2 focus:ring-padel-orange/20 outline-none transition-all bg-white"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-padel-orange focus:ring-2 focus:ring-padel-orange/20 outline-none transition-all bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">
                    Partner Name
                  </label>
                  <input
                    type="text"
                    name="partner"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-padel-orange focus:ring-2 focus:ring-padel-orange/20 outline-none transition-all bg-white"
                    placeholder="Your partner's name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-padel-orange focus:ring-2 focus:ring-padel-orange/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select category</option>
                    <option value="mens">Men&apos;s Doubles</option>
                    <option value="womens">Women&apos;s Doubles</option>
                    <option value="mixed">Mixed Doubles</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-padel-orange focus:ring-2 focus:ring-padel-orange/20 outline-none transition-all bg-white"
                    placeholder="Your country"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-padel-orange focus:ring-2 focus:ring-padel-orange/20 outline-none transition-all bg-white"
                    placeholder="+34 XXX XXX XXX"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-padel-orange focus:ring-2 focus:ring-padel-orange/20 outline-none transition-all bg-white resize-none"
                  placeholder="Anything else we should know?"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Submit Registration
              </button>
              <p className="text-center text-body-gray text-xs mt-4">
                By registering, you agree to the tournament rules and regulations.
              </p>
            </form>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
