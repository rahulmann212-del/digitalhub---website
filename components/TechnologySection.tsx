'use client';

import { ChevronRight, Megaphone, MonitorSmartphone } from 'lucide-react';

// Combined for the Marquee
const technologies = [
  { name: 'Google Ads', category: 'Performance', abbr: 'Ga', color: 'from-blue-500 to-blue-600' },
  { name: 'Meta Ads', category: 'Social', abbr: 'Me', color: 'from-blue-600 to-indigo-600' },
  { name: 'Shopify', category: 'E-Commerce', abbr: 'Sh', color: 'from-green-400 to-green-600' },
  { name: 'GA4 & GTM', category: 'Tracking', abbr: 'G4', color: 'from-yellow-500 to-orange-500' },
  { name: 'Semrush', category: 'SEO', abbr: 'Se', color: 'from-orange-500 to-red-500' },
  { name: 'Next.js', category: 'Framework', abbr: 'Nx', color: 'from-slate-700 to-slate-900' },
  { name: 'React', category: 'Frontend', abbr: 'Re', color: 'from-cyan-400 to-blue-500' },
  { name: 'Klaviyo', category: 'Email', abbr: 'Kl', color: 'from-emerald-500 to-teal-600' },
  { name: 'WooCommerce', category: 'E-Commerce', abbr: 'Wo', color: 'from-purple-500 to-purple-700' },
];

// Marketing Specific Tools
const marketingTools = [
  { name: 'Google Ads', category: 'PPC / Search', abbr: 'Ga', color: 'from-blue-500 to-blue-600' },
  { name: 'Meta Ads', category: 'Paid Social', abbr: 'Me', color: 'from-blue-600 to-indigo-600' },
  { name: 'Semrush', category: 'Technical SEO', abbr: 'Se', color: 'from-orange-500 to-red-500' },
  { name: 'Ahrefs', category: 'Organic Growth', abbr: 'Ah', color: 'from-orange-400 to-orange-500' },
  { name: 'GA4 & GTM', category: 'Analytics', abbr: 'G4', color: 'from-yellow-500 to-orange-500' },
  { name: 'Klaviyo', category: 'Retention', abbr: 'Kl', color: 'from-emerald-500 to-teal-600' },
];

// Development Specific Tools
const devTools = [
  { name: 'Shopify', category: 'D2C Storefront', abbr: 'Sh', color: 'from-green-400 to-green-600' },
  { name: 'WooCommerce', category: 'E-Commerce', abbr: 'Wo', color: 'from-purple-500 to-purple-700' },
  { name: 'Next.js', category: 'React Framework', abbr: 'Nx', color: 'from-slate-700 to-slate-900' },
  { name: 'React', category: 'Modern UI', abbr: 'Re', color: 'from-cyan-400 to-blue-500' },
  { name: 'Tailwind', category: 'Styling', abbr: 'Tw', color: 'from-sky-400 to-cyan-500' },
  { name: 'Node.js', category: 'Backend Dev', abbr: 'No', color: 'from-green-500 to-green-700' },
];

export default function TechnologySection() {
  const doubled = [...technologies, ...technologies];

  return (
    <section
      id="tools"
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="tech-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6 shadow-sm">
            <ChevronRight className="w-4 h-4" />
            Our Growth Arsenal
          </div>
          <h2
            id="tech-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Powered by{' '}
            <span className="text-gradient">Industry-Leading Tools</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            We leverage enterprise-grade marketing platforms, advanced analytics, and scalable development frameworks to drive maximum ROI.
          </p>
        </div>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden mb-20">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-4 animate-marquee w-max">
            {doubled.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0 shadow-sm`}
                >
                  {tech.abbr}
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm whitespace-nowrap">
                    {tech.name}
                  </div>
                  <div className="text-xs text-slate-400">{tech.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Tech Stacks */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Digital Marketing Box */}
          <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Megaphone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Performance & Marketing</h3>
                <p className="text-sm text-slate-500 mt-1">Tools we use to scale revenue & ROI.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {marketingTools.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 p-4 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 transition-colors">
                  <div className={`w-10 h-10 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
                    {tech.abbr}
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-slate-800 text-xs">{tech.name}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-wide">{tech.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Web Development Box */}
          <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center">
                <MonitorSmartphone className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">E-Commerce & Development</h3>
                <p className="text-sm text-slate-500 mt-1">Technologies for high-converting stores.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {devTools.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 p-4 bg-white border border-slate-100 rounded-2xl hover:border-sky-200 transition-colors">
                  <div className={`w-10 h-10 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
                    {tech.abbr}
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-slate-800 text-xs">{tech.name}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-wide">{tech.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}