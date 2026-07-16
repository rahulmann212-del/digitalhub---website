'use client';

import { MessageSquare, Target, Eye, Zap, Handshake, ChevronRight, ArrowRight } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'Bespoke Growth Audit',
    description:
      'A dedicated 30-minute diagnostic strategy session evaluating your current funnel architecture, search visibility, and scaling bottlenecks—zero fluff.',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
  },
  {
    icon: MessageSquare,
    title: 'Tailored Scaling Frameworks',
    description:
      'No rigid templates or pre-packaged bundles. Every strategy we build is engineered specifically around your unit economics, industry benchmarks, and bottom-line goals.',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
  },
  {
    icon: Eye,
    title: 'Institutional-Grade Transparency',
    description:
      'Live performance tracking, clear data attribution, and absolute visibility. You will always know precisely which digital levers are driving your revenue.',
    color: 'from-indigo-500 to-blue-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: Zap,
    title: 'SLA-Backed Responsiveness',
    description:
      'Direct synchronization with a Senior Growth Strategist within hours, not days. We eliminate administrative delays to keep your business moving fast.',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Handshake,
    title: 'Aligned Execution',
    description:
      'We do not operate as mere vendors. We embed ourselves as an elite extension of your team, incentivized entirely by your compounding enterprise value.',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
  },
];

export default function WhyContactAnviaan() {
  return (
    <section
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      aria-labelledby="why-contact-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            The Anviaan Advantage
          </div>
          <h2
            id="why-contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Why Partner with{' '}
            <span className="text-gradient">Anviaan?</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            We don’t do traditional agency guesswork. We engineer predictable, data-driven scaling architectures for high-stakes brands.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group p-7 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-500/8 card-hover shine-border"
              >
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <div className={`w-7 h-7 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center shadow-sm`}>
                    <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {reason.description}
                </p>
              </div>
            );
          })}

          {/* CTA card — fills the 6th slot */}
          <div className="relative overflow-hidden p-7 bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 rounded-3xl shadow-lg shadow-slate-900/30 flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/15 rounded-full" />
            <div className="relative z-10 w-full flex flex-col items-center">
              <p className="text-lg font-extrabold text-white mb-2">Ready to scale?</p>
              <p className="text-sm text-blue-100/70 leading-relaxed mb-6 max-w-[200px]">
                Initiate your custom performance blueprint.
              </p>
              <a
                href="mailto:inquiry@Anviaan.com"
                className="group inline-flex items-center gap-2 px-6 py-3.5 w-full justify-center text-sm font-bold text-slate-900 bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Secure Your Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}