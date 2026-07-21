'use client';

import Link from 'next/link';
import { AlertTriangle, CheckCircle2, TrendingUp, ArrowRight, ChevronRight } from 'lucide-react';
import type { Industry } from './industries-data';

interface IndustryCardProps {
  industry: Industry;
  index: number;
}

export default function IndustryCard({ industry, index }: IndustryCardProps) {
  const Icon = industry.icon;

  return (
    <article
      id={industry.id}
      className="group flex flex-col bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 scroll-mt-32"
    >
      {/* ── Gradient header ── */}
      <div
        className={`relative bg-gradient-to-br ${industry.color} p-7 sm:p-8 overflow-hidden`}
      >
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-white/10 rounded-full pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black/5 rounded-full pointer-events-none" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-white backdrop-blur-sm shadow-sm">
                <ChevronRight className="w-3.5 h-3.5" />
                Industry Focus
              </span>
            </div>
            
            {/* FIXED: Explicitly set text-white for visibility on dark gradient */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {industry.name}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/90 font-medium leading-relaxed max-w-lg">
              {industry.tagline}
            </p>
          </div>

          {/* Index number watermark */}
          <div className="text-6xl sm:text-7xl font-black text-white/15 select-none leading-none flex-shrink-0 mt-1">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-7 sm:p-8 gap-8">
        <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed border-b border-slate-100 pb-6">
          {industry.description}
        </p>

        <div className="grid md:grid-cols-3 gap-6 flex-1">
          {/* Challenges */}
          <div className="flex flex-col gap-4">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${industry.challengeAccent} border rounded-xl w-fit shadow-sm`}>
              <AlertTriangle className="w-4 h-4 flex-shrink-0 text-[#FF6600]" strokeWidth={2.5} />
              <span className="text-xs font-extrabold uppercase tracking-wider">Challenges</span>
            </div>
            <ul className="space-y-3 flex-1" role="list">
              {industry.challenges.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6600] flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-4">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${industry.solutionAccent} border rounded-xl w-fit shadow-sm`}>
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[#063A9A]" strokeWidth={2.5} />
              <span className="text-xs font-extrabold uppercase tracking-wider">Solutions</span>
            </div>
            <ul className="space-y-3 flex-1" role="list">
              {industry.solutions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 w-4 h-4 text-[#063A9A] flex-shrink-0" strokeWidth={3} />
                  <span className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="flex flex-col gap-4">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${industry.benefitAccent} border rounded-xl w-fit shadow-sm`}>
              <TrendingUp className="w-4 h-4 flex-shrink-0 text-emerald-600" strokeWidth={2.5} />
              <span className="text-xs font-extrabold uppercase tracking-wider">Benefits</span>
            </div>
            <ul className="space-y-3 flex-1" role="list">
              {industry.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Card footer CTA ── */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap mt-auto">
          <p className="text-sm font-extrabold text-slate-400">
            Ready to grow your {industry.name.toLowerCase()} business online?
          </p>
          <Link
            href="/contact"
            className={`group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${industry.color} text-white text-sm font-extrabold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0`}
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className={`h-1.5 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </article>
  );
}