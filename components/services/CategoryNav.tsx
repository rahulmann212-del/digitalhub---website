'use client';

import { categories } from './services-data';

export default function CategoryNav() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm shadow-blue-500/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Service categories"
          className="flex md:grid md:grid-cols-3 gap-3 overflow-x-auto scrollbar-none py-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleScroll(cat.id)}
              className="group flex-shrink-0 md:flex-shrink w-[75vw] sm:w-[260px] md:w-full flex flex-col items-center justify-center px-4 py-3 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              <span className="text-sm md:text-base font-bold text-slate-700 group-hover:text-blue-700 transition-colors whitespace-nowrap">
                {cat.label}
              </span>
              <span className="text-xs font-medium text-slate-500 group-hover:text-blue-600/80 mt-1 hidden sm:block transition-colors">
                {cat.desc}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}