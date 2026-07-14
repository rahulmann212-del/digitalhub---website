import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

interface LeadGenerationBannerProps {
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  highlight?: string;
}

export default function LeadGenerationBanner({
  heading = 'Not Sure Which Strategy Fits Your Business?',
  highlight = 'Get a free custom proposal.',
  subheading = 'Book a free 30-minute strategy call and we will recommend the right approach — even if it means a smaller scope than you expected.',
  ctaLabel = 'Book Free Strategy Call',
  ctaHref = '/contact',
}: LeadGenerationBannerProps) {
  return (
    <section
      className="relative py-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
      aria-labelledby="lead-gen-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-500/20">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/8 rounded-full" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/8 rounded-full" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 border border-white/25 rounded-full text-xs font-semibold text-white mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Free Strategy Session
              </div>
              <h2
                id="lead-gen-heading"
                className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight"
              >
                {heading}
              </h2>
              <p className="mt-3 text-base text-white/80 leading-relaxed max-w-xl">
                <span className="font-bold">{highlight}</span> {subheading}
              </p>
            </div>
            <Link
              href={ctaHref}
              className="group flex items-center gap-2 px-7 py-4 bg-white text-blue-600 font-bold text-base rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
            >
              {ctaLabel}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
