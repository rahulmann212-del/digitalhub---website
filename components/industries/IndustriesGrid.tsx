'use client';

import { ChevronRight } from 'lucide-react';
import { industries } from './industries-data';
import IndustryCard from './IndustryCard';

export default function IndustriesGrid() {
  return (
    <section 
      className="relative py-24 bg-slate-50/50 border-t border-slate-200/80 overflow-hidden"
      aria-labelledby="industries-grid-heading"
    >
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Added for SEO and Brand Consistency) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
            <ChevronRight className="w-4 h-4 text-[#FF6600]" />
            Industry Expertise
          </div>
          <h2
            id="industries-grid-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
          >
            Sectors We{' '}
            <span className="text-[#FF6600] block mt-1">Transform</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            We deliver specialized digital architectures and performance marketing strategies engineered for the unique scaling challenges of these key industries.
          </p>
        </div>

        {/* 
          Mobile Friendly Grid: 
          - grid-cols-1 for mobile
          - lg:grid-cols-2 for tablets and desktop (prevents UI squeezing on mid-size screens)
          - Adjusted gap for better breathing room on small screens 
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}