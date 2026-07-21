'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Calendar, ChevronRight } from 'lucide-react';
import type { Article } from './blog-data';

interface FeaturedArticleProps {
  article: Article;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  const Icon = article.icon;

  return (
    <section className="relative py-16 bg-slate-50/30" aria-label="Featured playbook">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-[#FF6600] to-orange-500 !text-white text-xs font-extrabold rounded-full shadow-md shadow-orange-500/20">
            <ChevronRight className="w-3.5 h-3.5" strokeWidth={3} />
            Featured Playbook
          </span>
          <span className="text-sm font-bold text-slate-400">
            Lead Strategist&apos;s pick of the week
          </span>
        </div>

        <article className="group relative grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-slate-200/80 shadow-xl shadow-[#063A9A]/5 hover:shadow-2xl hover:shadow-[#063A9A]/10 transition-all duration-500 bg-white">
          
          {/* ── Left Side: Dark Visual Block ── */}
          <div
            className="relative min-h-[300px] lg:min-h-[440px] overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${article.cover.from} 0%, ${article.cover.to} 100%)` }}
          >
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-56 h-56 bg-white/10 rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-black/10 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/15 rounded-full pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center p-10 text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                {/* FIXED: !text-white for icon visibility on dark gradient */}
                <Icon className="w-10 h-10 !text-white drop-shadow-md" strokeWidth={2} />
              </div>
              
              <div>
                {/* FIXED: !text-white/90 for category visibility */}
                <div className="text-xs font-extrabold !text-white/90 uppercase tracking-widest mb-3 drop-shadow-sm">
                  {article.category}
                </div>
                {/* FIXED: !text-white for title visibility on dark gradient */}
                <div className="text-xl lg:text-2xl font-black !text-white max-w-sm leading-snug drop-shadow-md">
                  {article.title}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Side: Content Block ── */}
          <div className="flex flex-col justify-center p-8 lg:p-12 bg-white">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-10 h-10 bg-gradient-to-br ${article.author.color} rounded-xl flex items-center justify-center !text-white text-sm font-black shadow-sm`}>
                {article.author.initials}
              </div>
              <div>
                <div className="text-sm font-extrabold text-[#063A9A]">{article.author.name}</div>
                <div className="text-xs font-semibold text-slate-400 mt-0.5">{article.author.role}</div>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#063A9A] leading-tight tracking-tight mb-4 group-hover:text-[#FF6600] transition-colors">
              <Link href={`/blog/${article.slug}`}>
                {article.title}
              </Link>
            </h2>

            <p className="text-slate-600 font-medium leading-relaxed mb-8">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-5 text-xs font-bold text-slate-400 mb-8">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-300" />
                {formatDate(article.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-300" />
                {article.readTime} min read
              </span>
            </div>

            {/* Tags matching brand colors */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {article.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 bg-orange-50 border border-orange-100 rounded-lg text-xs font-extrabold text-[#FF6600]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${article.slug}`}
              className="group/btn inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#FF6600] to-orange-500 !text-white text-sm font-extrabold rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 self-start"
              aria-label={`Read more about ${article.title}`}
            >
              Access Full Playbook
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}