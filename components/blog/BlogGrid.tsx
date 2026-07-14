'use client';

import { useState, useMemo } from 'react';
import BlogCard from './BlogCard';
import { ChevronLeft, ChevronRight, SearchX } from 'lucide-react';
import type { Article } from './blog-data';
import { postsPerPage } from './blog-data';

interface BlogGridProps {
  articles: Article[];
  searchQuery: string;
  activeCategory: string;
}

export default function BlogGrid({ articles, searchQuery, activeCategory }: BlogGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    let list = articles;
    if (activeCategory !== 'all') {
      list = list.filter((a) => a.categoryId === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q)) ||
          a.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [articles, searchQuery, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / postsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * postsPerPage;
  const visible = filtered.slice(start, start + postsPerPage);

  const goToPage = (p: number) => {
    setCurrentPage(p);
    const el = document.getElementById('blog-grid');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Reset page when filters change
  useMemo(() => setCurrentPage(1), [searchQuery, activeCategory]);

  if (filtered.length === 0) {
    return (
      <div id="blog-grid" className="text-center py-20">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-3xl mb-6">
          <SearchX className="w-7 h-7 text-slate-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">No articles found</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          {searchQuery
            ? `Nothing matched "${searchQuery}". Try a different keyword or browse a category.`
            : 'No articles in this category yet. Check back soon.'}
        </p>
      </div>
    );
  }

  return (
    <div id="blog-grid">
      {/* Result count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-slate-500">
          Showing <span className="font-bold text-slate-800">{visible.length}</span> of{' '}
          <span className="font-bold text-slate-800">{filtered.length}</span> articles
          {searchQuery && (
            <>
              {' '}for <span className="font-bold text-blue-600">&ldquo;{searchQuery}&rdquo;</span>
            </>
          )}
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          aria-label="Blog pagination"
          className="flex items-center justify-center gap-2 mt-12"
        >
          <button
            onClick={() => goToPage(safePage - 1)}
            disabled={safePage === 1}
            className="inline-flex items-center gap-1 px-4 py-2.5 text-sm font-semibold rounded-xl border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700 hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-slate-200 transition-all duration-200"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
            Prev
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                aria-current={page === safePage ? 'page' : undefined}
                className={`w-10 h-10 text-sm font-bold rounded-xl transition-all duration-200 ${
                  page === safePage
                    ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-200 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => goToPage(safePage + 1)}
            disabled={safePage === totalPages}
            className="inline-flex items-center gap-1 px-4 py-2.5 text-sm font-semibold rounded-xl border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700 hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-slate-200 transition-all duration-200"
            aria-label="Next page"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </nav>
      )}
    </div>
  );
}
