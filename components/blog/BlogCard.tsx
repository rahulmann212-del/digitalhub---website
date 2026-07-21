'use client';

import Link from 'next/link';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import type { Article } from './blog-data';

interface BlogCardProps {
  article: Article;
  compact?: boolean;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function BlogCard({ article, compact = false }: BlogCardProps) {
  const Icon = article.icon;

  return (
    <article
      className={`group flex flex-col bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
        compact ? 'flex-row' : ''
      }`}
    >
      {/* Visual / Thumbnail Area */}
      <div
        className={`relative overflow-hidden flex-shrink-0 ${
          compact ? 'w-32 h-32' : 'h-48'
        }`}
        style={{ background: `linear-gradient(135deg, ${article.cover.from} 0%, ${article.cover.to} 100%)` }}
      >
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm ${
            compact ? 'w-12 h-12' : 'w-16 h-16'
          }`}>
            {/* FIXED: Added !text-white to ensure icon is always visible over dark gradients */}
            <Icon className={`!text-white ${compact ? 'w-5 h-5' : 'w-7 h-7'}`} strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className={`flex flex-col flex-1 ${compact ? 'p-5' : 'p-6'}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-extrabold text-[#FF6600] uppercase tracking-wider bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-100">
            {article.category}
          </span>
        </div>

        <h3
          className={`font-extrabold text-[#063A9A] leading-snug tracking-tight mb-3 group-hover:text-[#FF6600] transition-colors ${
            compact ? 'text-base' : 'text-xl'
          }`}
        >
          <Link href={`/blog/${article.slug}`} className="line-clamp-2">
            {article.title}
          </Link>
        </h3>

        {!compact && (
          <p className="text-sm text-slate-600 font-medium leading-relaxed mb-5 line-clamp-3">
            {article.excerpt}
          </p>
        )}

        <div className={`flex items-center gap-4 text-xs font-bold text-slate-400 mt-auto ${compact ? 'mb-0' : 'mb-4'}`}>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {formatDate(article.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {article.readTime} min
          </span>
        </div>

        {!compact && (
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#063A9A] group-hover:text-[#FF6600] transition-colors mt-auto w-fit"
          >
            Access Playbook
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </article>
  );
}