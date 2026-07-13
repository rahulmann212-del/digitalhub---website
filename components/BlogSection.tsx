'use client';

import { Clock, ChevronRight, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    category: 'Web Development',
    readTime: '5 min read',
    title: '10 Web Design Trends That Will Dominate in 2025',
    excerpt:
      'Explore the cutting-edge design trends shaping modern websites — from micro-animations and glassmorphism to AI-driven personalization and immersive scroll experiences.',
    gradient: 'from-blue-600 to-sky-500',
    pattern: 'circles',
  },
  {
    category: 'SEO & Growth',
    readTime: '7 min read',
    title: 'The Complete Guide to Technical SEO for Business Websites',
    excerpt:
      'Master the technical foundations of SEO — Core Web Vitals, schema markup, site architecture, and crawlability — to achieve sustainable organic growth.',
    gradient: 'from-sky-500 to-cyan-500',
    pattern: 'grid',
  },
  {
    category: 'Digital Marketing',
    readTime: '6 min read',
    title: 'How to Build a High-Converting Landing Page in 2025',
    excerpt:
      'A step-by-step breakdown of the psychological principles, design decisions, and technical elements that turn landing page visitors into paying customers.',
    gradient: 'from-blue-700 to-blue-500',
    pattern: 'dots',
  },
];

function BlogCardIllustration({
  gradient,
  pattern,
  title,
}: {
  gradient: string;
  pattern: string;
  title: string;
}) {
  return (
    <div
      className={`relative w-full h-48 bg-gradient-to-br ${gradient} rounded-t-3xl overflow-hidden flex items-center justify-center`}
      role="img"
      aria-label={`Illustration for article: ${title}`}
    >
      <div className="absolute inset-0 bg-grid opacity-30" />

      {pattern === 'circles' && (
        <>
          <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-white/20 rounded-full" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 rounded-full" />
        </>
      )}
      {pattern === 'grid' && (
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 p-4 opacity-20">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className={`bg-white rounded-sm ${i % 3 === 0 ? 'opacity-80' : 'opacity-40'}`}
            />
          ))}
        </div>
      )}
      {pattern === 'dots' && (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
      )}

      {/* Center icon element */}
      <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
        <div className="w-8 h-8 bg-white/60 rounded-lg" />
      </div>
    </div>
  );
}

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      aria-labelledby="blog-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
              <ChevronRight className="w-4 h-4" />
              Insights & Resources
            </div>
            <h2
              id="blog-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              Stay Ahead with{' '}
              <span className="text-gradient">Expert Insights</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
              Practical guides, industry trends, and actionable strategies to
              help your business thrive online.
            </p>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap group"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group bg-white border border-slate-100 rounded-3xl overflow-hidden card-hover shadow-sm"
            >
              <BlogCardIllustration
                gradient={post.gradient}
                pattern={post.pattern}
                title={post.title}
              />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-slate-800 text-base leading-snug mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-5">
                  {post.excerpt}
                </p>

                <a
                  href="#blog"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:gap-2.5 transition-all duration-200 group/link"
                  aria-label={`Read article: ${post.title}`}
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
