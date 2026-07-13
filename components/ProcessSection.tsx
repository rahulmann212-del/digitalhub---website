'use client';

import { ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'Deep-dive consultation to understand your business goals, target audience, competitors, and project requirements.',
    color: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-50',
    dotColor: 'bg-blue-600',
  },
  {
    number: '02',
    title: 'Planning',
    desc: 'Detailed project roadmap, site architecture, technology stack selection, and timeline with clear milestones.',
    color: 'from-sky-500 to-blue-500',
    lightBg: 'bg-sky-50',
    dotColor: 'bg-sky-500',
  },
  {
    number: '03',
    title: 'Design',
    desc: 'Wireframes and high-fidelity mockups that align with your brand, focusing on premium aesthetics and user experience.',
    color: 'from-blue-600 to-indigo-500',
    lightBg: 'bg-indigo-50',
    dotColor: 'bg-indigo-500',
  },
  {
    number: '04',
    title: 'Development',
    desc: 'Clean, scalable code implementation with responsive design, performance optimization, and CMS integration.',
    color: 'from-cyan-500 to-blue-500',
    lightBg: 'bg-cyan-50',
    dotColor: 'bg-cyan-600',
  },
  {
    number: '05',
    title: 'Testing',
    desc: 'Rigorous QA across devices and browsers, performance audits, accessibility checks, and SEO validation.',
    color: 'from-blue-500 to-sky-400',
    lightBg: 'bg-blue-50',
    dotColor: 'bg-blue-500',
  },
  {
    number: '06',
    title: 'Launch',
    desc: 'Smooth deployment, domain setup, analytics integration, and dedicated post-launch support to ensure success.',
    color: 'from-blue-600 to-blue-700',
    lightBg: 'bg-blue-50',
    dotColor: 'bg-blue-700',
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            How We Work
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Our Proven{' '}
            <span className="text-gradient">6-Step Process</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            A structured, transparent workflow designed to deliver exceptional
            results on time, every time.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          {/* Timeline connector */}
          <div className="relative">
            {/* Line */}
            <div className="absolute top-8 left-[calc(100%/12)] right-[calc(100%/12)] h-0.5">
              <div className="w-full h-full bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full" />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center">
                  {/* Dot */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20`}
                    >
                      <span className="text-white font-extrabold text-sm">
                        {step.number}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-[calc(50%+8px)] w-8 h-0.5 bg-blue-300" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`text-center p-4 ${step.lightBg} rounded-2xl border border-white shadow-sm w-full`}
                  >
                    <h3 className="font-bold text-slate-800 text-sm mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet — Vertical timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              {/* Left — number + line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}
                >
                  <span className="text-white font-extrabold text-sm">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-300 to-blue-100 mt-2 min-h-[24px]" />
                )}
              </div>

              {/* Right — content */}
              <div
                className={`flex-1 pb-4 p-4 ${step.lightBg} rounded-2xl border border-white shadow-sm`}
              >
                <h3 className="font-bold text-slate-800 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
