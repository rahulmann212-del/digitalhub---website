import Link from 'next/link';
import { Check, ArrowRight, Calendar, FileText, ChevronRight, Sparkles } from 'lucide-react';
import type { Solution } from './pricing-data';

interface SolutionCardProps {
  solution: Solution;
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  const Icon = solution.icon;

  return (
    <article
      className={`group relative flex flex-col bg-white border rounded-3xl overflow-hidden transition-all duration-500 card-hover ${
        solution.featured
          ? 'border-blue-300 shadow-xl shadow-blue-500/10 ring-1 ring-blue-200/50 lg:scale-[1.02]'
          : 'border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/8'
      }`}
    >
      {/* Featured ribbon */}
      {solution.featured && (
        <div className="absolute top-0 right-0 z-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl shadow-md flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            Most Comprehensive
          </div>
        </div>
      )}

      {/* Header */}
      <div className={`relative bg-gradient-to-br ${solution.color} p-7 pb-8 overflow-hidden`}>
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/8 rounded-full" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/8 rounded-full" />

        <div className="relative z-10">
          <div className="w-12 h-12 bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
          </div>
          <h3 className="text-xl font-extrabold text-white leading-tight">
            {solution.name}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-7 gap-6">
        {/* Overview */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className={`w-5 h-5 ${solution.bg} rounded-md flex items-center justify-center flex-shrink-0`}>
              <ChevronRight className="w-3 h-3 text-slate-600" strokeWidth={2.5} />
            </span>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Overview</h4>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{solution.overview}</p>
        </div>

        {/* Ideal for */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className={`w-5 h-5 ${solution.bg} rounded-md flex items-center justify-center flex-shrink-0`}>
              <span className="text-slate-600 text-[8px] font-black">IF</span>
            </span>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Ideal Business Type</h4>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{solution.idealFor}</p>
        </div>

        {/* Services included */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className={`w-5 h-5 bg-gradient-to-br ${solution.color} rounded-md flex items-center justify-center flex-shrink-0`}>
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </span>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Services Included</h4>
          </div>
          <ul className="space-y-2" role="list">
            {solution.services.map((service) => (
              <li key={service} className="flex items-start gap-2.5">
                <div className={`mt-1 w-4 h-4 ${solution.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <Check className="w-2.5 h-2.2 text-blue-600" strokeWidth={3} />
                </div>
                <span className="text-xs text-slate-600 leading-relaxed">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expected outcomes */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className={`w-5 h-5 bg-gradient-to-br ${solution.color} rounded-md flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-[8px] font-black">↑</span>
            </span>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Expected Outcomes</h4>
          </div>
          <ul className="space-y-2" role="list">
            {solution.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5">
                <div className={`mt-1 w-4 h-4 bg-gradient-to-br ${solution.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <ArrowRight className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-xs text-slate-600 leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="pt-5 border-t border-slate-100 mt-auto space-y-3">
          <Link
            href="/#contact"
            className={`group/btn flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-br ${solution.color} text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
          >
            <FileText className="w-4 h-4" />
            Request Custom Proposal
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#contact"
            className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-xl hover:border-blue-200 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            Book Free Strategy Call
          </Link>
        </div>
      </div>
    </article>
  );
}
