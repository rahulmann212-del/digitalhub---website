'use client';

import { Target, Eye, ChevronRight } from 'lucide-react';

export default function MissionVision() {
  return (
    <section
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      aria-labelledby="mv-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            Purpose & Direction
          </div>
          <h2
            id="mv-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            What Drives{' '}
            <span className="text-gradient">Everything We Do</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-3xl p-8 md:p-10 shadow-2xl shadow-blue-500/25">
            <div className="absolute inset-0 bg-grid opacity-15" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/8 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-white/8 rounded-full" />

            <div className="relative z-10 space-y-6">
              {/* Icon */}
              <div className="w-14 h-14 bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>

              <div>
                <div className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-3">
                  Our Mission
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                  Helping Businesses Grow Through Digital Excellence
                </h3>
              </div>

              <p className="text-blue-100/80 leading-relaxed text-base">
                Our mission is to help businesses build a stronger digital presence through thoughtful strategy, creative execution, and measurable marketing. We combine website development, performance marketing, SEO, branding, and content to create solutions that support sustainable business growth.
              </p>

              <p className="text-blue-100/80 leading-relaxed text-base">
                Every project is driven by transparency, collaboration, and a commitment to delivering meaningful results that create long-term value for our clients.
              </p>

              {/* Decorative divider */}
              <div className="pt-4 border-t border-white/15">
                <div className="flex gap-2">
                  {['Digital Strategy', 'Performance Marketing', 'Business Growth'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs text-white font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-900/30">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-sky-500/8 rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-blue-500/10 rounded-full" />

            {/* Decorative arc */}
            <div className="absolute top-8 right-8 w-32 h-32 border border-white/5 rounded-full" />
            <div className="absolute top-12 right-12 w-20 h-20 border border-blue-400/10 rounded-full" />

            <div className="relative z-10 space-y-6">
              {/* Icon */}
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl flex items-center justify-center">
                <Eye className="w-7 h-7 text-sky-400" />
              </div>

              <div>
                <div className="text-xs font-bold text-sky-400/70 uppercase tracking-widest mb-3">
                  Our Vision
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                  To Be the Growth Partner Businesses Trust
                </h3>
              </div>

              <p className="text-slate-400 leading-relaxed text-base">
                We envision a future where every business, regardless of its size or industry, has access to digital strategies that drive real business outcomes. Our goal is to help organizations adapt, compete, and grow in an ever-evolving digital landscape.
              </p>

              <p className="text-slate-400 leading-relaxed text-base">
                We strive to build lasting partnerships by delivering innovative solutions, measurable performance, and experiences that help businesses move forward with confidence.
              </p>

              <div className="pt-4 border-t border-white/10">
                <div className="flex gap-2">
                  {['Innovation', 'Long Term Growth', 'Trusted Partnership'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-white/8 border border-white/12 rounded-full text-xs text-slate-300 font-medium"
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