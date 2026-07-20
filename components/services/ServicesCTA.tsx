'use client';

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
    href: 'mailto:inquiry@Anviaan.com',
    primary: false,
    label: 'Get a Proposal',
  },
  {
    icon: Phone,
    title: 'Ask a Question',
    desc: 'Not sure which service fits your needs? Send us a message and we will point you in the right direction.',
    href: 'mailto:inquiry@Anviaan.com',
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
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* High-visibility clean light CTA banner */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-blue-200 p-10 md:p-16 shadow-xl mb-16">
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-8 right-8 w-44 h-44 border border-slate-200 rounded-full" />
          <div className="absolute bottom-8 left-8 w-32 h-32 border border-slate-200 rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2
              id="services-cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
            >
              Not Sure Which Service{' '}
              <span className="text-[#FF6600] block mt-1">
                You Need?
              </span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              Most clients come to us with a business goal, not a service list.
              Tell us what you are trying to achieve — we will recommend the
              right combination and give you a clear path forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6600] to-orange-500 text-white font-bold rounded-2xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                Talk to Us First
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="mailto:inquiry@Anviaan.com"
                className="inline-flex items-center gap-2 px-8 py-4 text-[#063A9A] font-bold bg-white border-2 border-slate-200 rounded-2xl hover:border-[#063A9A] hover:bg-blue-50 transition-all duration-300 shadow-sm"
              >
                Send a Message
              </Link>
            </div>
            <p className="text-sm text-slate-500 font-semibold">
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
                className={`group p-7 rounded-3xl border card-hover transition-all duration-300 ${
                  action.primary
                    ? 'bg-gradient-to-br from-[#063A9A] to-blue-700 border-[#063A9A] shadow-xl shadow-blue-900/15 text-white'
                    : 'bg-white border-slate-200 shadow-sm hover:border-[#063A9A]'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${
                    action.primary ? 'bg-white/15 border border-white/25' : 'bg-blue-50'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${action.primary ? 'text-white' : 'text-[#063A9A]'}`}
                    strokeWidth={2}
                  />
                </div>
                <h3
                  className={`font-bold text-base mb-2 ${
                    action.primary ? 'text-white' : 'text-[#063A9A]'
                  }`}
                >
                  {action.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-5 font-medium ${
                    action.primary ? 'text-blue-100/90' : 'text-slate-600'
                  }`}
                >
                  {action.desc}
                </p>
                <Link
                  href={action.href}
                  className={`inline-flex items-center gap-2 text-sm font-bold group/link ${
                    action.primary
                      ? 'text-white hover:gap-3'
                      : 'text-[#063A9A] hover:text-[#FF6600] hover:gap-3'
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