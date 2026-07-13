'use client';

import { ChevronRight, Check } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 01',
    title: 'Kickoff & Discovery',
    duration: 'Week 1',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    tasks: [
      'Project brief and scope alignment',
      'Technical requirements gathering',
      'Platform and stack decision',
      'Timeline and milestone agreement',
      'Access setup and onboarding',
    ],
  },
  {
    phase: 'Phase 02',
    title: 'Architecture & Planning',
    duration: 'Week 1–2',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    tasks: [
      'Site map and information architecture',
      'Content structure planning',
      'Database schema design (if applicable)',
      'Third-party integration planning',
      'Technical SEO framework setup',
    ],
  },
  {
    phase: 'Phase 03',
    title: 'UI Design & Prototyping',
    duration: 'Week 2–3',
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    tasks: [
      'Wireframes for all key pages',
      'Brand and visual language application',
      'Responsive design across breakpoints',
      'Interactive Figma prototype',
      'Design review and approval',
    ],
  },
  {
    phase: 'Phase 04',
    title: 'Development & Integration',
    duration: 'Week 3–6',
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    tasks: [
      'Component-based frontend build',
      'CMS integration and content setup',
      'API and third-party integrations',
      'Performance optimization passes',
      'Analytics and tracking implementation',
    ],
  },
  {
    phase: 'Phase 05',
    title: 'QA & Testing',
    duration: 'Week 6–7',
    color: 'from-blue-500 to-sky-400',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    tasks: [
      'Cross-browser compatibility testing',
      'Mobile and tablet responsiveness audit',
      'Core Web Vitals and performance audit',
      'Accessibility (WCAG) compliance check',
      'Content review and proofing',
    ],
  },
  {
    phase: 'Phase 06',
    title: 'Launch & Handover',
    duration: 'Week 7–8',
    color: 'from-blue-700 to-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    tasks: [
      'Production deployment and DNS setup',
      'Post-launch smoke testing',
      'Google Search Console setup',
      'Client training and documentation',
      'Ongoing support plan activation',
    ],
  },
];

export default function AboutDevelopmentProcess() {
  return (
    <section
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="dev-process-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            Execution Framework
          </div>
          <h2
            id="dev-process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Our Development{' '}
            <span className="text-gradient">Process</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            A transparent, phased approach that keeps you informed at every step —
            from the first conversation to the day we go live and beyond.
          </p>
        </div>

        {/* Phases grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <article
              key={phase.phase}
              className={`group bg-white border ${phase.border} rounded-3xl p-6 card-hover`}
            >
              {/* Phase header */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`px-3 py-1.5 bg-gradient-to-br ${phase.color} rounded-xl text-xs font-extrabold text-white shadow-sm`}
                >
                  {phase.phase}
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 ${phase.bg} rounded-full text-slate-600 border ${phase.border}`}>
                  {phase.duration}
                </span>
              </div>

              <h3 className="font-bold text-slate-800 text-base mb-4">
                {phase.title}
              </h3>

              {/* Task list */}
              <ul className="space-y-2.5" role="list">
                {phase.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-2.5">
                    <div
                      className={`w-4 h-4 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-xs text-slate-500 leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom bar on hover */}
              <div
                className={`mt-5 h-1 bg-gradient-to-r ${phase.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
