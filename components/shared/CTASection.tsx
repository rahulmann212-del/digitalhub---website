import Link from 'next/link';
import { ArrowRight, Calendar, FileText, MessageSquare } from 'lucide-react';

interface CTASectionProps {
  heading?: string;
  highlight?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  trustPills?: string[];
  badge?: string;
}

export default function CTASection({
  heading = 'Ready to Grow Your',
  highlight = 'Business Online?',
  subheading = "Let's build something great together. Share your vision with us and we'll craft a tailored digital strategy that delivers real, measurable results.",
  primaryLabel = 'Request Proposal',
  primaryHref = '/contact',
  secondaryLabel = 'Book a Call',
  secondaryHref = '/contact',
  trustPills = ['Free Consultation', 'No Hidden Fees', 'Fast Turnaround', 'Expert Team'],
  badge = 'Ready to Launch',
}: CTASectionProps) {
  return (
    <section
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="cta-section-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 rounded-[2.5rem] p-10 md:p-16 lg:p-20">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute top-8 right-8 w-40 h-40 border border-white/5 rounded-full" />
          <div className="absolute top-12 right-12 w-24 h-24 border border-blue-400/8 rounded-full" />
          <div className="absolute bottom-8 left-8 w-28 h-28 border border-white/5 rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/25 rounded-full text-sm font-medium text-blue-300 mb-6">
                <MessageSquare className="w-4 h-4" />
                {badge}
              </div>
              <h2
                id="cta-section-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight"
              >
                {heading}{' '}
                <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                  {highlight}
                </span>
              </h2>
              <p className="mt-5 text-lg text-blue-100/70 leading-relaxed">{subheading}</p>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                {trustPills.map((pill) => (
                  <span
                    key={pill}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-sm text-blue-200 font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href={primaryHref}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold text-base rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <FileText className="w-5 h-5 text-blue-600" />
                {primaryLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={secondaryHref}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-bold text-base rounded-2xl border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                {secondaryLabel}
              </Link>
              <p className="text-center text-xs text-blue-300/50">
                We respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
