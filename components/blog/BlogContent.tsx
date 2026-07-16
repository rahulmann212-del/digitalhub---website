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
      <section className="relative py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-grid opacity-25" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10">
            {/* Main column */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {searchQuery || activeCategory !== 'all' ? 'Search Results' : 'Latest Playbooks'}
                </h2>
              </div>

              <BlogGrid
                articles={nonFeatured}
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