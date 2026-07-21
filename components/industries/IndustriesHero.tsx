'use client';

import Link from 'next/link';
import { Home, ChevronRight, ArrowRight, Target } from 'lucide-react';

const sectorPills = [
  { name: 'E-Commerce', id: 'ecommerce-d2c' },
  { name: 'Health & Beauty', id: 'health-beauty-wellness' },
  { name: 'SaaS & Tech', id: 'saas-technology' },
  { name: 'B2B Enterprise', id: 'b2b-enterprise' },
];

export default function IndustriesHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
        "name": "Industries",
        "item": "https://www.anviaan.com/industries"
      }
    ]
  };

  return (
    <section
      className="relative pt-28 pb-20 overflow-hidden bg-slate-50 border-b border-slate-200/80 min-h-[72vh] flex flex-col justify-center"
      aria-labelledby="industries-hero-heading"
    >
      {/* Schema injected for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Background Grid and Glow Elements */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Center decorative illustration (Moved to right side for light theme layout) */}
      <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:block w-[450px] h-[450px] pointer-events-none">
        <svg viewBox="0 0 280 280" className="w-full h-full" fill="none">
          {/* Main orbits */}
          <circle cx="140" cy="140" r="120" stroke="#063A9A" strokeWidth="1" strokeDasharray="6 4" opacity="0.15" />
          <circle cx="140" cy="140" r="85"  stroke="#063A9A" strokeWidth="1" opacity="0.2" />
          
          {/* Center core */}
          <circle cx="140" cy="140" r="40" fill="#063A9A" opacity="0.05" />
          <circle cx="140" cy="140" r="28" fill="#063A9A" />
          <circle cx="140" cy="140" r="14" fill="#FF6600" />
          
          {/* Orbiting elements */}
          <circle cx="140" cy="20" r="8" fill="#FF6600" opacity="0.8" />
          <circle cx="260" cy="140" r="10" fill="#063A9A" opacity="0.6" />
          <circle cx="55" cy="225" r="6" fill="#FF6600" opacity="0.9" />
          
          {/* Connection spokes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const r1 = (Math.PI * deg) / 180;
            return (
              <line
                key={i}
                x1={140 + 40 * Math.cos(r1)} y1={140 + 40 * Math.sin(r1)}
                x2={140 + 85 * Math.cos(r1)} y2={140 + 85 * Math.sin(r1)}
                stroke="#063A9A" strokeWidth="1" opacity="0.15"
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Breadcrumb - Left Aligned */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600 mb-8 font-medium">
          <Link href="/" className="flex items-center gap-1 hover:text-[#063A9A] transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#063A9A] font-bold">Industries</span>
        </nav>

        <div className="max-w-2xl space-y-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] shadow-sm">
            <Target className="w-4 h-4 text-[#FF6600]" />
            Specialized Growth Partner
          </div>

          {/* Heading */}
          <h1
            id="industries-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#063A9A]"
          >
            Precision Growth for{' '}
            <span className="text-[#FF6600] block mt-1">
              High-Stakes Brands
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-medium">
            We don't do generic templates. Anviaan engineers bespoke digital architectures, next-gen AI search visibility, and ROI-driven marketing specifically for industries built to scale.
          </p>

          {/* CTA & Sector Pills */}
          <div className="pt-4 space-y-8">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#FF6600] to-orange-500 rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                Scale Your Industry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Industry pills — quick jump */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Explore our specializations
              </p>
              <div className="flex flex-wrap gap-2.5">
                {sectorPills.map((sector) => (
                  <button
                    key={sector.id}
                    onClick={() => scrollTo(sector.id)}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-[#063A9A] hover:bg-orange-50 hover:border-orange-200 hover:text-[#FF6600] shadow-sm transition-all duration-300"
                  >
                    {sector.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}