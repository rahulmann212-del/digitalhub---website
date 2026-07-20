'use client';

import { useState, useEffect } from 'react';
import { categories } from './services-data';

export default function CategoryNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      // 50% screen scroll hone par trigger hoga
      const threshold = window.innerHeight * 0.5;
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    handleScrollEvent();
    
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - (isScrolled ? 90 : 130);
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`sticky top-16 md:top-20 z-40 backdrop-blur-xl border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 border-slate-200 shadow-md py-2' 
          : 'bg-white/80 border-slate-200/50 shadow-sm py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Service categories"
          className="grid grid-cols-3 gap-3 md:gap-4 w-full"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleScroll(cat.id)}
              className={`group relative overflow-hidden flex flex-col items-center justify-center text-center border transition-all duration-300 w-full ${
                isScrolled 
                  ? 'px-2 py-2 rounded-xl bg-white border-slate-200 shadow-sm' // Scrolled: Compact button layout
                  : 'px-4 py-4 rounded-2xl bg-gradient-to-br from-white via-white to-blue-50/60 border-blue-100 shadow-sm hover:shadow-md' // Expanded layout
              }`}
            >
              {/* Top Accent Line - Only when expanded */}
              <div 
                className={`absolute top-0 left-0 right-0 bg-gradient-to-r from-[#063A9A] to-[#FF6600] transition-all duration-300 ${
                  isScrolled ? 'h-0 opacity-0' : 'h-1 opacity-80 group-hover:opacity-100'
                }`} 
              />
              
              {/* Title Text */}
              <span 
                className={`font-black text-[#063A9A] group-hover:text-[#FF6600] transition-colors truncate w-full ${
                  isScrolled ? 'text-xs sm:text-sm' : 'text-xs sm:text-base'
                }`}
              >
                {cat.label}
              </span>
              
              {/* Description Text - Hidden when scrolled to save vertical space */}
              <div 
                className={`transition-all duration-300 overflow-hidden w-full ${
                  isScrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100 mt-1'
                }`}
              >
                <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-700 hidden sm:block truncate">
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