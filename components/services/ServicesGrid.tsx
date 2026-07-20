'use client';

import { services, categories } from './services-data';
import ServiceCard from './ServiceCard';

export default function ServicesGrid() {
  return (
    <section className="relative py-24 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Ambient background glows - Made subtle so they don't overpower the cards */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {categories.map((cat, index) => {
          const catServices = services.filter((s) => s.categoryId === cat.id);
          
          // Professional Alternate Styling: Clean White vs Subtle Premium Blue Tint
          const isEven = index % 2 === 0;

          return (
            <div 
              key={cat.id} 
              id={cat.id}
              className={`p-6 sm:p-10 rounded-[2.5rem] border transition-all duration-300 ${
                isEven 
                  ? 'bg-white border-slate-200 shadow-sm' 
                  : 'bg-gradient-to-b from-blue-50/50 to-white border-blue-100/80 shadow-sm'
              }`}
            >
              {/* Category heading */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#063A9A] tracking-tight leading-tight">
                    {cat.label}
                  </h2>
                  <p className="mt-2.5 text-slate-600 text-sm sm:text-base font-medium max-w-2xl">
                    {cat.desc}
                  </p>
                </div>
                {/* Service count pill - Clean and matching brand colors */}
                <span className="text-xs sm:text-sm text-[#063A9A] font-bold bg-white px-4 py-2 rounded-xl border border-blue-100 shadow-sm flex-shrink-0">
                  {catServices.length} service{catServices.length !== 1 ? 's' : ''} available
                </span>
              </div>

              {/* Separator - Sharp and minimal */}
              <div className="w-full h-px bg-gradient-to-r from-blue-200 via-orange-200 to-transparent mb-10" />

              {/* Cards grid */}
              <div
                className={`grid gap-6 ${
                  catServices.length === 1
                    ? 'grid-cols-1 max-w-2xl'
                    : catServices.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {catServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}