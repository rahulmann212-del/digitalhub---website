'use client';

import {
  TrendingUp,
  Search,
  ShoppingCart,
  BarChart,
  Server,
  ShieldCheck,
  ChevronRight,
  Check,
} from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'ROI-Obsessed Marketing',
    desc: 'We focus on metrics that matter—lowering CAC, optimizing ROAS, and maximizing your profit margins.',
    color: 'from-blue-600 to-blue-700',
    bg: 'bg-blue-50',
  },
  {
    icon: Search,
    title: 'Search Dominance',
    desc: 'Technical SEO and content architectures built to outrank competitors and drive high-intent organic traffic.',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
  },
  {
    icon: ShoppingCart,
    title: 'Conversion Optimized',
    desc: 'E-commerce storefronts designed with user psychology to reduce cart abandonment and boost conversions.',
    color: 'from-blue-500 to-sky-400',
    bg: 'bg-blue-50',
  },
  {
    icon: BarChart,
    title: 'Data-Driven Decisions',
    desc: 'Transparent reporting and deep analytics. Every move we make is backed by hard data, not guesswork.',
    color: 'from-indigo-500 to-blue-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: Server,
    title: 'High-Volume Scale',
    desc: 'Robust development infrastructure built to handle massive traffic spikes and multi-vendor transactions seamlessly.',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
  },
  {
    icon: ShieldCheck,
    title: 'Operator Mindset',
    desc: 'We treat your business like our own, strategizing beyond digital marketing to optimize your overall unit economics.',
    color: 'from-sky-600 to-blue-600',
    bg: 'bg-sky-50',
  },
];

const keyPoints = [
  'Transparent ROI & ROAS reporting',
  'Data-backed growth strategies',
  'End-to-end funnel optimization',
  'Built by e-commerce operators',
];

export default function WhyChooseSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-slate-50 overflow-hidden"
      aria-labelledby="why-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 rounded-full text-sm font-bold text-blue-700 mb-6 shadow-sm">
                <ChevronRight className="w-4 h-4" />
                Why Rankovio
              </div>
              <h2
                id="why-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
              >
                An Operator Mindset for{' '}
                <span className="text-gradient">Real Growth</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                We aren't just a traditional agency. We are growth partners. We combine aggressive digital marketing, SEO, and high-performance development to scale your brand profitably.
              </p>
            </div>

            {/* Key points */}
            <ul className="space-y-4" role="list">
              {keyPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm">{point}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: '50+', label: 'Brands Scaled' },
                { value: '7+', label: 'Years Expertise' },
                { value: '98%', label: 'Client Retention' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-2xl border border-blue-100/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Feature grid (Perfect 6 items) */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div
                    className={`w-7 h-7 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center`}
                  >
                    <feature.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}