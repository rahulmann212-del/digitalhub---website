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
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Clock,
    title: 'Built for Results',
    desc: 'Every website, campaign, and strategy is designed with clear business objectives in mind, helping you attract the right audience, generate quality leads, and improve conversions.',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Without Compromise',
    desc: 'We combine thoughtful design, reliable development, and rigorous quality assurance to deliver digital solutions that are fast, secure, and built to perform.',
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: Search,
    title: 'Growth Driven Strategy',
    desc: 'We don\'t rely on guesswork. Every recommendation is supported by research, user behavior, and performance insights to help your business grow with confidence.',
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
  },
  {
    icon: LayoutDashboard,
    title: 'User First Experiences',
    desc: 'Great digital experiences keep visitors engaged. We create intuitive websites and marketing journeys that make it easier for customers to trust your brand and take action.',
    color: 'from-blue-500 to-sky-400',
    bg: 'bg-blue-50',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Improvement',
    desc: 'Digital success doesn\'t end at launch. We continuously analyze, refine, and optimize your digital presence to improve performance over time.',
    color: 'from-sky-600 to-blue-600',
    bg: 'bg-sky-50',
  },
  {
    icon: HeadphonesIcon,
    title: 'Long Term Partnership',
    desc: 'We work as an extension of your team, providing ongoing guidance, support, and strategic recommendations as your business evolves.',
    color: 'from-blue-600 to-cyan-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Handshake,
    title: 'Solutions That Scale',
    desc: 'Whether you\'re launching a new business, expanding into new markets, or growing an established brand, we build solutions that adapt to your next stage of growth.',
    color: 'from-blue-700 to-blue-500',
    bg: 'bg-blue-50',
  },
];

export default function WhyClientsChoose() {
  return (
    <section
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="why-clients-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-sky-50/40 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            Why Businesses Choose Us
          </div>
          <h2
            id="why-clients-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Why Clients Choose{' '}
            <span className="text-gradient">Rankovio</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Businesses choose Rankovio because we combine strategy, creativity, technology, and measurable execution to deliver digital experiences that support long term growth.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="group bg-white border border-slate-100 rounded-3xl p-6 card-hover shine-border"
            >
              <div
                className={`w-11 h-11 ${reason.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div
                  className={`w-6 h-6 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center`}
                >
                  <reason.icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="font-bold text-slate-800 text-sm mb-2.5 leading-snug">
                {reason.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">{reason.desc}</p>
            </article>
          ))}
        </div>

        {/* CTA nudge */}
        <div className="mt-14 text-center">
          <p className="text-slate-500 mb-4">
            Ready to Build Something That Delivers Real Results?
          </p>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}