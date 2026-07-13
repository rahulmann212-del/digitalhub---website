'use client';

import {
  ShieldCheck,
  Lightbulb,
  Star,
  Users2,
  MessageSquare,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'We say what we mean and do what we say. Honest communication and realistic expectations are the foundation of every engagement we take on.',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    accent: 'border-blue-200',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'We stay ahead of the curve — constantly learning, experimenting, and applying modern tools and techniques to solve real business challenges.',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
    accent: 'border-sky-200',
  },
  {
    icon: Star,
    title: 'Excellence',
    desc: 'Good enough is never good enough. We hold our work to the highest standard — every pixel, every line of code, every strategy is crafted with care.',
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-indigo-50',
    accent: 'border-indigo-200',
  },
  {
    icon: Users2,
    title: 'Collaboration',
    desc: 'We treat our clients as partners, not just customers. Your insight into your business combined with our digital expertise is what creates great outcomes.',
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
    accent: 'border-cyan-200',
  },
  {
    icon: MessageSquare,
    title: 'Transparency',
    desc: 'No black boxes. You always know where your project stands, what decisions are being made, and why. Clear, proactive communication throughout.',
    color: 'from-blue-500 to-sky-400',
    bg: 'bg-blue-50',
    accent: 'border-blue-200',
  },
  {
    icon: TrendingUp,
    title: 'Impact',
    desc: 'We measure our success by yours. Every decision — design, development, or marketing — is evaluated against one question: does this move the needle for the client?',
    color: 'from-blue-700 to-blue-500',
    bg: 'bg-blue-50',
    accent: 'border-blue-200',
  },
];

export default function CoreValues() {
  return (
    <section
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="values-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-50/60 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            What We Stand For
          </div>
          <h2
            id="values-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Our Core{' '}
            <span className="text-gradient">Values</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            These aren&apos;t words on a wall. They are the principles that
            guide every project, every decision, and every interaction we have.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <article
              key={value.title}
              className={`group relative bg-white border ${value.accent} rounded-3xl p-7 card-hover shine-border`}
            >
              {/* Number watermark */}
              <div className="absolute top-5 right-6 text-5xl font-extrabold text-slate-50 select-none">
                0{index + 1}
              </div>

              {/* Icon */}
              <div
                className={`relative z-10 w-12 h-12 ${value.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <div
                  className={`w-7 h-7 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center`}
                >
                  <value.icon className="w-4 h-4 text-white" strokeWidth={2} />
                </div>
              </div>

              <h3 className="relative z-10 text-lg font-bold text-slate-800 mb-3">
                {value.title}
              </h3>
              <p className="relative z-10 text-sm text-slate-500 leading-relaxed">
                {value.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-7 right-7 h-0.5 bg-gradient-to-r ${value.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
