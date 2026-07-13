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
    <div className="sticky top-16 md:top-20 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm shadow-blue-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Service categories"
          className="flex items-center gap-1 overflow-x-auto scrollbar-none py-3"
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleScroll(cat.id)}
              className="group flex-shrink-0 flex flex-col items-start px-4 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200 text-left"
            >
              <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors whitespace-nowrap">
                {cat.label}
              </span>
              <span className="text-xs text-slate-400 whitespace-nowrap hidden sm:block">
                {cat.desc}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
