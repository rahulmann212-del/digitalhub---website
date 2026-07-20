'use client';

import { categories } from './services-data';

export default function CategoryNav() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Adjusted offset to account for the sticky header height
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Service categories"
          className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto scrollbar-none py-5"
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleScroll(cat.id)}
              className="group relative overflow-hidden flex-shrink-0 md:flex-shrink w-[75vw] sm:w-[260px] md:w-full flex flex-col items-center justify-center px-5 py-4 rounded-2xl bg-gradient-to-br from-white via-white to-blue-50/60 border border-blue-100 shadow-sm hover:shadow-md hover:border-[#063A9A]/30 hover:-translate-y-0.5 transition-all duration-300 text-center"
            >
              {/* Colorful Highlight Bar at the Top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#063A9A] to-[#FF6600] opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <span className="text-sm md:text-base font-black text-[#063A9A] group-hover:text-[#FF6600] transition-colors whitespace-nowrap mt-1">
                {cat.label}
              </span>
              <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-700 mt-1.5 hidden sm:block transition-colors">
                {cat.desc}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}