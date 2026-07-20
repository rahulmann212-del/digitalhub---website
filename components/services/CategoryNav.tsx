'use client';

import { useState, useEffect } from 'react';
import { categories } from './services-data';

export default function CategoryNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      // Jab user screen ka 50% (half height) scroll kar lega tab trigger hoga
      const threshold = window.innerHeight * 0.5;
      
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    // Initial check on load
    handleScrollEvent();
    
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Scroll offset logic adjusted so it lands perfectly on the section
      const y = el.getBoundingClientRect().top + window.scrollY - (isScrolled ? 90 : 140);
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`sticky top-16 md:top-20 z-40 backdrop-blur-xl border-b transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 border-slate-200 shadow-md py-2.5' 
          : 'bg-white/80 border-slate-200/50 shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Service categories"
          className={`flex items-center overflow-x-auto scrollbar-none transition-all duration-500 ease-in-out ${
            isScrolled 
              ? 'gap-3 justify-start md:justify-center' // Centered pill buttons when scrolled
              : 'gap-4 justify-start md:grid md:grid-cols-3' // Full grid when expanded
          }`}
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleScroll(cat.id)}
              className={`group relative overflow-hidden flex flex-col items-center justify-center transition-all duration-500 ease-in-out flex-shrink-0 text-center border hover:shadow-md hover:-translate-y-0.5 hover:border-[#063A9A]/30 ${
                isScrolled 
                  ? 'w-auto px-6 py-2.5 rounded-full bg-white border-slate-200 shadow-sm' // Compact Pill Button Mode
                  : 'w-[75vw] sm:w-[280px] md:w-full px-5 py-5 rounded-[1.5rem] bg-gradient-to-br from-white via-white to-blue-50/60 border-blue-100 shadow-sm' // Expanded Card Mode
              }`}
            >
              {/* Highlight Bar - Only visible in expanded card mode */}
              <div 
                className={`absolute top-0 left-0 right-0 bg-gradient-to-r from-[#063A9A] to-[#FF6600] opacity-80 group-hover:opacity-100 transition-all duration-500 ${
                  isScrolled ? 'h-0' : 'h-1.5'
                }`} 
              />
              
              {/* Title - Deep Blue to Orange on Hover */}
              <span 
                className={`font-black text-[#063A9A] group-hover:text-[#FF6600] transition-colors whitespace-nowrap ${
                  isScrolled ? 'text-sm' : 'text-sm md:text-base mt-1.5'
                }`}
              >
                {cat.label}
              </span>
              
              {/* Description - Hides smoothly without squishing the box */}
              <div 
                className={`transition-all duration-500 overflow-hidden flex justify-center w-full ${
                  isScrolled ? 'max-h-0 opacity-0 mt-0' : 'max-h-20 opacity-100 mt-1.5'
                }`}
              >
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