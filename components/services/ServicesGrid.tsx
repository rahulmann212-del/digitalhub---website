'use client';

import { services, categories } from './services-data';
import ServiceCard from './ServiceCard';
import { ChevronRight } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section className="relative py-24 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Ambient background glows for rich separation */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {categories.map((cat, index) => {
          const catServices = services.filter((s) => s.categoryId === cat.id);
          // Alternating background for sections so they don't blend together as "all white"
          const isEven = index % 2 === 0;

          return (
            <div 
              key={cat.id} 
              id={cat.id}
              className={`p-6 sm:p-10 rounded-3xl border transition-all duration-300 ${
                isEven 
                  ? 'bg-white border-slate-200 shadow-sm' 
                  : 'bg-slate-100/80 border-slate-300/60 shadow-inner'
              }`}
            >
              {/* Category heading */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-4 shadow-sm">
                    <ChevronRight className="w-4 h-4 text-[#FF6600]" />
                    {cat.label}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#063A9A] tracking-tight leading-tight">
                    {cat.label}
                  </h2>
                  <p className="mt-2 text-slate-700 text-sm sm:text-base font-medium max-w-2xl">{cat.desc}</p>
                </div>
                <span className="text-xs sm:text-sm text-slate-600 font-bold bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm flex-shrink-0">
                  {catServices.length} service{catServices.length !== 1 ? 's' : ''} available
                </span>
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-gradient-to-r from-[#063A9A]/30 via-[#FF6600]/40 to-transparent rounded-full mb-10" />

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