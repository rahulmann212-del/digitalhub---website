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
    title: 'Clear, Honest Communication',
    desc: 'We keep you informed throughout the entire project. No jargon, no surprises — just clear updates, transparent decisions, and open dialogue at every step.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Clock,
    title: 'We Respect Your Time',
    desc: 'Deadlines are commitments, not suggestions. We plan carefully, communicate proactively, and deliver on schedule — because your time and business depend on it.',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Without Compromise',
    desc: 'Every project goes through rigorous quality checks before it ever reaches you. We hold our work to a standard we&apos;d be proud to put our name on — every time.',
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: Search,
    title: 'SEO Baked In From Day One',
    desc: 'We don&apos;t treat SEO as a plugin or an afterthought. Technical SEO best practices are built into our development process from the very first line of code.',
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
  },
  {
    icon: LayoutDashboard,
    title: 'Business-Focused Design',
    desc: 'Our designs aren&apos;t just aesthetically pleasing — they&apos;re built to convert. Every layout decision is informed by user psychology and your specific business goals.',
    color: 'from-blue-500 to-sky-400',
    bg: 'bg-blue-50',
  },
  {
    icon: RefreshCw,
    title: 'Agile, Iterative Process',
    desc: 'We work in iterations and share progress regularly. You&apos;re never waiting weeks to see the first result — feedback is gathered early and often.',
    color: 'from-sky-600 to-blue-600',
    bg: 'bg-sky-50',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support After Launch',
    desc: 'Our relationship doesn&apos;t end at go-live. We offer maintenance packages and ongoing support — because digital success is a continuous journey, not a single moment.',
    color: 'from-blue-600 to-cyan-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Handshake,
    title: 'A Partner, Not a Vendor',
    desc: 'We invest in understanding your business deeply. Our goal is to become your most trusted digital partner — someone you call when you have a new challenge or opportunity.',
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
            The DigitalHub Edge
          </div>
          <h2
            id="why-clients-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Why Clients Choose{' '}
            <span className="text-gradient">DigitalHub</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Beyond deliverables — here is what clients actually experience when
            they work with us and why they keep coming back.
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
            Ready to experience the DigitalHub difference?
          </p>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Get a Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
