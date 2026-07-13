import Link from 'next/link';
import { ArrowRight, MessageSquare, FileText, Phone } from 'lucide-react';

const actions = [
  {
    icon: MessageSquare,
    title: 'Free Consultation',
    desc: 'Book a no-obligation call to discuss your project, ask questions, and explore how we can help.',
    href: '/#contact',
    primary: true,
    label: 'Book a Call',
  },
  {
    icon: FileText,
    title: 'Request a Proposal',
    desc: 'Share your project details and we will send a detailed, transparent proposal with scope and investment.',
    href: 'mailto:hello@digitalhub.agency',
    primary: false,
    label: 'Get a Proposal',
  },
  {
    icon: Phone,
    title: 'Ask a Question',
    desc: 'Not sure which service fits your needs? Send us a message and we will point you in the right direction.',
    href: 'mailto:hello@digitalhub.agency',
    primary: false,
    label: 'Send a Message',
  },
];

export default function ServicesCTA() {
  return (
    <section
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      aria-labelledby="services-cta-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark CTA banner */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 p-10 md:p-16 shadow-2xl shadow-slate-900/30 mb-16">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute top-8 right-8 w-44 h-44 border border-white/5 rounded-full" />
          <div className="absolute bottom-8 left-8 w-32 h-32 border border-white/5 rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2
              id="services-cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight"
            >
              Not Sure Which Service{' '}
              <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                You Need?
              </span>
            </h2>
            <p className="text-lg text-blue-100/70 leading-relaxed">
              Most clients come to us with a business goal, not a service list.
              Tell us what you are trying to achieve — we will recommend the
              right combination and give you a clear path forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Talk to Us First
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="mailto:hello@digitalhub.agency"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold border-2 border-white/20 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                Send a Message
              </Link>
            </div>
            <p className="text-sm text-blue-300/50">
              Free consultation · No obligation · Respond within 4 business hours
            </p>
          </div>
        </div>

        {/* Three action cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.title}
                className={`group p-7 rounded-3xl border card-hover ${
                  action.primary
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500 shadow-xl shadow-blue-500/20'
                    : 'bg-white border-slate-100'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${
                    action.primary ? 'bg-white/15 border border-white/25' : 'bg-blue-50'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${action.primary ? 'text-white' : 'text-blue-600'}`}
                    strokeWidth={2}
                  />
                </div>
                <h3
                  className={`font-bold text-base mb-2 ${
                    action.primary ? 'text-white' : 'text-slate-800'
                  }`}
                >
                  {action.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    action.primary ? 'text-blue-100/70' : 'text-slate-500'
                  }`}
                >
                  {action.desc}
                </p>
                <Link
                  href={action.href}
                  className={`inline-flex items-center gap-2 text-sm font-bold group/link ${
                    action.primary
                      ? 'text-white hover:gap-3'
                      : 'text-blue-600 hover:text-blue-700 hover:gap-3'
                  } transition-all duration-200`}
                >
                  {action.label}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
