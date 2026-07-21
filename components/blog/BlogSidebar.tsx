'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle2, ArrowRight, Flame, FolderOpen } from 'lucide-react';
import { categories, articles } from './blog-data';

interface BlogSidebarProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export default function BlogSidebar({ activeCategory, onCategoryChange }: BlogSidebarProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const popularPosts = articles.filter((a) => a.popular).slice(0, 4);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <aside className="space-y-8" aria-label="Blog sidebar">
      {/* ── Categories Section ── */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-[#063A9A] to-blue-700 rounded-xl flex items-center justify-center shadow-sm">
            <FolderOpen className="w-4 h-4 !text-white" strokeWidth={2.5} />
          </div>
          <h3 className="text-lg font-extrabold text-[#063A9A]">Categories</h3>
        </div>

        <ul className="space-y-2" role="list">
          <li>
            <button
              onClick={() => onCategoryChange('all')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-[#063A9A] to-blue-700 !text-white shadow-md shadow-blue-900/20 border border-[#063A9A]'
                  : 'text-slate-600 bg-slate-50/50 border border-transparent hover:bg-orange-50 hover:border-orange-100 hover:text-[#FF6600]'
              }`}
            >
              <span className={activeCategory === 'all' ? '!text-white' : ''}>All Playbooks</span>
              <span className={`text-xs px-2.5 py-1 rounded-full font-extrabold transition-colors ${
                activeCategory === 'all' ? 'bg-white/20 !text-white' : 'bg-white text-slate-500 border border-slate-200'
              }`}>
                {articles.length}
              </span>
            </button>
          </li>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <li key={cat.id}>
                <button
                  onClick={() => onCategoryChange(cat.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#063A9A] to-blue-700 !text-white shadow-md shadow-blue-900/20 border border-[#063A9A]'
                      : 'text-slate-600 bg-slate-50/50 border border-transparent hover:bg-orange-50 hover:border-orange-100 hover:text-[#FF6600]'
                  }`}
                >
                  <span className={`flex items-center gap-2.5 ${isActive ? '!text-white' : ''}`}>
                    <Icon className="w-4 h-4" strokeWidth={2.5} />
                    {cat.name}
                  </span>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-extrabold transition-colors ${
                    isActive ? 'bg-white/20 !text-white' : 'bg-white text-slate-500 border border-slate-200'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ── Newsletter Dark Banner ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#063A9A] via-blue-800 to-blue-950 rounded-3xl p-8 shadow-xl shadow-blue-900/20">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-400/20 rounded-full pointer-events-none blur-2xl" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FF6600]/20 rounded-full pointer-events-none blur-2xl" />

        <div className="relative z-10">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
            <Mail className="w-5 h-5 !text-white" strokeWidth={2.5} />
          </div>
          
          {/* FIXED: !text-white applied for visibility */}
          <h3 className="text-xl font-extrabold !text-white mb-2 drop-shadow-md">
            Access The Growth Lab
          </h3>
          <p className="text-sm font-medium !text-white/90 leading-relaxed mb-6 drop-shadow-sm">
            Get exclusive playbooks on performance marketing, AEO, and scaling strategies delivered to your inbox. No fluff, just tactics.
          </p>

          {submitted ? (
            <div className="flex items-center gap-3 px-4 py-3.5 bg-emerald-500/20 border border-emerald-400/40 rounded-xl backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 !text-emerald-400 flex-shrink-0" strokeWidth={2.5} />
              <span className="text-sm font-bold !text-white">
                You&apos;re in. Check your inbox soon.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-3.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="founder@company.com"
                aria-label="Email address"
                required
                className="w-full px-4 py-3.5 text-sm !text-white font-medium bg-white/10 border border-white/20 rounded-xl placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF6600]/60 focus:border-[#FF6600]/60 backdrop-blur-sm transition-all"
              />
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-extrabold !text-white bg-gradient-to-r from-[#FF6600] to-orange-500 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Join The Lab
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <p className="text-xs font-semibold !text-white/60 mt-5 text-center">
            Join 2,000+ Founders & CMOs. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* ── Popular / Trending Posts ── */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF6600] to-orange-500 rounded-xl flex items-center justify-center shadow-sm">
            <Flame className="w-4 h-4 !text-white" strokeWidth={2.5} />
          </div>
          <h3 className="text-lg font-extrabold text-[#063A9A]">Trending Playbooks</h3>
        </div>

        <div className="space-y-5">
          {popularPosts.map((article, i) => (
            <div key={article.id} className="flex gap-4 group cursor-pointer">
              <div className="flex-shrink-0 w-8 flex justify-center text-lg font-black text-slate-200 group-hover:text-[#FF6600] transition-colors mt-0.5">
                0{i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-sm font-extrabold text-[#063A9A] group-hover:text-[#FF6600] transition-colors line-clamp-2 leading-snug"
                >
                  {article.title}
                </Link>
                <div className="flex items-center gap-2 mt-2 text-xs font-bold text-slate-400">
                  <span className="text-slate-500">{article.category}</span>
                  <span className="text-slate-300">•</span>
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}