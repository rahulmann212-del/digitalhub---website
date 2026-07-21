'use client';

import { useState } from 'react';
import BlogHero from '@/components/blog/BlogHero';
import FeaturedArticle from '@/components/blog/FeaturedArticle';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { articles, categories } from '@/components/blog/blog-data';

export default function BlogContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const featured = articles.find((a) => a.featured) ?? articles[0];
  const nonFeatured = articles.filter((a) => a.id !== featured.id);

  const handleSearch = (q: string) => {
    setSearchQuery(q);
  };

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
  };

  // LOGICAL FIX: Agar search active hai ya category selected hai, toh SARE articles grid me bhejo.
  // Nahi toh sirf non-featured bhejo (kyunki featured upar alag se dikh raha hoga).
  const gridArticles = (searchQuery || activeCategory !== 'all') ? articles : nonFeatured;

  return (
    <>
      <BlogHero
        onSearch={handleSearch}
        searchQuery={searchQuery}
        totalArticles={articles.length}
        totalCategories={categories.length}
      />

      {/* Featured playbook — only visible when no filter is applied */}
      {!searchQuery && activeCategory === 'all' && (
        <FeaturedArticle article={featured} />
      )}

      {/* Main content + sidebar */}
      <section className="relative py-20 bg-slate-50/50 border-t border-slate-200/80">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Layout Grid: Main Content (Left) + Sidebar (Right) */}
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-14">
            
            {/* Main column */}
            <div>
              {/* Dynamic Heading styled with Brand Colors */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-7 bg-gradient-to-b from-[#FF6600] to-orange-500 rounded-full shadow-sm" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#063A9A] tracking-tight">
                  {searchQuery || activeCategory !== 'all' ? 'Search Results' : 'Latest Playbooks'}
                </h2>
              </div>

              <BlogGrid
                articles={gridArticles} // <-- FIX: Yahan 'nonFeatured' ki jagah 'gridArticles' pass kiya gaya hai
                searchQuery={searchQuery}
                activeCategory={activeCategory}
              />
            </div>

            {/* Sidebar */}
            <BlogSidebar
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </div>
      </section>
    </>
  );
}