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
    <section className="relative py-16 bg-white" aria-label="Featured playbook">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold rounded-full shadow-md">
            <ChevronRight className="w-3 h-3" />
            Featured Playbook
          </span>
          <span className="text-sm text-slate-400">Lead Strategist&apos;s pick of the week</span>
        </div>

        <article className="group relative grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-slate-100 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
          {/* Visual side */}
          <div
            className="relative min-h-[280px] lg:min-h-[440px] overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${article.cover.from} 0%, ${article.cover.to} 100%)` }}
          >
            <div className="absolute inset-0 bg-grid opacity-15" />
            <div className="absolute -top-12 -right-12 w-56 h-56 bg-white/8 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-white/8 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-white/15 rounded-full" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center p-10">
              <div className="w-20 h-20 bg-white/15 backdrop-blur-sm border border-white/25 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2">
                  {article.category}
                </div>
                <div className="text-lg font-bold text-white/90 max-w-xs leading-snug">
                  {article.title}
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="flex flex-col justify-center p-8 lg:p-12 bg-white">
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-9 h-9 bg-gradient-to-br ${article.author.color} rounded-xl flex items-center justify-center text-white text-xs font-extrabold`}>
                {article.author.initials}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">{article.author.name}</div>
                <div className="text-xs text-slate-400">{article.author.role}</div>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
              {article.title}
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-7">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(article.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime} min read
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-7">
              {article.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-medium text-blue-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${article.slug}`}
              className="group/btn inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-bold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 self-start"
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