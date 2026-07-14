import Link from 'next/link';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface BlogCardData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  cover?: { from: string; to: string };
  icon?: LucideIcon;
}

interface BlogCardsProps {
  posts: BlogCardData[];
  columns?: 2 | 3 | 4;
  showExcerpt?: boolean;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function BlogCards({ posts, columns = 3, showExcerpt = true }: BlogCardsProps) {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {posts.map((post) => {
        const Icon = post.icon;
        return (
          <article
            key={post.id}
            className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/8 transition-all duration-500"
          >
            {/* Cover */}
            <div
              className="relative h-40 overflow-hidden flex-shrink-0"
              style={{
                background: post.cover
                  ? `linear-gradient(135deg, ${post.cover.from} 0%, ${post.cover.to} 100%)`
                  : 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
              }}
            >
              <div className="absolute inset-0 bg-grid opacity-15" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/8 rounded-full" />
              {Icon && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                {post.category}
              </span>
              <h3 className="text-base font-extrabold text-slate-900 leading-snug tracking-tight mb-2 group-hover:text-blue-700 transition-colors">
                <Link href={`/blog/${post.slug}`} className="line-clamp-2">
                  {post.title}
                </Link>
              </h3>
              {showExcerpt && (
                <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              )}
              <div className="flex items-center gap-3 text-xs text-slate-400 mt-auto mb-3">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime} min
                </span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
              >
                Read more
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
