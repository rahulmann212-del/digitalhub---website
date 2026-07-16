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
        style={{ background: 'radial-gradient(ellipse 80% 65% at 55% 110%, rgba(37,99,235,0.30) 0%, transparent 65%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 45% at 5% 15%, rgba(14,165,233,0.15) 0%, transparent 60%)' }}
      />

      {/* Floating orbs */}
      <div className="absolute top-28 right-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-sky-400/8 rounded-full blur-3xl animate-float-delayed" />

      {/* Right decorative illustration — interconnected nodes */}
      <div className="absolute right-8 lg:right-20 top-1/2 -translate-y-1/2 hidden lg:block w-72 h-72">
        <svg viewBox="0 0 280 280" className="w-full h-full opacity-25" fill="none">
          <circle cx="140" cy="140" r="100" stroke="rgba(147,197,253,0.3)" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="140" cy="140" r="68"  stroke="rgba(147,197,253,0.4)" strokeWidth="1" />
          <circle cx="140" cy="140" r="36"  stroke="rgba(96,165,250,0.5)"  strokeWidth="1" />
          {/* spokes */}
          {[0,36,72,108,144,180,216,252,288,324].map((deg, i) => {
            const r1 = Math.PI * deg / 180;
            return (
              <line
                key={i}
                x1={140 + 36 * Math.cos(r1)} y1={140 + 36 * Math.sin(r1)}
                x2={140 + 100 * Math.cos(r1)} y2={140 + 100 * Math.sin(r1)}
                stroke="rgba(147,197,253,0.25)" strokeWidth="1"
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
                r="4" fill="rgba(96,165,250,0.6)"
              />
            );
          })}
          <circle cx="140" cy="140" r="14" fill="rgba(37,99,235,0.7)" />
          <circle cx="140" cy="140" r="6"  fill="rgba(147,197,253,0.9)" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/40 animate-float">
            <Globe2 className="w-8 h-8 text-white" />
          </div>
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
          <span className="text-blue-300 font-medium">Industries</span>
        </nav>

        <div className="max-w-2xl space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/25 rounded-full text-sm font-medium text-blue-300">
            <Target className="w-4 h-4 text-blue-400" />
            Specialized Growth Partner
          </div>

          <h1
            id="industries-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Precision Growth for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              High-Stakes Brands
            </span>
          </h1>

          <p className="text-lg text-blue-100/70 leading-relaxed max-w-xl">
            We don't do generic templates. Aviaan engineers bespoke digital architectures, next-gen AI search visibility, and ROI-driven marketing specifically for industries built to scale.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-900 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Scale Your Industry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Industry pills — quick jump */}
        <div className="mt-14">
          <p className="text-xs font-bold text-blue-300/50 uppercase tracking-widest mb-4">
            Explore our specializations
          </p>
          <div className="flex flex-wrap gap-2">
            {sectorPills.map((sector) => (
              <button
                key={sector.id}
                onClick={() => scrollTo(sector.id)}
                className="px-4 py-2 bg-white/8 border border-white/12 rounded-xl text-sm font-medium text-blue-200 hover:bg-white/15 hover:border-white/25 hover:text-white transition-all duration-200"
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