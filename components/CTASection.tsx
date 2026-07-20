'use client';

import Link from 'next/link';
import { ArrowRight, Rocket, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#063A9A] to-[#020816] rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-2xl">
          {/* Background elements */}
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FF6600]/15 rounded-full blur-3xl" />

          {/* Decorative rings */}
          <div className="absolute top-8 right-8 w-48 h-48 border border-white/5 rounded-full" />
          <div className="absolute top-12 right-12 w-36 h-36 border border-white/5 rounded-full" />
          <div className="absolute bottom-8 left-8 w-32 h-32 border border-white/5 rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left */}
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold text-blue-200 mb-6 shadow-sm">
                <Rocket className="w-4 h-4 text-[#FF6600]" />
                Ready to Scale
              </div>

              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight"
              >
                Ready to Turn Your{' '}
                <span className="text-[#FF6600] block mt-1">
                  Traffic Into Revenue?
                </span>
              </h2>

              <p className="mt-5 text-lg text-blue-100/90 leading-relaxed font-medium">
                Stop guessing with your digital strategy. Let&apos;s build a high-performance growth plan 
                that scales your revenue and outperforms your competition.
              </p>

              {/* Key benefits */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                {[
                  'ROI-Focused Strategy',
                  'High-Conversion Dev',
                  'Rapid Growth Tactics',
                  'Dedicated Growth Partner',
                ].map((benefit) => (
                  <span
                    key={benefit}
                    className="px-3.5 py-1.5 bg-white/10 border border-white/15 rounded-full text-sm text-blue-100 font-semibold shadow-sm"
                  >
                    ✓ {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Optimized High-Conversion Buttons */}
            <div className="flex flex-col gap-4 flex-shrink-0 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6600] to-orange-500 text-white font-bold text-base rounded-2xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                Get Your Growth Proposal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="tel:+918318724647"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold text-base rounded-2xl border-2 border-white/25 hover:border-white hover:bg-white/20 transition-all duration-300 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#FF6600]" />
                Talk to an Expert
              </a>

              {/* Trust micro-copy */}
              <p className="text-center text-xs text-blue-200/80 mt-1 font-medium">
                Response within 4 business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}