import Link from 'next/link';
import { AlertTriangle, CheckCircle2, TrendingUp, ArrowRight, ChevronRight } from 'lucide-react';
import type { Industry } from './industries-data';

interface IndustryCardProps {
  industry: Industry;
  index: number;
}

export default function IndustryCard({ industry, index }: IndustryCardProps) {
  const Icon = industry.icon;
  const isEven = index % 2 === 0;

  return (
    <article
      id={industry.id}
      className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/8 transition-all duration-500 scroll-mt-32"
    >
      {/* ── Gradient header ───────────────────────────────────────────── */}
      <div
        className={`relative bg-gradient-to-br ${industry.color} p-7 overflow-hidden`}
      >
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-white/8 rounded-full" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/8 rounded-full" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 border border-white/30 rounded-full text-xs font-bold text-white">
                <ChevronRight className="w-3 h-3" />
                Industry
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-white leading-tight">
              {industry.name}
            </h2>
            <p className="mt-1.5 text-sm text-white/75 leading-relaxed max-w-lg">
              {industry.tagline}
            </p>
          </div>

          {/* Index number watermark */}
          <div className="text-6xl font-extrabold text-white/10 select-none leading-none flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* ── Card body ─────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-7 gap-6">
        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed border-b border-slate-50 pb-6">
          {industry.description}
        </p>

        {/* Three columns: Challenges | Solutions | Benefits */}
        <div className="grid md:grid-cols-3 gap-5 flex-1">

          {/* Challenges */}
          <div className="flex flex-col gap-3">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${industry.challengeAccent} border rounded-xl w-fit`}>
              <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2.5} />
              <span className="text-xs font-bold uppercase tracking-wider">Challenges</span>
            </div>
            <ul className="space-y-2.5 flex-1" role="list">
              {industry.challenges.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                  <span className="text-xs text-slate-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-3">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${industry.solutionAccent} border rounded-xl w-fit`}>
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2.5} />
              <span className="text-xs font-bold uppercase tracking-wider">Solutions</span>
            </div>
            <ul className="space-y-2.5 flex-1" role="list">
              {industry.solutions.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 w-3.5 h-3.5 text-blue-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-xs text-slate-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="flex flex-col gap-3">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${industry.benefitAccent} border rounded-xl w-fit`}>
              <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2.5} />
              <span className="text-xs font-bold uppercase tracking-wider">Benefits</span>
            </div>
            <ul className="space-y-2.5 flex-1" role="list">
              {industry.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-xs text-slate-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Card footer CTA ─────────────────────────────────────────── */}
        <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap mt-auto">
          <p className="text-xs text-slate-400">
            Ready to grow your {industry.name.toLowerCase()} business online?
          </p>
          <Link
            href="/#contact"
            className={`group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br ${industry.color} text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0`}
            aria-label={`Start a project for the ${industry.name} industry`}
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Bottom accent bar on hover */}
      <div
        className={`h-1 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
    </article>
  );
}
