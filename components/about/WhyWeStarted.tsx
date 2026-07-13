'use client';

import { ChevronRight, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const problems = [
  'Generic templates that look like every other site',
  'Agencies that disappear after launch',
  'Slow websites that damage search rankings',
  'Designs built for looks, not for conversions',
  'No clear reporting or communication',
];

const solutions = [
  'Custom-designed, purpose-built digital experiences',
  'Long-term partnerships with ongoing support',
  'Performance-optimized, sub-2s load time targets',
  'Conversion-focused design grounded in user psychology',
  'Full transparency with regular updates and reporting',
];

export default function WhyWeStarted() {
  return (
    <section
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      aria-labelledby="why-started-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-35" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual contrast panel */}
          <div className="space-y-4">
            {/* Header inside left column */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-5">
                <ChevronRight className="w-4 h-4" />
                The Problem We Solved
              </div>
              <h2
                id="why-started-heading"
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight"
              >
                Why We Started{' '}
                <span className="text-gradient">DigitalHub</span>
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                We saw the same frustrations over and over. Businesses paying for
                digital work that didn&apos;t deliver — or working with agencies
                that treated them like a transaction. We started DigitalHub to be
                the alternative.
              </p>
            </div>

            {/* Problem list */}
            <div className="p-6 bg-red-50/50 border border-red-100 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-sm font-bold text-red-700">
                  The Old Reality
                </span>
              </div>
              <ul className="space-y-2.5" role="list">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution list */}
            <div className="p-6 bg-blue-50/60 border border-blue-100 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-sm font-bold text-blue-700">
                  The DigitalHub Difference
                </span>
              </div>
              <ul className="space-y-2.5" role="list">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — narrative + pull quote */}
          <div className="space-y-8">
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p className="text-lg text-slate-700 font-medium">
                The digital agency landscape was crowded with two extremes:
                cheap, generic solutions and expensive agencies out of reach for
                most businesses.
              </p>
              <p>
                We saw a clear gap — businesses that were serious about growth
                but needed a partner who matched that seriousness. Someone who
                would ask the right questions, deliver quality work, and actually
                care about the outcome.
              </p>
              <p>
                So we built DigitalHub to sit firmly in that space. Accessible
                enough for startups. Capable enough for complex businesses. And
                committed enough to treat every client as our most important one.
              </p>
            </div>

            {/* Pull quote */}
            <div className="relative p-7 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl overflow-hidden shadow-xl shadow-blue-500/20">
              <div className="absolute inset-0 bg-grid opacity-15" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
              <div className="relative z-10">
                <div className="text-4xl text-white/30 font-serif leading-none mb-2">&ldquo;</div>
                <p className="text-white font-semibold text-base leading-relaxed">
                  We didn&apos;t start DigitalHub to be the biggest agency.
                  We started it to be the most dependable one — the agency
                  you recommend to a friend without hesitation.
                </p>
              </div>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Start a conversation with us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
