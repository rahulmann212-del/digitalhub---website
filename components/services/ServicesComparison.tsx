'use client';

import { ChevronRight, Check, X } from 'lucide-react';

const rows = [
  {
    topic: 'Marketing Focus',
    us: 'Strictly optimized for ROI, ROAS, and bottom-line revenue',
    typical: 'Focused on vanity metrics like impressions and generic clicks',
    weight: true,
  },
  {
    topic: 'Search Visibility',
    us: 'Next-Gen SEO, AEO, and GEO to rank in AI tools & Google Overviews',
    typical: 'Outdated, traditional SEO strategies from 5 years ago',
    weight: false,
  },
  {
    topic: 'E-Commerce Strategy',
    us: 'Frictionless checkouts and aggressive RTO management for scaling',
    typical: 'Generic store templates with high cart abandonment rates',
    weight: false,
  },
  {
    topic: 'Content & Ads',
    us: 'Dynamic short-form video campaigns and high-intent keyword targeting',
    typical: 'Static stock images and broad, budget-wasting keywords',
    weight: true,
  },
  {
    topic: 'Web Performance',
    us: 'Sub-second load times built to boost Google Ads Quality Scores',
    typical: 'Sluggish load times that frustrate users and waste ad spend',
    weight: false,
  },
  {
    topic: 'Code Architecture',
    us: 'Clean, headless-ready component architecture (React/Next.js)',
    typical: 'Bloated page builders (Elementor/Divi) that break easily',
    weight: true,
  },
  {
    topic: 'Pricing & Scoping',
    us: 'Detailed ROI mapping with clear line items — zero hidden fees',
    typical: 'Vague estimates with scope creep and percentage-of-spend surprises',
    weight: false,
  },
  {
    topic: 'Analytics Tracking',
    us: 'Full-funnel attribution tracking tied directly to business sales',
    typical: 'Confusing analytics dashboards with no real business context',
    weight: true,
  },
];

const pillars = [
  {
    title: 'Revenue Over Traffic',
    desc: 'We track what actually matters to your business — qualified leads, actual sales, and profit margins — not just meaningless traffic spikes.',
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-100',
  },
  {
    title: 'Future-Proof Tech',
    desc: 'From generative AI search visibility to modern component-based code, we build assets that keep you ahead of the digital curve.',
    color: 'from-blue-600 to-[#FF6600]',
    bg: 'bg-orange-100',
  },
  {
    title: 'Total Transparency',
    desc: 'We would rather give you a realistic strategy upfront than win your business with optimistic numbers we cannot deliver.',
    color: 'from-[#FF6600] to-orange-400',
    bg: 'bg-orange-100',
  },
  {
    title: 'True Partnership',
    desc: 'You own everything we build: code, ad accounts, and assets. We never hold your digital infrastructure hostage.',
    color: 'from-sky-500 to-[#063A9A]',
    bg: 'bg-blue-100',
  },
];

export default function ServicesComparison() {
  return (
    <section
      className="relative py-24 bg-slate-50 border-t border-slate-200/80 overflow-hidden"
      aria-labelledby="comparison-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
            <ChevronRight className="w-4 h-4 text-[#FF6600]" />
            The Anviaan Standard
          </div>
          <h2
            id="comparison-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
          >
            Why Brands{' '}
            <span className="text-[#FF6600] block mt-1">Choose Anviaan</span>
          </h2>
          <p className="mt-5 text-lg text-slate-700 leading-relaxed font-medium">
            The difference is not just in what we deliver — it is in how we approach your growth. Here is what you can expect when you partner with us.
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-500/5 mb-16">
          <table className="w-full min-w-[640px]" role="table">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70">
                <th className="text-left p-5 pl-7 text-sm font-bold text-slate-600 uppercase tracking-wider w-[22%]">
                  What We Compare
                </th>
                <th className="text-left p-5 w-[40%]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-gradient-to-br from-[#063A9A] to-blue-600 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-[#063A9A]">Anviaan</div>
                      <div className="text-xs text-slate-500 font-semibold">Our high-performance standard</div>
                    </div>
                  </div>
                </th>
                <th className="text-left p-5 w-[38%]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-slate-500" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-700">Typical Agency</div>
                      <div className="text-xs text-slate-500 font-semibold">Common industry shortcuts</div>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.topic}
                  className={`border-b border-slate-100 transition-colors ${
                    row.weight ? 'bg-blue-50/50 hover:bg-blue-50/80' : 'bg-white hover:bg-slate-50/60'
                  }`}
                >
                  <td className="p-5 pl-7">
                    <span className="text-sm font-bold text-slate-900">{row.topic}</span>
                  </td>
                  <td className="p-5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#063A9A]" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-800 leading-relaxed font-medium">{row.us}</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-slate-500" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-slate-600 leading-relaxed font-medium">{row.typical}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Four principle cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group p-6 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-[#063A9A] transition-all duration-300"
            >
              <div
                className={`w-10 h-10 ${pillar.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                <div className={`w-5 h-5 bg-gradient-to-br ${pillar.color} rounded-lg`} />
              </div>
              <h3 className="font-bold text-[#063A9A] text-base mb-2 leading-snug group-hover:text-[#FF6600] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}