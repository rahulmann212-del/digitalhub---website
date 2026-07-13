'use client';

import { ChevronRight } from 'lucide-react';

const techCategories = [
  {
    label: 'Frontend',
    color: 'from-blue-500 to-sky-400',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    techs: [
      { name: 'React', abbr: 'Re', desc: 'UI Library', color: 'from-cyan-400 to-blue-500' },
      { name: 'Next.js', abbr: 'Nx', desc: 'Framework', color: 'from-slate-700 to-slate-900' },
      { name: 'Tailwind CSS', abbr: 'Tw', desc: 'Styling', color: 'from-sky-400 to-cyan-500' },
      { name: 'TypeScript', abbr: 'Ts', desc: 'Language', color: 'from-blue-600 to-blue-700' },
    ],
  },
  {
    label: 'Backend & CMS',
    color: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    techs: [
      { name: 'Node.js', abbr: 'No', desc: 'Runtime', color: 'from-green-500 to-green-700' },
      { name: 'PHP', abbr: 'Ph', desc: 'Backend', color: 'from-indigo-500 to-indigo-700' },
      { name: 'WordPress', abbr: 'Wp', desc: 'CMS', color: 'from-blue-500 to-blue-700' },
      { name: 'REST APIs', abbr: 'AP', desc: 'Integration', color: 'from-orange-500 to-orange-600' },
    ],
  },
  {
    label: 'Database',
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    techs: [
      { name: 'MongoDB', abbr: 'Mg', desc: 'NoSQL', color: 'from-green-400 to-green-600' },
      { name: 'MySQL', abbr: 'My', desc: 'Relational', color: 'from-orange-500 to-blue-600' },
      { name: 'PostgreSQL', abbr: 'Pg', desc: 'Relational', color: 'from-blue-600 to-blue-800' },
      { name: 'Supabase', abbr: 'Sb', desc: 'Backend-as-a-Service', color: 'from-emerald-500 to-teal-600' },
    ],
  },
  {
    label: 'Marketing & Analytics',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
    techs: [
      { name: 'Google Analytics', abbr: 'GA', desc: 'Analytics', color: 'from-yellow-500 to-orange-500' },
      { name: 'Google Ads', abbr: 'Gd', desc: 'PPC', color: 'from-blue-400 to-blue-600' },
      { name: 'Search Console', abbr: 'Sc', desc: 'SEO', color: 'from-blue-500 to-green-500' },
      { name: 'Meta Ads', abbr: 'Ma', desc: 'Social Ads', color: 'from-blue-600 to-sky-500' },
    ],
  },
];

export default function AboutTechStack() {
  return (
    <section
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      aria-labelledby="about-tech-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-35" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            Our Stack
          </div>
          <h2
            id="about-tech-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Technology{' '}
            <span className="text-gradient">We Use</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            We choose our technology stack deliberately — selecting tools that
            balance developer experience, performance, security, and long-term
            maintainability.
          </p>
        </div>

        {/* Category blocks */}
        <div className="grid sm:grid-cols-2 gap-6">
          {techCategories.map((category) => (
            <div
              key={category.label}
              className={`bg-white border ${category.border} rounded-3xl p-6`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`px-3 py-1.5 bg-gradient-to-br ${category.color} rounded-xl text-xs font-extrabold text-white`}
                >
                  {category.label}
                </div>
              </div>

              {/* Tech grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className={`group flex items-center gap-3 p-3 ${category.bg} rounded-2xl border ${category.border} card-hover`}
                  >
                    <div
                      className={`w-9 h-9 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white font-extrabold text-xs flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow`}
                    >
                      {tech.abbr}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-xs leading-tight">
                        {tech.name}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{tech.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-slate-400 mt-10 max-w-xl mx-auto">
          Our stack evolves with the industry. We regularly evaluate new tools and
          adopt them when they deliver genuine value to our clients&apos; projects.
        </p>
      </div>
    </section>
  );
}
