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
    <div className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Service categories"
          className="flex md:grid md:grid-cols-3 gap-3 md:gap-4 overflow-x-auto scrollbar-none py-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleScroll(cat.id)}
              className="group flex-shrink-0 md:flex-shrink w-[75vw] sm:w-[260px] md:w-full flex flex-col items-center justify-center px-4 py-3 rounded-2xl bg-white border border-slate-200 hover:border-[#063A9A] hover:bg-blue-50/50 shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              <span className="text-sm md:text-base font-extrabold text-slate-800 group-hover:text-[#063A9A] transition-colors whitespace-nowrap">
                {cat.label}
              </span>
              <span className="text-xs font-semibold text-slate-600 group-hover:text-[#FF6600] mt-1 hidden sm:block transition-colors">
                {cat.desc}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}