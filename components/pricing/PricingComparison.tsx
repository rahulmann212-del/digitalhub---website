import Link from 'next/link';
import { Check, X, Minus, ArrowRight, ChevronRight } from 'lucide-react';
import { comparisonServices, comparisonColumns } from './pricing-data';

function Cell({ value }: { value: boolean }) {
  if (value) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
          <Check className="w-3.5 h-3.5 text-blue-600" strokeWidth={3} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <div className="w-6 h-6 bg-slate-50 rounded-full flex items-center justify-center">
        <Minus className="w-3 h-3 text-slate-300" strokeWidth={2.5} />
      </div>
    </div>
  );
}

export default function PricingComparison() {
  return (
    <section
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="comparison-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-50/40 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            Service Comparison
          </div>
          <h2
            id="comparison-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Compare What&apos;s{' '}
            <span className="text-gradient">Included</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            A clear breakdown of which services are included in each growth
            solution. No hidden inclusions, no surprises.
          </p>
        </div>

        {/* Comparison table — desktop */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-100 shadow-lg shadow-blue-500/5">
          <table className="w-full" role="table">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="text-left p-5 pl-7 text-sm font-bold text-slate-500 uppercase tracking-wider w-[36%]">
                  Service
                </th>
                {comparisonColumns.map((col) => (
                  <th key={col.id} className="p-5 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-2.5 h-2.5 ${col.dot} rounded-full`} />
                      <span className={`text-sm font-extrabold ${col.color}`}>{col.label}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonServices.map((row, idx) => (
                <tr
                  key={row.name}
                  className={`border-b border-slate-50 transition-colors hover:bg-blue-50/30 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'
                  }`}
                >
                  <td className="p-5 pl-7">
                    <span className="text-sm font-semibold text-slate-700">{row.name}</span>
                  </td>
                  <td className="p-5"><Cell value={row.seo} /></td>
                  <td className="p-5"><Cell value={row.local} /></td>
                  <td className="p-5"><Cell value={row.performance} /></td>
                  <td className="p-5"><Cell value={row.complete} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Comparison cards — mobile */}
        <div className="md:hidden space-y-5">
          {comparisonColumns.map((col) => {
            const servicesIncluded = comparisonServices.filter((s) => s[col.id as keyof typeof s] === true);
            const servicesExcluded = comparisonServices.filter((s) => s[col.id as keyof typeof s] === false);
            return (
              <div key={col.id} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-slate-50">
                  <div className={`w-3 h-3 ${col.dot} rounded-full`} />
                  <h3 className={`font-extrabold text-base ${col.color}`}>{col.label}</h3>
                </div>
                <ul className="space-y-2.5" role="list">
                  {servicesIncluded.map((s) => (
                    <li key={s.name} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-700">{s.name}</span>
                    </li>
                  ))}
                  {servicesExcluded.map((s) => (
                    <li key={s.name} className="flex items-center gap-2.5 opacity-50">
                      <div className="w-5 h-5 bg-slate-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Minus className="w-2.5 h-2.5 text-slate-300" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-slate-400">{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA below table */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 mb-5">
            Want a proposal tailored to the services you actually need?
          </p>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Request Custom Proposal
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
