'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight, Sparkles, Zap, TrendingUp, Rocket } from 'lucide-react';

const universals = [
  {
    icon: Sparkles,
    title: 'Next-Gen AI Search',
    desc: 'We future-proof your digital presence with Generative Engine Optimization (GEO) and AEO, ensuring you rank not just on Google, but in AI chatbots and LLMs.',
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Conversion-Obsessed UX',
    desc: 'We do not build digital brochures. Our e-commerce and B2B architectures are engineered to eliminate friction, reduce cart abandonment, and maximize your Average Order Value.',
    color: 'from-[#FF6600] to-orange-500',
    bg: 'bg-orange-50/60',
  },
  {
    icon: TrendingUp,
    title: 'ROI-Driven Performance',
    desc: 'Traffic without revenue is just vanity. Our short-form video campaigns and targeted ad strategies are strictly optimized for ROAS and bottom-line profit margins.',
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50',
  },
];

export default function IndustriesCTA() {
  return (
    <section
      className="relative py-24 bg-slate-50/50 border-t border-slate-200/80 overflow-hidden"
      aria-labelledby="industries-cta-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Universal approach cards -> Anviaan Growth Architecture */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
              <ChevronRight className="w-4 h-4 text-[#FF6600]" />
              The Anviaan Growth Architecture
            </div>
            <h2
              id="industries-cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
            >
              Where Precision Tech Meets{' '}
              <span className="text-[#FF6600] block mt-1">Aggressive Scaling</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Every digital asset we build is purposefully engineered to capture high-intent traffic, build immediate trust, and accelerate your sales cycle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {universals.map((u) => {
              const Icon = u.icon;
              return (
                <div
                  key={u.title}
                  className="group relative p-7 bg-white border border-slate-200/80 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`w-12 h-12 ${u.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm relative z-10`}>
                    <div className={`w-7 h-7 bg-gradient-to-br ${u.color} rounded-xl flex items-center justify-center shadow-md`}>
                      <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#063A9A] mb-2.5 relative z-10">{u.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium relative z-10">{u.desc}</p>
                  
                  {/* Bottom accent line on hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${u.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Dark banner CTA -> Exclusive Growth Partner */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#063A9A] via-blue-800 to-blue-950 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-blue-900/20">
          <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#FF6600]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-8 right-8 w-40 h-40 border border-white/10 rounded-full pointer-events-none" />
          <div className="absolute bottom-8 left-8 w-28 h-28 border border-[#FF6600]/20 rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-bold text-white mb-6 backdrop-blur-sm">
                <Rocket className="w-4 h-4 text-[#FF6600]" />
                Ready to Scale?
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Partner With a Dedicated{' '}
                <span className="text-[#FF6600] block mt-1">
                  Growth Engine
                </span>
              </h3>
              <p className="mt-5 text-base sm:text-lg text-blue-50/90 font-medium leading-relaxed">
                We partner selectively with high-volume e-commerce brands, tech innovators, and enterprise B2B companies looking for aggressive, data-driven scaling.
              </p>
              
              {/* Premium Focus Pills */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2.5">
                {['Sub-Second Load Times', 'AEO & GEO Ready', 'ROAS Optimization', 'Frictionless Checkouts', 'Short-Form Video'].map(
                  (s) => (
                    <span
                      key={s}
                      className="px-4 py-2 bg-white/10 border border-white/15 rounded-full text-xs sm:text-sm text-white font-bold backdrop-blur-sm"
                    >
                      {s}
                    </span>
                  )
                )}
                <span className="px-4 py-2 bg-[#FF6600]/20 border border-[#FF6600]/40 rounded-full text-xs sm:text-sm text-white font-extrabold backdrop-blur-sm">
                  + Full-Funnel Analytics
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-shrink-0 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6600] to-orange-500 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                Claim Your Free Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 px-8 py-4 text-white font-bold border-2 border-white/20 rounded-2xl hover:border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Our Architecture
              </Link>
              <p className="text-center text-xs font-semibold text-blue-200/60 mt-1">
                Direct strategy · No obligations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}