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
    title: 'Strategic Thinking',
    desc: 'Every recommendation starts with understanding your business goals. We focus on strategies that solve real challenges and create measurable opportunities for growth.',
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50',
    accent: 'border-blue-100 hover:border-[#063A9A]/30',
  },
  {
    icon: Lightbulb,
    title: 'Results That Matter',
    desc: 'Success isn\'t measured by clicks or impressions alone. We prioritize meaningful outcomes that help your business generate leads, strengthen its brand, and achieve sustainable growth.',
    color: 'from-blue-600 to-[#FF6600]',
    bg: 'bg-orange-50/50',
    accent: 'border-orange-100 hover:border-[#FF6600]/30',
  },
  {
    icon: Star,
    title: 'Quality Without Compromise',
    desc: 'From website development to digital marketing campaigns, we pay attention to every detail to deliver work that performs, builds trust, and reflects your brand.',
    color: 'from-[#FF6600] to-orange-500',
    bg: 'bg-orange-50',
    accent: 'border-orange-100 hover:border-orange-300',
  },
  {
    icon: Users2,
    title: 'Collaborative Partnership',
    desc: 'The best results come from working together. We combine your industry expertise with our digital experience to create solutions tailored to your business.',
    color: 'from-[#063A9A] to-[#FF6600]',
    bg: 'bg-blue-50',
    accent: 'border-blue-100 hover:border-[#063A9A]/30',
  },
  {
    icon: MessageSquare,
    title: 'Honest Communication',
    desc: 'We believe transparency builds lasting relationships. You\'ll always know what we\'re doing, why we\'re doing it, and how your project is progressing.',
    color: 'from-blue-600 to-blue-800',
    bg: 'bg-blue-50',
    accent: 'border-blue-100 hover:border-blue-300',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    desc: 'Digital marketing never stands still, and neither do we. We continuously learn, test, and refine our strategies to help your business stay competitive in a changing digital landscape.',
    color: 'from-[#FF6600] to-[#063A9A]',
    bg: 'bg-orange-50/50',
    accent: 'border-orange-100 hover:border-[#FF6600]/30',
  },
];

export default function CoreValues() {
  return (
    <section
      className="relative py-24 bg-slate-50/50 overflow-hidden border-t border-slate-200/80"
      aria-labelledby="values-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
            <ChevronRight className="w-4 h-4 text-[#FF6600]" />
            What We Stand For
          </div>
          <h2
            id="values-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
          >
            The Values Behind Every{' '}
            <span className="text-[#FF6600] block mt-1">Partnership</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Our values shape how we think, collaborate, and deliver results. They guide every decision we make and every partnership we build.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <article
              key={value.title}
              className={`group relative bg-white border ${value.accent} rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-5 text-6xl font-black text-slate-100 group-hover:text-blue-50/80 transition-colors select-none">
                0{index + 1}
              </div>

              {/* Icon */}
              <div
                className={`relative z-10 w-12 h-12 ${value.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                <div
                  className={`w-7 h-7 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-md`}
                >
                  <value.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <h3 className="relative z-10 text-lg font-extrabold text-[#063A9A] mb-2.5">
                {value.title}
              </h3>
              <p className="relative z-10 text-sm text-slate-600 font-medium leading-relaxed">
                {value.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}