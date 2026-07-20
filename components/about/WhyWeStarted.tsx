'use client';

import { ChevronRight, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const problems = [
  'Generic strategies that don\'t reflect unique business goals',
  'Websites that look good but fail to convert visitors',
  'Marketing campaigns without measurable business impact',
  'Limited communication and unclear project visibility',
  'Multiple vendors managing disconnected digital efforts',
];

const solutions = [
  'Tailored strategies aligned with your business objectives',
  'High-performing websites built for user experience and conversions',
  'Data-driven marketing focused on measurable growth',
  'Transparent communication with clear performance insights',
  'End-to-end digital solutions managed by one experienced team',
];

export default function WhyWeStarted() {
  return (
    <section
      className="relative py-24 bg-slate-50/50 border-t border-slate-200/80 overflow-hidden"
      aria-labelledby="why-started-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — visual contrast panel */}
          <div className="space-y-6">
            {/* Header inside left column */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
                <ChevronRight className="w-4 h-4 text-[#FF6600]" />
                Why We Exist
              </div>
              <h2
                id="why-started-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
              >
                Built to Be the Digital Partner{' '}
                <span className="text-[#FF6600] block mt-1">Businesses Can Rely On</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                Many businesses invest in digital marketing without seeing meaningful progress. Campaigns lack direction, websites underperform, and reporting often fails to connect marketing efforts with real business outcomes.
              </p>
              <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed"> 
                We started Anviaan with a different approach. Our goal is to combine strategy, creativity, technology, and performance marketing into solutions that help businesses grow with confidence.
              </p>
            </div>

            {/* Problem list - Styled with subtle brand Orange */}
            <div className="p-6 sm:p-7 bg-orange-50/40 border border-orange-200/60 rounded-3xl shadow-sm">
              <div className="flex items-center gap-2.5 mb-5">
                <AlertCircle className="w-5 h-5 text-[#FF6600] flex-shrink-0" strokeWidth={2.5} />
                <span className="text-base font-extrabold text-[#FF6600]">
                  The Challenges Businesses Face
                </span>
              </div>
              <ul className="space-y-3" role="list">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 bg-[#FF6600]/80 rounded-full mt-2.5 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution list - Styled with brand Deep Blue */}
            <div className="p-6 sm:p-7 bg-blue-50/60 border border-blue-200/70 rounded-3xl shadow-sm">
              <div className="flex items-center gap-2.5 mb-5">
                <CheckCircle2 className="w-5 h-5 text-[#063A9A] flex-shrink-0" strokeWidth={2.5} />
                <span className="text-base font-extrabold text-[#063A9A]">
                  The Anviaan Approach
                </span>
              </div>
              <ul className="space-y-3" role="list">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#063A9A] mt-1 flex-shrink-0" strokeWidth={3} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — narrative + pull quote */}
          <div className="space-y-10">
            <div className="space-y-5 text-slate-600 font-medium leading-relaxed">
              <p className="text-lg text-[#063A9A] font-bold">
                Digital success isn't about using more tools or following trends. It's about understanding your business, identifying the right opportunities, and executing strategies that deliver measurable results.
              </p>
              <p className="text-base sm:text-lg">
                At Anviaan, we become an extension of your team. Whether you're building your online presence, generating qualified leads, or strengthening your brand, we create digital solutions designed around your goals—not a predefined template.
              </p>
              <p className="text-base sm:text-lg">
                Every project is guided by collaboration, transparency, and continuous optimization because sustainable growth comes from making smarter decisions over time.
              </p>
            </div>

            {/* Pull quote - Premium Deep Blue Gradient */}
            <div className="relative p-8 sm:p-10 bg-gradient-to-br from-[#063A9A] via-blue-700 to-blue-900 rounded-3xl overflow-hidden shadow-xl shadow-blue-900/10">
              <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FF6600]/10 rounded-full pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="text-5xl text-[#FF6600]/40 font-serif leading-none mb-3">&ldquo;</div>
                <p className="text-white font-semibold text-lg sm:text-xl leading-relaxed mb-6">
                  Anviaan was built on a simple belief. Every business deserves a digital partner that listens, thinks strategically, and delivers work that creates measurable impact.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#FF6600] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    VM
                  </div>
                  <div className="text-blue-100 font-bold text-sm">
                    — Vijay Mishra, <span className="text-blue-300 font-medium">Founder</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-2">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 text-base font-extrabold text-[#063A9A] hover:text-[#FF6600] transition-colors"
              >
                Start Your Growth Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}