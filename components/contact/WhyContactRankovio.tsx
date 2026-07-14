import { MessageSquare, Target, Eye, Zap, Handshake, ChevronRight } from 'lucide-react';

const reasons = [
  {
    icon: MessageSquare,
    title: 'Free Consultation',
    description:
      'A genuine 30-minute strategy call with no obligation. We give you honest recommendations, even if we are not the right fit for your project.',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
  },
  {
    icon: Target,
    title: 'Customized Growth Strategy',
    description:
      'No generic packages or one-size-fits-all templates. Every strategy is built around your specific business, market, and goals.',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
  },
  {
    icon: Eye,
    title: 'Transparent Communication',
    description:
      'Clear reporting, plain language, and no jargon. You always know what we are doing, why we are doing it, and what results it is producing.',
    color: 'from-indigo-500 to-blue-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: Zap,
    title: 'Fast Response Time',
    description:
      'We respond to every enquiry within one business day, and most within a few hours. No waiting around to hear back from us.',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Handshake,
    title: 'Long Term Partnership',
    description:
      'We are not interested in one-off projects. We build lasting relationships and become a genuine extension of your team.',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
  },
];

export default function WhyContactRankovio() {
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
            Why Rankovio
          </div>
          <h2
            id="why-contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Why Contact{' '}
            <span className="text-gradient">Rankovio?</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            We are not your typical agency. Here is what makes working with us
            different from the rest.
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
                <div className={`w-12 h-12 ${reason.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-7 h-7 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}

          {/* CTA card — fills the 6th slot */}
          <div className="relative overflow-hidden p-7 bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 rounded-3xl shadow-lg flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/15 rounded-full" />
            <div className="relative z-10">
              <p className="text-lg font-extrabold text-white mb-2">Ready to start?</p>
              <p className="text-sm text-blue-100/70 leading-relaxed mb-5">
                Book your free strategy call today.
              </p>
              <a
                href="mailto:hello@rankovio.com"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-slate-900 bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
