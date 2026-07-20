'use client';

import {
  MessageCircle,
  Clock,
  ShieldCheck,
  Search,
  LayoutDashboard,
  RefreshCw,
  HeadphonesIcon,
  Handshake,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const reasons = [
  {
    icon: MessageCircle,
    title: 'Strategic Transparency',
    desc: 'We believe great partnerships are built on clarity. From planning to performance, you\'ll always know what we\'re doing, why we\'re doing it, and how it\'s contributing to your business goals.',
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Clock,
    title: 'Built for Results',
    desc: 'Every website, campaign, and strategy is designed with clear business objectives in mind, helping you attract the right audience, generate quality leads, and improve conversions.',
    color: 'from-[#FF6600] to-orange-500',
    bg: 'bg-orange-50/60',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Without Compromise',
    desc: 'We combine thoughtful design, reliable development, and rigorous quality assurance to deliver digital solutions that are fast, secure, and built to perform.',
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Search,
    title: 'Growth Driven Strategy',
    desc: 'We don\'t rely on guesswork. Every recommendation is supported by research, user behavior, and performance insights to help your business grow with confidence.',
    color: 'from-[#FF6600] to-orange-500',
    bg: 'bg-orange-50/60',
  },
  {
    icon: LayoutDashboard,
    title: 'User First Experiences',
    desc: 'Great digital experiences keep visitors engaged. We create intuitive websites and marketing journeys that make it easier for customers to trust your brand and take action.',
    color: 'from-[#FF6600] to-orange-500',
    bg: 'bg-orange-50/60',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Improvement',
    desc: 'Digital success doesn\'t end at launch. We continuously analyze, refine, and optimize your digital presence to improve performance over time.',
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: HeadphonesIcon,
    title: 'Long Term Partnership',
    desc: 'We work as an extension of your team, providing ongoing guidance, support, and strategic recommendations as your business evolves.',
    color: 'from-[#FF6600] to-orange-500',
    bg: 'bg-orange-50/60',
  },
  {
    icon: Handshake,
    title: 'Solutions That Scale',
    desc: 'Whether you\'re launching a new business, expanding into new markets, or growing an established brand, we build solutions that adapt to your next stage of growth.',
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50',
  },
];

export default function WhyClientsChoose() {
  return (
    <section
      className="relative py-24 bg-slate-50/50 border-t border-slate-200/80 overflow-hidden"
      aria-labelledby="why-clients-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute right-0 top-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
            <ChevronRight className="w-4 h-4 text-[#FF6600]" />
            Why Businesses Choose Us
          </div>
          <h2
            id="why-clients-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
          >
            Why Clients Choose{' '}
            <span className="text-[#FF6600] block mt-1">Anviaan</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Businesses choose Anviaan because we combine strategy, creativity, technology, and measurable execution to deliver digital experiences that support long term growth.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="group relative bg-white border border-slate-200/80 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div
                className={`w-12 h-12 ${reason.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                <div
                  className={`w-7 h-7 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center shadow-md`}
                >
                  <reason.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="font-extrabold text-[#063A9A] text-sm sm:text-base mb-2.5 leading-snug">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {reason.desc}
              </p>

              {/* Bottom accent line on hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </article>
          ))}
        </div>

        {/* CTA nudge */}
        <div className="mt-16 text-center">
          <p className="text-slate-800 font-bold text-base sm:text-lg mb-5">
            Ready to Build Something That Delivers Real Results?
          </p>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#FF6600] to-orange-500 rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}