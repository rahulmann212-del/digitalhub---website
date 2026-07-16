'use client';

import Link from 'next/link';
import { Home, ChevronRight, ArrowRight, Globe2, Target } from 'lucide-react';

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

  return (
    <section
      className="relative min-h-[72vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900"
      aria-labelledby="industries-hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 100%, rgba(37,99,235,0.25) 0%, transparent 60%)' }}
      />
      
      {/* Floating orbs */}
      <div className="absolute top-28 right-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-sky-400/8 rounded-full blur-3xl animate-float-delayed" />

      {/* Center decorative illustration (Moved to background center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block w-[600px] h-[600px] pointer-events-none opacity-[0.08]">
        <svg viewBox="0 0 280 280" className="w-full h-full" fill="none">
          <circle cx="140" cy="140" r="100" stroke="rgba(147,197,253,1)" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="140" cy="140" r="68"  stroke="rgba(147,197,253,1)" strokeWidth="1" />
          <circle cx="140" cy="140" r="36"  stroke="rgba(96,165,250,1)"  strokeWidth="1" />
          {/* spokes */}
          {[0,36,72,108,144,180,216,252,288,324].map((deg, i) => {
            const r1 = Math.PI * deg / 180;
            return (
              <line
                key={i}
                x1={140 + 36 * Math.cos(r1)} y1={140 + 36 * Math.sin(r1)}
                x2={140 + 100 * Math.cos(r1)} y2={140 + 100 * Math.sin(r1)}
                stroke="rgba(147,197,253,1)" strokeWidth="1"
              />
            );
          })}
          {/* Outer dots */}
          {[0,36,72,108,144,180,216,252,288,324].map((deg, i) => {
            const r1 = Math.PI * deg / 180;
            return (
              <circle
                key={i}
                cx={140 + 100 * Math.cos(r1)} cy={140 + 100 * Math.sin(r1)}
                r="4" fill="rgba(96,165,250,1)"
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center text-center">
        
        {/* Breadcrumb - Moved to Left Edge */}
        <div className="w-full flex justify-start mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-blue-300/70">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-400/40" />
            <span className="text-blue-300 font-medium">Industries</span>
          </nav>
        </div>

        <div className="max-w-3xl space-y-7 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/25 rounded-full text-sm font-medium text-blue-300">
            <Target className="w-4 h-4 text-blue-400" />
            Specialized Growth Partner
          </div>

          <h1
            id="industries-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-white"
          >
            Precision Growth for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent block sm:inline">
              High-Stakes Brands
            </span>
          </h1>

          <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl">
            We don't do generic templates. Aviaan engineers bespoke digital architectures, next-gen AI search visibility, and ROI-driven marketing specifically for industries built to scale.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-slate-900 bg-white rounded-full shadow-xl shadow-white/10 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              Scale Your Industry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Industry pills — quick jump */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-xs font-bold text-blue-300/50 uppercase tracking-widest mb-5">
            Explore our specializations
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {sectorPills.map((sector) => (
              <button
                key={sector.id}
                onClick={() => scrollTo(sector.id)}
                className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-blue-200 hover:bg-white/15 hover:border-white/25 hover:text-white transition-all duration-300"
              >
                {sector.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}