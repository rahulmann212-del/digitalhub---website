'use client';

import {
  Target,
  ShoppingBag,
  Video,
  BarChart,
  Code,
  TrendingUp,
  Smartphone,
  ChevronRight,
  Check,
} from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Performance Marketing',
    desc: 'Laser-targeted ad campaigns designed to acquire high-value customers and maximize your ROI.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Video,
    title: 'Engaging Video Campaigns',
    desc: 'High-converting short-form video assets and promotional scripts to build strong brand identity.',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
  },
  {
    icon: ShoppingBag,
    title: 'D2C & Marketplaces',
    desc: 'Robust multi-vendor platforms and e-commerce websites built to scale and handle massive traffic.',
    color: 'from-blue-500 to-sky-400',
    bg: 'bg-blue-50',
  },
  {
    icon: BarChart,
    title: 'Market Analytics',
    desc: 'Deep data insights and performance tracking to continuously optimize your growth strategies.',
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: TrendingUp,
    title: 'Advanced SEO',
    desc: 'Technical SEO architecture and content planning to dominate search rankings and drive organic leads.',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
  },
  {
    icon: Code,
    title: 'Scalable Architecture',
    desc: 'Clean, maintainable code ensuring your digital platforms run flawlessly as your business expands.',
    color: 'from-blue-600 to-blue-700',
    bg: 'bg-blue-50',
  },
  {
    icon: Smartphone,
    title: 'Conversion-First UI',
    desc: 'Mobile-responsive interfaces engineered with buyer psychology in mind to maximize sales.',
    color: 'from-sky-600 to-blue-600',
    bg: 'bg-sky-50',
  },
];

const keyPoints = [
  'Data-driven market analytics & reporting',
  'Scalable multi-vendor & D2C solutions',
  'High-converting marketing campaigns',
  'End-to-end business growth focus',
];

export default function WhyChooseSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="why-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-blue-50 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
                <ChevronRight className="w-4 h-4" />
                Why Partner With Us
              </div>
              <h2
                id="why-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
              >
                The Agency That{' '}
                <span className="text-gradient">Drives Revenue</span>
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                We bridge the gap between powerful technology and strategic marketing. By combining custom e-commerce development with high-performance ad campaigns, we turn your visitors into loyal customers.
              </p>
            </div>

            {/* Key points */}
            <ul className="space-y-3" role="list">
              {keyPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-blue-600" strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: '50+', label: 'Campaigns Launched' },
                { value: '₹10Cr+', label: 'Client Revenue' },
                { value: '100%', label: 'ROI Focused' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl border border-blue-100/50"
                >
                  <div className="text-2xl font-extrabold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Feature grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-5 bg-white border border-slate-100 rounded-2xl card-hover"
              >
                <div
                  className={`w-10 h-10 ${feature.bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <div
                    className={`w-6 h-6 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center`}
                  >
                    <feature.icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
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