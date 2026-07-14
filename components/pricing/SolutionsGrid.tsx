import { solutions } from './pricing-data';
import SolutionCard from './SolutionCard';
import { ChevronRight } from 'lucide-react';

export default function SolutionsGrid() {
  return (
    <section
      className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50"
      aria-labelledby="solutions-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            Growth Solutions
          </div>
          <h2
            id="solutions-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Four Paths to{' '}
            <span className="text-gradient">Digital Growth</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Each solution is tailored to your business after a thorough discovery
            process. No generic packages — only strategies built around your
            specific goals, market, and audience.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>

        {/* Note below grid */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-sm text-slate-400 leading-relaxed">
            Not sure which solution fits your business? Book a free strategy call
            and we will recommend the right approach — even if it means a smaller
            scope than you expected.
          </p>
        </div>
      </div>
    </section>
  );
}
