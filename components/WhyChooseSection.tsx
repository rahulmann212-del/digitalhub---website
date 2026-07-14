'use client';

import {
  Code,
  Smartphone,
  Zap,
  Layers,
  TrendingUp,
  Server,
  HeadphonesIcon,
  ChevronRight,
  Check,
} from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    desc: 'Well-structured, maintainable code that follows best practices and scales with your business.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    desc: 'Flawless experiences across all devices — smartphones, tablets, and desktops.',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    desc: 'Efficient workflows and agile processes that get your project live without compromise.',
    color: 'from-blue-500 to-sky-400',
    bg: 'bg-blue-50',
  },
  {
    icon: Layers,
    title: 'Premium UI/UX',
    desc: 'Beautiful interfaces crafted with user psychology in mind to maximize engagement and conversions.',
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: TrendingUp,
    title: 'Technical SEO',
    desc: 'Built-in SEO architecture with schema markup, Core Web Vitals optimization, and proper HTML semantics.',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
  },
  {
    icon: Server,
    title: 'Scalable Solutions',
    desc: 'Infrastructure and architecture designed to handle growth — from launch to enterprise scale.',
    color: 'from-blue-600 to-blue-700',
    bg: 'bg-blue-50',
  },
  {
    icon: HeadphonesIcon,
    title: 'Professional Support',
    desc: 'Dedicated support team available to assist with updates, questions, and enhancements post-launch.',
    color: 'from-sky-600 to-blue-600',
    bg: 'bg-sky-50',
  },
];

const keyPoints = [
  'Transparent communication & reporting',
  'On-time delivery guaranteed',
  'Post-launch support included',
  '100% satisfaction focused',
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
                Why DigitalHub
              </div>
              <h2
                id="why-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
              >
                The Agency That{' '}
                <span className="text-gradient">Delivers More</span>
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                We combine strategic thinking, beautiful design, and technical
                excellence to create digital experiences that stand out and
                convert visitors into loyal customers.
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
                { value: '50+', label: 'Projects Delivered' },
                { value: '5+', label: 'Years Experience' },
                { value: '100%', label: 'Client Focused' },
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
