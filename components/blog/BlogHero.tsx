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

      {/* NEW BRANDED SVG: Blog/Playbook Theme (Replaced the generic orbit) */}
      <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden lg:block w-[500px] h-[500px] pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ambient background circles */}
          <circle cx="300" cy="100" r="60" fill="#FF6600" opacity="0.04" />
          <circle cx="100" cy="300" r="80" fill="#063A9A" opacity="0.04" />

          {/* Main Playbook / Document Structure */}
          <g transform="translate(90, 60)">
            {/* Document Base */}
            <rect x="0" y="0" width="220" height="280" rx="16" fill="white" stroke="#063A9A" strokeWidth="2" opacity="0.15" />
            
            {/* Document Text Lines */}
            <line x1="40" y1="60" x2="180" y2="60" stroke="#063A9A" strokeWidth="6" strokeLinecap="round" opacity="0.2" />
            <line x1="40" y1="90" x2="140" y2="90" stroke="#063A9A" strokeWidth="6" strokeLinecap="round" opacity="0.2" />
            <line x1="40" y1="120" x2="180" y2="120" stroke="#063A9A" strokeWidth="6" strokeLinecap="round" opacity="0.2" />
            
            {/* Inner Growth Chart / Analytics Block */}
            <rect x="40" y="160" width="140" height="80" rx="8" fill="#063A9A" opacity="0.04" />
            {/* Trending Up Line */}
            <path d="M55 220 L90 190 L120 205 L160 175" stroke="#FF6600" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
            {/* Data Point Dots */}
            <circle cx="90" cy="190" r="4" fill="#063A9A" opacity="0.5" />
            <circle cx="120" cy="205" r="4" fill="#063A9A" opacity="0.5" />
            <circle cx="160" cy="175" r="5" fill="#FF6600" />
            
            {/* Orange Accent Bookmark/Ribbon */}
            <rect x="170" y="-10" width="24" height="48" rx="4" fill="#FF6600" opacity="0.9" />
          </g>
          
          {/* Secondary Floating Element (Sub-document) */}
          <g transform="translate(260, 210) rotate(12)">
            <rect x="0" y="0" width="120" height="140" rx="12" fill="white" stroke="#063A9A" strokeWidth="2" opacity="0.1" />
            <line x1="25" y1="35" x2="95" y2="35" stroke="#063A9A" strokeWidth="4" strokeLinecap="round" opacity="0.15" />
            <line x1="25" y1="65" x2="75" y2="65" stroke="#063A9A" strokeWidth="4" strokeLinecap="round" opacity="0.15" />
            <circle cx="45" cy="105" r="12" fill="#FF6600" opacity="0.15" />
          </g>
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

          {/* NEW CLEAN SEARCH BAR DESIGN */}
          <form onSubmit={handleSubmit} className="relative max-w-2xl pt-4">
            <div className="flex items-center w-full bg-white border border-slate-200/80 rounded-full shadow-lg shadow-blue-500/5 focus-within:ring-4 focus-within:ring-[#063A9A]/15 focus-within:border-[#063A9A]/30 transition-all p-1.5 pl-6">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search playbooks, AEO strategies, or growth tactics..."
                aria-label="Search blog articles"
                className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-slate-800 font-medium px-4 py-3 placeholder:text-slate-400 w-full"
              />
              {input && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="p-2 text-slate-400 hover:text-[#FF6600] transition-colors shrink-0 mr-1"
                  aria-label="Clear search"
                >
                  <X className="w-4.5 h-4.5" strokeWidth={2.5} />
                </button>
              )}
              <button
                type="submit"
                className="shrink-0 px-7 py-3.5 text-sm font-extrabold text-white bg-gradient-to-r from-[#FF6600] to-orange-500 rounded-full shadow-md hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Search
              </button>
            </div>
          </form>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4 pt-5">
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