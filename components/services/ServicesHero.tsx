'use client';

import Link from 'next/link';
import { Home, ChevronRight, ArrowRight, Layers, TrendingUp } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section
      className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900"
      aria-labelledby="services-hero-heading"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 65% at 55% 110%, rgba(37,99,235,0.32) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 5% 15%, rgba(14,165,233,0.16) 0%, transparent 60%)',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-28 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-12 w-56 h-56 bg-sky-400/8 rounded-full blur-3xl animate-float-delayed" />

      {/* Right decorative illustration */}
      <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative w-56 h-56">
          {/* Outer ring */}
          <div className="absolute inset-0 border border-white/6 rounded-full animate-spin-slow" />
          <div className="absolute inset-6 border border-blue-400/10 rounded-full" />
          {/* Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-sky-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/40 animate-float">
              <Layers className="w-9 h-9 text-white" />
            </div>
          </div>
          {/* Orbit nodes */}
          {[
            { deg: 0,   color: 'from-sky-400 to-blue-500',   Icon: TrendingUp },
            { deg: 120, color: 'from-blue-600 to-indigo-500', Icon: ArrowRight },
            { deg: 240, color: 'from-cyan-500 to-blue-500',   Icon: Layers    },
          ].map(({ deg, color, Icon }, i) => {
            const rad = (deg * Math.PI) / 180;
            const r = 96;
            const x = 50 + r * Math.sin(rad);
            const y = 50 - r * Math.cos(rad);
            return (
              <div
                key={i}
                className={`absolute w-9 h-9 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-lg`}
                style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
              >
                <Icon className="w-4 h-4 text-white" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-blue-300/70 mb-8">
          <Link href="/" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-blue-400/40" />
          <span className="text-blue-300 font-medium">Services</span>
        </nav>

        <div className="max-w-2xl space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/25 rounded-full text-sm font-medium text-blue-300">
            <Layers className="w-4 h-4 text-blue-400" />
            13 Services
          </div>

          <h1
            id="services-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Everything Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Business Needs
            </span>{' '}
            Online
          </h1>

          <p className="text-lg text-blue-100/70 leading-relaxed max-w-xl">
            From the first wireframe to the hundredth optimization — we provide
            the complete spectrum of digital services that growing businesses
            rely on to compete and convert online.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-900 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#web"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white border-2 border-white/20 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Bottom info pills */}
        <div className="mt-14 flex flex-wrap gap-4">
          {[
            { v: 'Web Solutions',      d: '7 services' },
            { v: 'SEO & Growth',       d: '2 services' },
            { v: 'Digital Marketing',  d: '2 services' },
            { v: 'Performance & Security', d: '2 services' },
          ].map((item) => (
            <div
              key={item.v}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-white/8 border border-white/10 rounded-2xl backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              <span className="text-sm font-semibold text-white">{item.v}</span>
              <span className="text-xs text-blue-300/60">{item.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
