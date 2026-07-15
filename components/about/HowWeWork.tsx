'use client';

import {
  Search,
  Paintbrush,
  Code2,
  BarChart2,
  ChevronRight,
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
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    lightColor: 'bg-blue-600',
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
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
    lightColor: 'bg-sky-600',
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
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-indigo-50',
    lightColor: 'bg-indigo-600',
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
      'Ongoing growth support',
    ],
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
    lightColor: 'bg-cyan-600',
  },
];

export default function HowWeWork() {
  return (
    <section
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="how-we-work-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            Our Methodology
          </div>
          <h2
            id="how-we-work-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            How We Turn{' '}
            <span className="text-gradient">Strategy Into Results</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Every successful project starts with understanding your business and ends with measurable outcomes. Our proven process keeps every strategy aligned with your goals, your audience, and your long-term growth.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group relative bg-white border border-slate-100 rounded-3xl p-7 card-hover overflow-hidden"
            >
              {/* Number watermark */}
              <div
                className={`absolute -top-3 -right-3 text-8xl font-extrabold text-gradient opacity-[0.06] select-none leading-none`}
              >
                {pillar.number}
              </div>

              {/* Top row */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className={`w-12 h-12 ${pillar.bg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div
                    className={`w-7 h-7 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center`}
                  >
                    <pillar.icon className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Pillar {pillar.number}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{pillar.title}</h3>
                </div>
              </div>

              <p className="text-sm font-semibold text-blue-700 mb-2">{pillar.headline}</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">{pillar.desc}</p>

              {/* Points */}
              <ul className="space-y-2" role="list">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-sm text-slate-600"
                  >
                    <span
                      className={`w-1.5 h-1.5 ${pillar.lightColor} rounded-full flex-shrink-0`}
                    />
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
