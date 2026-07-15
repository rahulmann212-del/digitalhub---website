'use client';

import { ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Audit & Growth Analysis',
    desc: 'We analyze your acquisition costs, conversion data, customer journey, and profitability to uncover the biggest opportunities for sustainable growth.',
    color: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-50',
    dotColor: 'bg-blue-600',
  },
  {
    number: '02',
    title: 'E-Com Infrastructure',
    desc: 'We build or optimize a fast, conversion-focused online store designed to deliver a seamless shopping experience and maximize every visitor.',
    color: 'from-sky-500 to-blue-500',
    lightBg: 'bg-sky-50',
    dotColor: 'bg-sky-500',
  },
  {
    number: '03',
    title: 'Performance Marketing',
    desc: 'We launch highly targeted Meta and Google campaigns supported by technical SEO to attract qualified traffic and generate measurable results.',
    color: 'from-blue-600 to-indigo-500',
    lightBg: 'bg-indigo-50',
    dotColor: 'bg-indigo-500',
  },
  {
    number: '04',
    title: 'Conversion Optimization',
    desc: 'We continuously improve landing pages, funnels, and user journeys through testing and data analysis to increase conversions and improve return on ad spend.',
    color: 'from-cyan-500 to-blue-500',
    lightBg: 'bg-cyan-50',
    dotColor: 'bg-cyan-600',
  },
  {
    number: '05',
    title: 'Brand Authority',
    desc: 'We strengthen your brand with valuable content, short form videos, and organic strategies that build trust, increase visibility, and create lasting customer relationships.',
    color: 'from-blue-500 to-sky-400',
    lightBg: 'bg-blue-50',
    dotColor: 'bg-blue-500',
  },
  {
    number: '06',
    title: 'Scalable Growth',
    desc: 'Once your marketing system delivers consistent results, we scale strategically while protecting profitability and maintaining sustainable growth.',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-blue-700 mb-6 shadow-sm">
            <ChevronRight className="w-4 h-4" />
            How We Scale Brands
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            The Proven Framework Behind Consistent{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Brand Growth</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            A clear, data-driven process that helps you improve profitability, increase conversions, and build a business that scales with confidence.
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
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 transition-transform duration-300 hover:scale-110`}
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
                    className={`text-center p-4 ${step.lightBg} rounded-2xl border border-white shadow-sm w-full h-full`}
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