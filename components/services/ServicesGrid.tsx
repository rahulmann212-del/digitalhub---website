import { services, categories } from './services-data';
import ServiceCard from './ServiceCard';
import { ChevronRight } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {categories.map((cat) => {
          const catServices = services.filter((s) => s.categoryId === cat.id);
          return (
            <div key={cat.id} id={cat.id}>
              {/* Category heading */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-4">
                    <ChevronRight className="w-4 h-4" />
                    {cat.label}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {cat.label}
                  </h2>
                  <p className="mt-2 text-slate-500 text-sm">{cat.desc}</p>
                </div>
                <span className="text-sm text-slate-400 font-medium flex-shrink-0">
                  {catServices.length} service{catServices.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-gradient-to-r from-blue-200 via-sky-200 to-transparent rounded-full mb-10" />

              {/* Cards grid */}
              <div
                className={`grid gap-6 ${
                  catServices.length === 1
                    ? 'grid-cols-1 max-w-2xl'
                    : catServices.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-2'
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
