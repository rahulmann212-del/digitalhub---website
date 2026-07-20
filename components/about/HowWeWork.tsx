'use client';

import {
  Search,
  Paintbrush,
  Code2,
  BarChart2,
  ChevronRight,
  Check,
} from 'lucide-react';

const pillars = [
  {
    number: '01',
    icon: Search,
    title: 'Discover & Strategize',
    headline: 'Every great result begins with the right strategy.',
    desc: 'We take time to understand your business, industry, audience, competitors, and objectives before recommending any solution. This helps us create strategies built around your goals instead of assumptions.',
    points: [
      'Business discovery and consultation',
      'Market and competitor research',
      'Audience and customer insights',
      'Goal setting and success planning',
    ],
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50',
    lightColor: 'bg-[#063A9A]',
  },
  {
    number: '02',
    icon: Paintbrush,
    title: 'Create & Build',
    headline: 'Ideas become experiences that inspire action.',
    desc: 'Whether we\'re designing your website, building your brand, or creating marketing assets, every element is crafted to deliver a seamless user experience and support your business objectives.',
    points: [
      'Website design and development',
      'Branding and creative design',
      'Content creation',
      'User experience optimization',
    ],
    color: 'from-blue-600 to-[#FF6600]',
    bg: 'bg-orange-50/50',
    lightColor: 'bg-[#FF6600]',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Launch & Optimize',
    headline: 'Execution backed by data and continuous improvement.',
    desc: 'From SEO and paid advertising to social media and analytics, we launch campaigns strategically, monitor performance, and make data-driven improvements to maximize results.',
    points: [
      'Search engine optimization',
      'Performance marketing',
      'Social media campaigns',
      'Analytics and performance tracking',
    ],
    color: 'from-[#FF6600] to-orange-500',
    bg: 'bg-orange-50',
    lightColor: 'bg-[#FF6600]',
  },
  {
    number: '04',
    icon: BarChart2,
    title: 'Grow & Scale',
    headline: 'Building momentum through long-term partnership.',
    desc: 'Growth doesn\'t stop after launch. We continuously refine strategies, identify new opportunities, and help your business adapt to changing market trends for sustainable success.',
    points: [
      'Conversion optimization',
      'Performance reporting',
      'Strategy refinement',
      'Ongoing maintenance and growth support',
    ],
    color: 'from-[#063A9A] to-blue-800',
    bg: 'bg-blue-50',
    lightColor: 'bg-[#063A9A]',
  },
];

export default function HowWeWork() {
  return (
    <section
      className="relative py-24 bg-slate-50/50 border-t border-slate-200/80 overflow-hidden"
      aria-labelledby="how-we-work-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-10 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
            <ChevronRight className="w-4 h-4 text-[#FF6600]" />
            Our Methodology
          </div>
          <h2
            id="how-we-work-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
          >
            How We Turn{' '}
            <span className="text-[#FF6600] block mt-1">Strategy Into Results</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Every successful project starts with understanding your business and ends with measurable outcomes. Our proven process keeps every strategy aligned with your goals, your audience, and your long-term growth.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group relative bg-white border border-slate-200/80 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Number watermark */}
              <div
                className="absolute top-3 right-4 text-7xl font-black text-slate-100 group-hover:text-blue-50/80 transition-colors select-none leading-none"
              >
                {pillar.number}
              </div>

              {/* Top row */}
              <div className="flex items-start gap-4 mb-5 relative z-10">
                <div
                  className={`w-12 h-12 ${pillar.bg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                >
                  <div
                    className={`w-7 h-7 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center shadow-md`}
                  >
                    <pillar.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#063A9A] uppercase tracking-wider mb-1">
                    Pillar {pillar.number}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#063A9A]">{pillar.title}</h3>
                </div>
              </div>

              <p className="text-sm font-bold text-[#FF6600] mb-2 relative z-10">{pillar.headline}</p>
              <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6 relative z-10">{pillar.desc}</p>

              {/* Points */}
              <ul className="space-y-2.5 relative z-10" role="list">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm text-slate-700 font-medium"
                  >
                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#063A9A]" strokeWidth={3} />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}