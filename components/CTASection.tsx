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
        {/* High-visibility clean light card container so colors pop perfectly */}
        <div className="relative overflow-hidden bg-slate-50 border border-blue-100 rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-xl">
          {/* Background elements */}
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left */}
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
                <Rocket className="w-4 h-4 text-[#FF6600]" />
                Ready to Scale
              </div>

              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
              >
                Ready to Turn Your{' '}
                <span className="text-[#FF6600] block mt-1">
                  Traffic Into Revenue?
                </span>
              </h2>

              <p className="mt-5 text-lg text-slate-700 leading-relaxed font-medium">
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
                    className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-800 font-semibold shadow-sm"
                  >
                    ✓ {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — High-Conversion Buttons */}
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
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#063A9A] font-bold text-base rounded-2xl border-2 border-slate-200 hover:border-[#063A9A] hover:bg-blue-50 transition-all duration-300 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#FF6600]" />
                Talk to an Expert
              </a>

              {/* Trust micro-copy */}
              <p className="text-center text-xs text-slate-500 mt-1 font-semibold">
                Response within 4 business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}