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
      <div id="blog-grid" className="text-center py-24 px-4 bg-white border border-slate-200/80 rounded-3xl shadow-sm">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-50 border border-orange-100 rounded-3xl mb-6 shadow-sm">
          <SearchX className="w-10 h-10 text-[#FF6600]" strokeWidth={2} />
        </div>
        <h3 className="text-2xl font-extrabold text-[#063A9A] mb-3">No Playbooks Found</h3>
        <p className="text-base text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
          {searchQuery
            ? (
              <>
                Nothing matched <span className="text-[#FF6600] font-bold">"{searchQuery}"</span>. Try a different keyword or explore our core growth categories.
              </>
            )
            : 'No playbooks in this category yet. Our strategists are actively engineering new insights.'}
        </p>
      </div>
    );
  }

  return (
    <div id="blog-grid">
      {/* Result count */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/80">
        <p className="text-sm sm:text-base font-medium text-slate-600">
          Showing <span className="font-extrabold text-[#063A9A]">{visible.length}</span> of{' '}
          <span className="font-extrabold text-[#063A9A]">{filtered.length}</span> playbooks
          {searchQuery && (
            <>
              {' '}for <span className="font-extrabold text-[#FF6600]">&ldquo;{searchQuery}&rdquo;</span>
            </>
          )}
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {visible.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          aria-label="Playbook pagination"
          className="flex items-center justify-center gap-2.5 mt-16"
        >
          <button
            onClick={() => goToPage(safePage - 1)}
            disabled={safePage === 1}
            className="group inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-bold rounded-xl border border-slate-200 bg-white text-slate-600 hover:border-[#063A9A]/30 hover:text-[#FF6600] hover:bg-orange-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-slate-200 transition-all duration-300 shadow-sm"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Prev
          </button>

          {/* FIXED ERROR HERE: Changed 'flex items-center gap-1.5 hidden sm:flex' to 'hidden sm:flex items-center gap-1.5' */}
          <div className="hidden sm:flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                aria-current={page === safePage ? 'page' : undefined}
                className={`w-11 h-11 text-sm font-extrabold rounded-xl transition-all duration-300 shadow-sm flex items-center justify-center ${
                  page === safePage
                    ? 'bg-gradient-to-br from-[#063A9A] to-blue-700 !text-white shadow-md shadow-blue-900/20 border border-[#063A9A]'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-[#063A9A]/30 hover:text-[#FF6600] hover:bg-orange-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          {/* Mobile indicator for pages when hidden */}
          <div className="sm:hidden px-4 py-2.5 text-sm font-bold text-[#063A9A] bg-blue-50 rounded-xl border border-blue-100">
            {safePage} / {totalPages}
          </div>

          <button
            onClick={() => goToPage(safePage + 1)}
            disabled={safePage === totalPages}
            className="group inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-bold rounded-xl border border-slate-200 bg-white text-slate-600 hover:border-[#063A9A]/30 hover:text-[#FF6600] hover:bg-orange-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-slate-200 transition-all duration-300 shadow-sm"
            aria-label="Next page"
          >
            Next
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </nav>
      )}
    </div>
  );
}