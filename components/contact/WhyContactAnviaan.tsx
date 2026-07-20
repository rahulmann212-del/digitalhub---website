'use client';

import { MessageSquare, Target, Eye, Zap, Handshake, ChevronRight, ArrowRight } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'Bespoke Growth Audit',
    description:
      'A dedicated 30-minute diagnostic strategy session evaluating your current funnel architecture, search visibility, and scaling bottlenecks—zero fluff.',
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: MessageSquare,
    title: 'Tailored Scaling Frameworks',
    description:
      'No rigid templates or pre-packaged bundles. Every strategy we build is engineered specifically around your unit economics, industry benchmarks, and bottom-line goals.',
    color: 'from-[#FF6600] to-orange-500',
    bg: 'bg-orange-50/60',
  },
  {
    icon: Eye,
    title: 'Institutional-Grade Transparency',
    description:
      'Live performance tracking, clear data attribution, and absolute visibility. You will always know precisely which digital levers are driving your revenue.',
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'SLA-Backed Responsiveness',
    description:
      'Direct synchronization with a Senior Growth Strategist within hours, not days. We eliminate administrative delays to keep your business moving fast.',
    color: 'from-[#FF6600] to-orange-500',
    bg: 'bg-orange-50/60',
  },
  {
    icon: Handshake,
    title: 'Aligned Execution',
    description:
      'We do not operate as mere vendors. We embed ourselves as an elite extension of your team, incentivized entirely by your compounding enterprise value.',
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50',
  },
];

export default function WhyContactAnviaan() {
  return (
    <section
      className="relative py-24 bg-slate-50/50 border-t border-slate-200/80 overflow-hidden"
      aria-labelledby="why-contact-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
            <ChevronRight className="w-4 h-4 text-[#FF6600]" />
            The Anviaan Advantage
          </div>
          <h2
            id="why-contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
          >
            Why Partner with{' '}
            <span className="text-[#FF6600] block mt-1">Anviaan?</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
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
                className="group relative p-7 bg-white border border-slate-200/80 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`w-12 h-12 ${reason.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm relative z-10`}>
                  <div className={`w-7 h-7 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center shadow-md`}>
                    <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-[#063A9A] mb-2.5 relative z-10">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium relative z-10">
                  {reason.description}
                </p>

                {/* Bottom accent line on hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            );
          })}

          {/* CTA card — fills the 6th slot */}
          <div className="relative overflow-hidden p-7 bg-gradient-to-br from-[#063A9A] via-blue-700 to-blue-900 rounded-3xl shadow-xl shadow-blue-900/10 flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#FF6600]/15 rounded-full pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full pointer-events-none" />
            
            <div className="relative z-10 w-full flex flex-col items-center">
              <p className="text-xl font-extrabold text-white mb-2">Ready to scale?</p>
              <p className="text-sm sm:text-base text-blue-100/90 font-medium leading-relaxed mb-6 max-w-[220px]">
                Initiate your custom performance blueprint.
              </p>
              <a
                href="mailto:inquiry@Anviaan.com"
                className="group inline-flex items-center gap-2 px-6 py-3.5 w-full justify-center text-sm font-extrabold text-white bg-gradient-to-r from-[#FF6600] to-orange-500 rounded-xl shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300"
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