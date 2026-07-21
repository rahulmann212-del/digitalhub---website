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
    <>
      <section
        className="relative pt-28 pb-12 overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-100 to-slate-200/60 border-b border-slate-300/60 shadow-sm"
        aria-labelledby="services-hero-heading"
      >
        {/* Schema injected for Breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Background Grid and Glow Elements matching other pages */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb with proper spacing */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 mb-6 font-medium">
            <Link href="/" className="flex items-center gap-1 hover:text-[#063A9A] transition-colors">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#063A9A] font-bold">Services</span>
          </nav>

          {/* Split Grid Layout: Text Left, Illustration Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7 space-y-4">
              <h1
                id="services-hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-[#063A9A]"
              >
                Digital Solutions{' '}
                <span className="text-[#FF6600] block mt-1">
                  That Help Businesses Grow
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium max-w-xl">
                Your business deserves more than disconnected services — Anviaan combines strategy, design, development, SEO, and digital marketing to create digital experiences that attract customers, strengthen your brand, and support sustainable business growth.
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF6600] to-orange-500 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#web"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-[#063A9A] bg-white border border-slate-200/90 rounded-xl hover:border-[#063A9A] hover:bg-blue-50/50 transition-all duration-300 shadow-sm"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* Right Column: Clean Floating Illustration pinned to the Right */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-end">
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 border border-blue-200/80 rounded-full animate-spin-slow" />
                <div className="absolute inset-6 border border-orange-200/80 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#063A9A] to-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-500/20 animate-float">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                </div>
                {[
                  { deg: 0,   color: 'from-blue-500 to-[#FF6600]', Icon: TrendingUp },
                  { deg: 120, color: 'from-[#063A9A] to-indigo-600', Icon: ArrowRight },
                  { deg: 240, color: 'from-[#FF6600] to-orange-400', Icon: Layers },
                ].map(({ deg, color, Icon }, i) => {
                  const rad = (deg * Math.PI) / 180;
                  const r = 75;
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

          </div>

          {/* Bottom info pills */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { v: 'Digital Marketing',    d: '2 services' },
              { v: 'SEO & Organic Growth',   d: '2 services' },
              { v: 'Branding & Creative',  d: '2 services' },
              { v: 'Website Development', d: '7 services' },
            ].map((item) => (
              <div
                key={item.v}
                className="flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-sm border border-slate-200/90 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF6600] rounded-full shrink-0" />
                  <span className="text-xs font-bold text-slate-900 truncate">{item.v}</span>
                </div>
                <span className="text-[11px] text-slate-500 font-semibold shrink-0 ml-2">{item.d}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}