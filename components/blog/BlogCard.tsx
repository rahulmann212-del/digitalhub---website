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
      className={`group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 ${
        compact ? 'flex-row' : ''
      }`}
    >
      {/* Visual */}
      <div
        className={`relative overflow-hidden flex-shrink-0 ${
          compact ? 'w-28 h-28' : 'h-40'
        }`}
        style={{ background: `linear-gradient(135deg, ${article.cover.from} 0%, ${article.cover.to} 100%)` }}
      >
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/8 rounded-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ${
            compact ? 'w-12 h-12' : 'w-14 h-14'
          }`}>
            <Icon className={`text-white ${compact ? 'w-5 h-5' : 'w-6 h-6'}`} strokeWidth={1.8} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 ${compact ? 'p-4' : 'p-5'}`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            {article.category}
          </span>
        </div>

        <h3
          className={`font-extrabold text-slate-900 leading-snug tracking-tight mb-2 group-hover:text-blue-700 transition-colors ${
            compact ? 'text-sm' : 'text-base'
          }`}
        >
          <Link href={`/blog/${article.slug}`} className="line-clamp-2">
            {article.title}
          </Link>
        </h3>

        {!compact && (
          <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
            {article.excerpt}
          </p>
        )}

        <div className={`flex items-center gap-3 text-xs text-slate-400 mt-auto ${compact ? 'mb-0' : 'mb-3'}`}>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(article.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime} min
          </span>
        </div>

        {!compact && (
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors mt-auto"
          >
            Access Playbook
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </article>
  );
}