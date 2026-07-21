'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Home, ChevronRight, Search, X, Newspaper, Sparkles, Target } from 'lucide-react';

interface BlogHeroProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  totalArticles: number;
  totalCategories: number;
}

export default function BlogHero({ onSearch, searchQuery, totalArticles, totalCategories }: BlogHeroProps) {
  const [input, setInput] = useState(searchQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
    const grid = document.getElementById('blog-grid');
    if (grid) {
      const y = grid.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const clearSearch = () => {
    setInput('');
    onSearch('');
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
        "name": "Blog",
        "item": "https://www.anviaan.com/blog"
      }
    ]
  };

  return (
    <section
      className="relative pt-28 pb-20 overflow-hidden bg-slate-50 border-b border-slate-200/80 min-h-[65vh] flex flex-col justify-center"
      aria-labelledby="blog-hero-heading"
    >
      {/* Schema injected for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Background Grid and Light Glow Elements */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative SVG (Right side, matching Industries/Services Vibe) */}
      <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:block w-[450px] h-[450px] pointer-events-none">
        <svg viewBox="0 0 280 280" className="w-full h-full" fill="none">
          {/* Main orbits */}
          <circle cx="140" cy="140" r="120" stroke="#063A9A" strokeWidth="1" strokeDasharray="6 4" opacity="0.15" />
          <circle cx="140" cy="140" r="85"  stroke="#063A9A" strokeWidth="1" opacity="0.2" />
          
          {/* Center core */}
          <circle cx="140" cy="140" r="35" fill="#063A9A" opacity="0.05" />
          <circle cx="140" cy="140" r="22" fill="#063A9A" />
          <circle cx="140" cy="140" r="10" fill="#FF6600" />
          
          {/* Orbiting elements / Document nodes */}
          <rect x="132" y="10" width="16" height="20" rx="4" fill="#FF6600" opacity="0.8" />
          <rect x="250" y="130" width="20" height="16" rx="4" fill="#063A9A" opacity="0.6" />
          <circle cx="55" cy="225" r="8" fill="#FF6600" opacity="0.9" />
          
          {/* Connection spokes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const r1 = (Math.PI * deg) / 180;
            return (
              <line
                key={i}
                x1={140 + 35 * Math.cos(r1)} y1={140 + 35 * Math.sin(r1)}
                x2={140 + 85 * Math.cos(r1)} y2={140 + 85 * Math.sin(r1)}
                stroke="#063A9A" strokeWidth="1" opacity="0.15"
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600 mb-8 font-medium">
          <Link href="/" className="flex items-center gap-1 hover:text-[#063A9A] transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#063A9A] font-bold">Blog</span>
        </nav>

        <div className="max-w-3xl space-y-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] shadow-sm">
            <Target className="w-4 h-4 text-[#FF6600]" />
            The Anviaan Growth Lab
          </div>

          {/* Heading */}
          <h1
            id="blog-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#063A9A]"
          >
            Insights for{' '}
            <span className="text-[#FF6600] block mt-1">
              High-Stakes Scaling
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-medium">
            Deep-dive playbooks on Generative Engine Optimization (GEO), ROI-obsessed performance marketing, and high-conversion web architectures engineered for modern brands.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSubmit} className="relative max-w-2xl pt-2">
            <div className="relative flex items-center shadow-lg shadow-blue-500/5 rounded-2xl">
              <Search className="absolute left-5 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search playbooks, AEO strategies, or growth tactics..."
                aria-label="Search blog articles"
                className="w-full pl-14 pr-36 py-4.5 text-base text-slate-800 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#063A9A]/15 focus:border-[#063A9A]/30 placeholder:text-slate-400 font-medium transition-all"
              />
              {input && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-[115px] p-1.5 text-slate-400 hover:text-[#FF6600] transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" strokeWidth={2.5} />
                </button>
              )}
              <button
                type="submit"
                className="absolute right-2 px-6 py-3 text-sm font-extrabold text-white bg-gradient-to-r from-[#FF6600] to-orange-500 rounded-xl shadow-md hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Search
              </button>
            </div>
          </form>

          {/* Stats row - Adapted for Light Theme */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm">
              <Sparkles className="w-4 h-4 text-[#063A9A]" />
              <span className="text-sm font-extrabold text-slate-700">{totalArticles} Playbooks</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm">
              <Newspaper className="w-4 h-4 text-[#063A9A]" />
              <span className="text-sm font-extrabold text-slate-700">{totalCategories} Categories</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-sm" />
              <span className="text-sm font-extrabold text-slate-700">Updated Weekly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}