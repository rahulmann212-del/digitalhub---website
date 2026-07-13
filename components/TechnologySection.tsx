'use client';

import { ChevronRight, TrendingUp, Code2 } from 'lucide-react';

// Marketing & SEO Tools for Marquee and Left Column
const marketingTools = [
  { name: 'Google Ads', category: 'PPC & Search', abbr: 'Ga', color: 'from-blue-400 to-blue-600' },
  { name: 'Meta Ads', category: 'Social Ads', abbr: 'Me', color: 'from-blue-600 to-indigo-600' },
  { name: 'Semrush', category: 'SEO Analytics', abbr: 'Se', color: 'from-orange-400 to-orange-600' },
  { name: 'Ahrefs', category: 'SEO Backlinks', abbr: 'Ah', color: 'from-blue-500 to-blue-700' },
  { name: 'Shopify', category: 'D2C Commerce', abbr: 'Sh', color: 'from-green-400 to-green-600' },
  { name: 'Klaviyo', category: 'Email Marketing', abbr: 'Kl', color: 'from-teal-400 to-teal-600' },
  { name: 'GA4', category: 'Data Analytics', abbr: 'G4', color: 'from-yellow-400 to-yellow-600' },
  { name: 'TikTok Ads', category: 'Video Marketing', abbr: 'Tk', color: 'from-slate-700 to-slate-900' },
];

// Web Development Tech for Right Column
const developmentTech = [
  { name: 'React', category: 'Frontend', abbr: 'Re', color: 'from-cyan-400 to-blue-500' },
  { name: 'Next.js', category: 'Framework', abbr: 'Nx', color: 'from-slate-700 to-slate-900' },
  { name: 'Tailwind', category: 'Styling', abbr: 'Tw', color: 'from-sky-400 to-cyan-500' },
  { name: 'Node.js', category: 'Backend', abbr: 'No', color: 'from-green-500 to-green-700' },
  { name: 'WordPress', category: 'CMS', abbr: 'Wp', color: 'from-blue-500 to-blue-700' },
  { name: 'MongoDB', category: 'Database', abbr: 'Mg', color: 'from-green-400 to-green-600' },
  { name: 'AWS', category: 'Cloud Hosting', abbr: 'Aw', color: 'from-orange-400 to-yellow-500' },
  { name: 'PHP', category: 'Backend', abbr: 'Ph', color: 'from-indigo-500 to-indigo-700' },
];

export default function TechnologySection() {
  const doubledMarketing = [...marketingTools, ...marketingTools, ...marketingTools];

  return (
    <section
      id="industries"
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="tech-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            Our Arsenal
          </div>
          <h2
            id="tech-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Tools & Tech That{' '}
            <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            We leverage industry-leading marketing platforms and modern development frameworks to scale your business efficiently.
          </p>
        </div>

        {/* Scrolling marquee - Now purely Digital Marketing & SEO */}
        <div className="relative overflow-hidden mb-20">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-4 animate-marquee w-max">
            {doubledMarketing.map((tech, index) => (
              <div
                key={`marquee-${tech.name}-${index}`}
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

        {/* 2-Column Split Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Column 1: Marketing & SEO Stack */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Growth & Marketing Stack</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {marketingTools.slice(0, 6).map((tech) => (
                    <div key={`grid-${tech.name}`} className="flex flex-col items-center gap-2 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <div className={`w-10 h-10 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white font-bold text-sm`}>
                        {tech.abbr}
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-slate-800 text-xs">{tech.name}</div>
                        <div className="text-[10px] text-slate-500">{tech.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          {/* Column 2: Web Development Stack */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/50 rounded-full blur-3xl" />
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Development Stack</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {developmentTech.slice(0, 6).map((tech) => (
                    <div key={`grid-${tech.name}`} className="flex flex-col items-center gap-2 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <div className={`w-10 h-10 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white font-bold text-sm`}>
                        {tech.abbr}
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-slate-800 text-xs">{tech.name}</div>
                        <div className="text-[10px] text-slate-500">{tech.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}