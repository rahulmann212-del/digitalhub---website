'use client';

import Link from 'next/link';
import { Home, ChevronRight, ArrowRight, Layers, TrendingUp } from 'lucide-react';

export default function ServicesHero() {
  // SEO Breadcrumb Schema Data for Google
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.anviaan.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.anviaan.com/services"
      }
    ]
  };

  return (
    <section
      className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden bg-slate-50 border-b border-slate-200/80 pt-24 pb-14"
      aria-labelledby="services-hero-heading"
    >
      {/* Schema injected for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Background Grid and Glow Elements */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-10 w-56 h-56 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Right decorative illustration */}
      <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 border border-blue-200 rounded-full animate-spin-slow" />
          <div className="absolute inset-6 border border-orange-200 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#063A9A] to-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-500/20">
              <Layers className="w-8 h-8 text-white" />
            </div>
          </div>
          {[
            { deg: 0,   color: 'from-blue-500 to-[#FF6600]', Icon: TrendingUp },
            { deg: 120, color: 'from-[#063A9A] to-indigo-600', Icon: ArrowRight },
            { deg: 240, color: 'from-[#FF6600] to-orange-400', Icon: Layers    },
          ].map(({ deg, color, Icon }, i) => {
            const rad = (deg * Math.PI) / 180;
            const r = 80;
            const x = 50 + r * Math.sin(rad);
            const y = 50 - r * Math.cos(rad);
            return (
              <div
                key={i}
                className={`absolute w-8 h-8 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-md`}
                style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
              >
                <Icon className="w-3.5 h-3.5 text-white" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600 mb-6 font-medium">
          <Link href="/" className="flex items-center gap-1 hover:text-[#063A9A] transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#063A9A] font-bold">Services</span>
        </nav>

        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] shadow-sm">
            <Layers className="w-4 h-4 text-[#FF6600]" />
            Digital Marketing & Development Services
          </div>

          <h1
            id="services-hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-[#063A9A]"
          >
            Digital Solutions{' '}
            <span className="text-[#FF6600] block mt-1">
              That Help Businesses Grow
            </span>
          </h1>

          <p className="text-base lg:text-lg text-slate-700 leading-relaxed max-w-xl font-medium">
            Your business deserves more than disconnected services — Anviaan combines strategy, design, development, SEO, and digital marketing to create digital experiences that attract customers, strengthen your brand, and support sustainable business growth.
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#FF6600] to-orange-500 rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#web"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-[#063A9A] bg-white border-2 border-slate-200 rounded-2xl hover:border-[#063A9A] hover:bg-blue-50 transition-all duration-300 shadow-sm"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Bottom info pills */}
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            { v: 'Digital Marketing',      d: '2 services' },
            { v: 'SEO & Organic Growth',       d: '2 services' },
            { v: 'Branding & Creative',  d: '2 services' },
            { v: 'Website Development', d: '7 services' },
          ].map((item) => (
            <div
              key={item.v}
              className="flex items-center gap-2.5 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm"
            >
              <span className="w-2 h-2 bg-[#FF6600] rounded-full" />
              <span className="text-xs sm:text-sm font-bold text-slate-900">{item.v}</span>
              <span className="text-xs text-slate-500 font-semibold">{item.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}