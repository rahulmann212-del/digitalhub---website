'use client';

import { useState, useEffect } from 'react';
import { categories } from './services-data';

export default function CategoryNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      // Screen ke 40% scroll hone par shrink effect trigger hoga
      const threshold = window.innerHeight * 0.4;
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
      className={`sticky top-16 md:top-[76px] lg:top-20 z-40 backdrop-blur-xl border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 border-slate-200 shadow-md py-3' // Proper vertical spacing when scrolled
          : 'bg-white/80 border-slate-200/50 shadow-sm py-5' // Larger spacing when expanded
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Service categories"
          className="grid grid-cols-3 gap-3 md:gap-5 w-full items-center"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleScroll(cat.id)}
              // overflow-hidden prevents anything from bleeding out, fixed heights prevent squishing
              className={`group relative flex flex-col items-center justify-center text-center border transition-all duration-300 w-full overflow-hidden ${
                isScrolled 
                  ? 'rounded-xl bg-white border-slate-200 shadow-sm h-12' // FIXED HEIGHT for scrolled state (No clipping!)
                  : 'rounded-2xl bg-gradient-to-br from-white via-white to-blue-50/60 border-blue-100 shadow-sm hover:shadow-md h-[90px] md:h-[100px]' // FIXED HEIGHT for expanded state
              }`}
            >
              {/* Top Colorful Accent Line */}
              <div 
                className={`absolute top-0 left-0 right-0 bg-gradient-to-r from-[#063A9A] to-[#FF6600] transition-all duration-300 ${
                  isScrolled ? 'h-0 opacity-0' : 'h-1.5 opacity-80 group-hover:opacity-100'
                }`} 
              />
              
              {/* Main Title Text */}
              <span 
                className={`font-black text-[#063A9A] group-hover:text-[#FF6600] transition-all duration-300 w-full px-2 ${
                  isScrolled ? 'text-sm translate-y-0' : 'text-sm md:text-base'
                }`}
              >
                {cat.label}
              </span>
              
              {/* Description Text - Uses Absolute positioning when hiding to keep title centered perfectly */}
              <div 
                className={`transition-all duration-300 w-full px-4 ${
                  isScrolled 
                    ? 'absolute opacity-0 pointer-events-none translate-y-4' // Drops down and fades out invisibly
                    : 'relative opacity-100 translate-y-0 mt-1.5' // Stays in place when expanded
                }`}
              >
                <span className="text-[11px] md:text-xs font-semibold text-slate-500 group-hover:text-slate-700 hidden sm:block line-clamp-1">
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