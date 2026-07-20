'use client';

import { Target, Eye, ChevronRight } from 'lucide-react';

export default function MissionVision() {
  return (
    <section
      className="relative py-24 bg-slate-50/50 border-t border-slate-200/80 overflow-hidden"
      aria-labelledby="mv-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
            <ChevronRight className="w-4 h-4 text-[#FF6600]" />
            Purpose & Direction
          </div>
          <h2
            id="mv-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
          >
            What Drives{' '}
            <span className="text-[#FF6600] block mt-1">Everything We Do</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#063A9A] via-blue-700 to-blue-900 rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-900/10">
            <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-[#FF6600]/10 rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Icon */}
              <div className="w-14 h-14 bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl flex items-center justify-center shadow-sm">
                <Target className="w-7 h-7 text-white" />
              </div>

              <div>
                <div className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-3">
                  Our Mission
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                  Helping Businesses Grow Through Digital Excellence
                </h3>
              </div>

              <p className="text-blue-50/90 leading-relaxed text-sm sm:text-base font-medium">
                Our mission is to help businesses build a stronger digital presence through thoughtful strategy, creative execution, and measurable marketing. We combine website development, performance marketing, SEO, branding, and content to create solutions that support sustainable business growth.
              </p>

              <p className="text-blue-50/90 leading-relaxed text-sm sm:text-base font-medium">
                Every project is driven by transparency, collaboration, and a commitment to delivering meaningful results that create long-term value for our clients.
              </p>

              {/* Decorative divider */}
              <div className="pt-4 border-t border-white/15">
                <div className="flex flex-wrap gap-2">
                  {['Digital Strategy', 'Performance Marketing', 'Business Growth'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs text-white font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-900/10">
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#FF6600]/10 rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-blue-500/10 rounded-full pointer-events-none" />

            {/* Decorative arc */}
            <div className="absolute top-8 right-8 w-32 h-32 border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute top-12 right-12 w-20 h-20 border border-orange-400/10 rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Icon */}
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl flex items-center justify-center shadow-sm">
                <Eye className="w-7 h-7 text-[#FF6600]" />
              </div>

              <div>
                <div className="text-xs font-bold text-[#FF6600] uppercase tracking-widest mb-3">
                  Our Vision
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                  To Be the Growth Partner Businesses Trust
                </h3>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-medium">
                We envision a future where every business, regardless of its size or industry, has access to digital strategies that drive real business outcomes. Our goal is to help organizations adapt, compete, and grow in an ever-evolving digital landscape.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-medium">
                We strive to build lasting partnerships by delivering innovative solutions, measurable performance, and experiences that help businesses move forward with confidence.
              </p>

              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {['Innovation', 'Long Term Growth', 'Trusted Partnership'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 bg-white/8 border border-white/15 rounded-full text-xs text-slate-200 font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}