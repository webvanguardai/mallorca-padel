"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

export default function Registration() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

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
              {t.registration.label}
            </span>
            <h2 className="section-title">
              {t.registration.title} <span className="gradient-text">{t.registration.titleHighlight}</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              {t.registration.subtitle}
            </p>
          </div>
        </AnimatedSection>

        {submitted ? (
          <AnimatedSection>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <span className="text-5xl block mb-4">🎾</span>
              <h3 className="font-heading text-2xl font-bold text-deep-blue mb-2">
                {t.registration.success.title}
              </h3>
              <p className="text-body-gray">
                {t.registration.success.message}
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
                    {t.registration.form.fullName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-padel-orange focus:ring-2 focus:ring-padel-orange/20 outline-none transition-all bg-white"
                    placeholder={t.registration.form.fullNamePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">
                    {t.registration.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-padel-orange focus:ring-2 focus:ring-padel-orange/20 outline-none transition-all bg-white"
                    placeholder={t.registration.form.emailPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">
                    {t.registration.form.partnerName}
                  </label>
                  <input
                    type="text"
                    name="partner"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-padel-orange focus:ring-2 focus:ring-padel-orange/20 outline-none transition-all bg-white"
                    placeholder={t.registration.form.partnerNamePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">
                    {t.registration.form.category}
                  </label>
                  <select
                    name="category"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-padel-orange focus:ring-2 focus:ring-padel-orange/20 outline-none transition-all bg-white"
                  >
                    <option value="">{t.registration.form.categoryPlaceholder}</option>
                    <option value="mens">{t.registration.form.categoryMens}</option>
                    <option value="womens">{t.registration.form.categoryWomens}</option>
                    <option value="mixed">{t.registration.form.categoryMixed}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">
                    {t.registration.form.country}
                  </label>
                  <input
                    type="text"
                    name="country"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-padel-orange focus:ring-2 focus:ring-padel-orange/20 outline-none transition-all bg-white"
                    placeholder={t.registration.form.countryPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">
                    {t.registration.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-padel-orange focus:ring-2 focus:ring-padel-orange/20 outline-none transition-all bg-white"
                    placeholder={t.registration.form.phonePlaceholder}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">
                  {t.registration.form.message}
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-padel-orange focus:ring-2 focus:ring-padel-orange/20 outline-none transition-all bg-white resize-none"
                  placeholder={t.registration.form.messagePlaceholder}
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {t.registration.form.submit}
              </button>
              <p className="text-center text-body-gray text-xs mt-4">
                {t.registration.form.legal}
              </p>
            </form>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
