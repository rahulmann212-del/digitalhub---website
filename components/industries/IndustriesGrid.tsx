import { industries } from './industries-data';
import IndustryCard from './IndustryCard';

export default function IndustriesGrid() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 bg-grid opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
