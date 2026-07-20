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
    title: 'Results-Focused Approach',
    desc: 'Every strategy is designed with clear business objectives, helping you generate measurable growth instead of chasing vanity metrics.',
    color: 'from-[#063A9A] to-blue-500',
    bg: 'bg-blue-100',
  },
  {
    icon: Search,
    title: 'Greater Online Visibility',
    desc: 'Build a stronger digital presence that helps your business reach the right audience, increase credibility, and stay ahead of the competition.',
    color: 'from-blue-500 to-[#FF6600]',
    bg: 'bg-orange-100',
  },
  {
    icon: ShoppingCart,
    title: 'Customer-Centric Experiences',
    desc: 'Create seamless digital experiences that engage visitors, build trust, and turn more prospects into loyal customers.',
    color: 'from-[#063A9A] to-[#FF6600]',
    bg: 'bg-blue-100',
  },
  {
    icon: BarChart,
    title: 'Data-Driven Decisions',
    desc: 'Every recommendation is guided by analytics and real-world insights, ensuring smarter decisions and continuous improvement.',
    color: 'from-blue-600 to-blue-700',
    bg: 'bg-blue-100',
  },
  {
    icon: Server,
    title: 'Scalable Digital Solutions',
    desc: 'From business websites to e-commerce platforms, we build flexible digital solutions designed to support your long-term growth.',
    color: 'from-[#063A9A] to-blue-500',
    bg: 'bg-blue-100',
  },
  {
    icon: ShieldCheck,
    title: 'Dedicated Partnership',
    desc: 'We work as an extension of your team, providing proactive guidance, dependable support, and strategies that evolve with your business.',
    color: 'from-[#FF6600] to-orange-400',
    bg: 'bg-orange-100',
  },
];

const keyPoints = [
  'Tailored strategies built around your business goals',
  'Transparent communication with measurable outcomes',
  'Creative ideas backed by data and market insights',
  'End-to-end support from planning to execution',
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
                <ChevronRight className="w-4 h-4 text-[#FF6600]" />
                Why Anviaan
              </div>
              <h2
                id="why-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
              >
                Your Growth Partner,{' '}
                <span className="text-[#FF6600] block mt-1">Not Just Another Agency</span>
              </h2>
              <p className="mt-5 text-lg text-slate-700 leading-relaxed font-medium">
                We combine strategy, creativity, technology, and data to help businesses build stronger brands, attract the right customers, and achieve measurable, long-term growth.
              </p>
            </div>

            {/* Key points */}
            <ul className="space-y-4" role="list">
              {keyPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                  </div>
                  <span className="text-slate-800 font-semibold text-sm">{point}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: '100+', label: 'Projects Delivered' },
                { value: '8+', label: 'Years of Experience' },
                { value: '95%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-[#063A9A]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600 font-bold mt-1 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Feature grid (Perfect 6 items) with H3 headings */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#063A9A] transition-all duration-300"
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
                <h3 className="font-bold text-[#063A9A] text-base mb-2 group-hover:text-[#FF6600] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
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