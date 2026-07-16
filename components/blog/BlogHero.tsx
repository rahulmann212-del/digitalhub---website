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

  return (
    <section
      className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900"
      aria-labelledby="blog-hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 65% at 50% 110%, rgba(37,99,235,0.30) 0%, transparent 65%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 45% at 5% 15%, rgba(14,165,233,0.15) 0%, transparent 60%)' }}
      />

      {/* Floating orbs */}
      <div className="absolute top-24 right-16 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-16 left-12 w-56 h-56 bg-sky-400/8 rounded-full blur-3xl animate-float-delayed" />

      {/* Decorative rings */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[420px] h-[420px] border border-white/5 rounded-full hidden lg:block" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[320px] h-[320px] border border-white/5 rounded-full hidden lg:block" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[220px] h-[220px] border border-blue-500/15 rounded-full hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-blue-300/70 mb-8">
          <Link href="/" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-blue-400/40" />
          <span className="text-blue-300 font-medium">Blog</span>
        </nav>

        <div className="max-w-3xl space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/25 rounded-full text-sm font-medium text-blue-300">
            <Target className="w-4 h-4 text-blue-400" />
            The Aviaan Growth Lab
          </div>

          <h1
            id="blog-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Insights for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              High-Stakes Scaling
            </span>
          </h1>

          <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl">
            Deep-dive playbooks on Generative Engine Optimization (GEO), ROI-obsessed performance marketing, and high-conversion web architectures engineered for modern brands.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSubmit} className="relative max-w-2xl">
            <div className="relative flex items-center">
              <Search className="absolute left-5 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search playbooks, AEO strategies, or growth tactics..."
                aria-label="Search blog articles"
                className="w-full pl-14 pr-32 py-4 text-base text-slate-800 bg-white rounded-2xl shadow-2xl border-0 focus:outline-none focus:ring-4 focus:ring-blue-500/30 placeholder:text-slate-400"
              />
              {input && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-28 p-1 text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="submit"
                className="absolute right-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
              >
                Search
              </button>
            </div>
          </form>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/8 border border-white/10 rounded-2xl backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-white">{totalArticles} Playbooks</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/8 border border-white/10 rounded-2xl backdrop-blur-sm">
              <Newspaper className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-white">{totalCategories} Categories</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/8 border border-white/10 rounded-2xl backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-white">Updated Weekly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}