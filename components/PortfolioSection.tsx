'use client';

import { ChevronRight, Layers, Clock, Star } from 'lucide-react';

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/3 w-64 h-64 bg-sky-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            Portfolio
          </div>
          <h2
            id="portfolio-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Client{' '}
            <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            We let our work speak for itself. Our portfolio is a curated collection
            of impactful digital experiences built for growing businesses.
          </p>
        </div>

        {/* Coming Soon card */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-sky-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl shadow-blue-500/25">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 rounded-full" />

            {/* Illustration area */}
            <div className="relative z-10 flex justify-center gap-4 mb-8">
              {[
                { icon: Layers, label: 'Projects', color: 'bg-white/20' },
                { icon: Star, label: 'Quality', color: 'bg-white/30' },
                { icon: Clock, label: 'Coming', color: 'bg-white/20' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`w-16 h-16 ${item.color} backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
              ))}
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full text-sm font-semibold text-white mb-5">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                Coming Soon
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                Our Client Success Stories
              </h3>

              <p className="text-blue-100 leading-relaxed max-w-xl mx-auto text-base">
                We are currently curating our portfolio showcase to present our
                best work in the most impactful way. Each case study will highlight
                real challenges, our strategic approach, and the measurable results
                we achieved for our clients.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {['Web Design', 'E-Commerce', 'SEO', 'Branding', 'Marketing'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-white/15 border border-white/25 rounded-full text-sm text-white font-medium"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <p className="text-center text-sm text-slate-400 mt-6">
            Have a project in mind?{' '}
            <a href="#contact" className="text-blue-600 font-semibold hover:underline">
              Let&apos;s discuss it
            </a>{' '}
            — your success story could be next.
          </p>
        </div>
      </div>
    </section>
  );
}
