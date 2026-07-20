'use client';

import { useState, useEffect } from 'react';
import { categories } from './services-data';

export default function CategoryNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener to detect when to shrink the nav
  useEffect(() => {
    const handleScrollEvent = () => {
      // Jab screen 200px se jyada scroll ho, tab isko thin kar do
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset adjusted dynamically based on sticky header height
      const y = el.getBoundingClientRect().top + window.scrollY - (isScrolled ? 100 : 130);
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={`sticky top-16 md:top-20 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm transition-all duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Service categories"
          // Scroll hone par padding kam ho jayegi (py-5 se py-2.5)
          className={`flex md:grid md:grid-cols-3 gap-3 md:gap-4 overflow-x-auto scrollbar-none transition-all duration-300 ${
            isScrolled ? 'py-2.5' : 'py-5'
          }`}
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleScroll(cat.id)}
              // Scroll hone par card ki inner padding bhi shrink hogi
              className={`group relative overflow-hidden flex-shrink-0 md:flex-shrink w-[75vw] sm:w-[260px] md:w-full flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-white via-white to-blue-50/60 border border-blue-100 shadow-sm hover:shadow-md hover:border-[#063A9A]/30 hover:-translate-y-0.5 transition-all duration-300 text-center ${
                isScrolled ? 'px-4 py-2.5' : 'px-5 py-4'
              }`}
            >
              {/* Colorful Highlight Bar at the Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#063A9A] to-[#FF6600] opacity-80 group-hover:opacity-100 transition-opacity" />
              
              {/* Title Text */}
              <span className={`font-black text-[#063A9A] group-hover:text-[#FF6600] transition-colors whitespace-nowrap mt-0.5 ${
                isScrolled ? 'text-sm' : 'text-sm md:text-base'
              }`}>
                {cat.label}
              </span>
              
              {/* Description Text - Ye scroll hone par puri tarah GAYAB (hidden) ho jayega space bachane ke liye */}
              <div className={`transition-all duration-300 overflow-hidden ${
                isScrolled ? 'max-h-0 opacity-0 mt-0' : 'max-h-10 opacity-100 mt-1.5'
              }`}>
                <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-700 hidden sm:block">
                  {cat.desc}
                </span>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}