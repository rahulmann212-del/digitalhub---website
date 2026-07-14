'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle2, ArrowRight, Flame, FolderOpen } from 'lucide-react';
import { categories, articles } from './blog-data';
import BlogCard from './BlogCard';

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
      {/* Categories */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
            <FolderOpen className="w-4 h-4 text-white" strokeWidth={2} />
          </div>
          <h3 className="font-bold text-slate-800">Categories</h3>
        </div>

        <ul className="space-y-1.5" role="list">
          <li>
            <button
              onClick={() => onCategoryChange('all')}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              <span>All Articles</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === 'all' ? 'bg-white/20' : 'bg-slate-100'
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
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" strokeWidth={2} />
                    {cat.name}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20' : 'bg-slate-100'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 rounded-3xl p-7 shadow-xl shadow-slate-900/20">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/15 rounded-full" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sky-500/10 rounded-full" />

        <div className="relative z-10">
          <div className="w-11 h-11 bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl flex items-center justify-center mb-5">
            <Mail className="w-5 h-5 text-blue-300" />
          </div>
          <h3 className="text-lg font-extrabold text-white mb-2">Stay in the Loop</h3>
          <p className="text-sm text-blue-100/70 leading-relaxed mb-5">
            Get our best articles on web design, SEO, and digital growth delivered
            to your inbox. No spam, ever.
          </p>

          {submitted ? (
            <div className="flex items-center gap-2.5 px-4 py-3 bg-emerald-500/15 border border-emerald-400/30 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-sm font-semibold text-emerald-300">
                You&apos;re subscribed. Welcome aboard!
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-label="Email address"
                required
                className="w-full px-4 py-3 text-sm text-white bg-white/10 border border-white/15 rounded-xl placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/40"
              />
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-slate-900 bg-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Subscribe Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <p className="text-xs text-blue-300/50 mt-4">
            Join 2,000+ business owners. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Popular posts */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-rose-500 rounded-xl flex items-center justify-center">
            <Flame className="w-4 h-4 text-white" strokeWidth={2} />
          </div>
          <h3 className="font-bold text-slate-800">Popular Posts</h3>
        </div>

        <div className="space-y-4">
          {popularPosts.map((article, i) => (
            <div key={article.id} className="flex gap-3 group">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-extrabold text-slate-300 group-hover:text-blue-500 transition-colors">
                0{i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug"
                >
                  {article.title}
                </Link>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-400">
                  <span>{article.category}</span>
                  <span>·</span>
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
