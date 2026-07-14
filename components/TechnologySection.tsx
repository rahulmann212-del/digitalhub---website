'use client';

import { ChevronRight } from 'lucide-react';

const technologies = [
  { name: 'React', category: 'Frontend', abbr: 'Re', color: 'from-cyan-400 to-blue-500' },
  { name: 'Next.js', category: 'Framework', abbr: 'Nx', color: 'from-slate-700 to-slate-900' },
  { name: 'Tailwind CSS', category: 'Styling', abbr: 'Tw', color: 'from-sky-400 to-cyan-500' },
  { name: 'Node.js', category: 'Backend', abbr: 'No', color: 'from-green-500 to-green-700' },
  { name: 'WordPress', category: 'CMS', abbr: 'Wp', color: 'from-blue-500 to-blue-700' },
  { name: 'PHP', category: 'Backend', abbr: 'Ph', color: 'from-indigo-500 to-indigo-700' },
  { name: 'MongoDB', category: 'Database', abbr: 'Mg', color: 'from-green-400 to-green-600' },
  { name: 'MySQL', category: 'Database', abbr: 'My', color: 'from-orange-500 to-blue-600' },
  { name: 'Google Analytics', category: 'Analytics', abbr: 'GA', color: 'from-yellow-500 to-orange-500' },
  { name: 'Google Ads', category: 'Marketing', abbr: 'Gd', color: 'from-blue-400 to-blue-600' },
];

export default function TechnologySection() {
  const doubled = [...technologies, ...technologies];

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
            Our Tech Stack
          </div>
          <h2
            id="tech-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Powered by{' '}
            <span className="text-gradient">Modern Technology</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            We use industry-leading technologies to build fast, secure, and
            scalable digital solutions that stand the test of time.
          </p>
        </div>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden">
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

        {/* Static grid for larger screens / accessibility */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3 p-5 bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-100 rounded-2xl card-hover"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center text-white font-extrabold shadow-md group-hover:shadow-lg transition-shadow`}
              >
                {tech.abbr}
              </div>
              <div className="text-center">
                <div className="font-bold text-slate-800 text-sm">{tech.name}</div>
                <div className="text-xs text-slate-400 mt-0.5">{tech.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
