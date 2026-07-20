'use client';

import { ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Audit & Growth Analysis',
    desc: 'We analyze your acquisition costs, conversion data, customer journey, and profitability to uncover the biggest opportunities for sustainable growth.',
    color: 'from-[#063A9A] to-blue-600',
    lightBg: 'bg-blue-50',
    dotColor: 'bg-[#063A9A]',
  },
  {
    number: '02',
    title: 'E-Com Infrastructure',
    desc: 'We build or optimize a fast, conversion-focused online store designed to deliver a seamless shopping experience and maximize every visitor.',
    color: 'from-blue-600 to-[#063A9A]',
    lightBg: 'bg-blue-50/50',
    dotColor: 'bg-blue-600',
  },
  {
    number: '03',
    title: 'Performance Marketing',
    desc: 'We launch highly targeted Meta and Google campaigns supported by technical SEO to attract qualified traffic and generate measurable results.',
    color: 'from-[#063A9A] to-[#FF6600]',
    lightBg: 'bg-orange-50/30',
    dotColor: 'bg-[#063A9A]',
  },
  {
    number: '04',
    title: 'Conversion Optimization',
    desc: 'We continuously improve landing pages, funnels, and user journeys through testing and data analysis to increase conversions and improve return on ad spend.',
    color: 'from-[#FF6600] to-orange-500',
    lightBg: 'bg-orange-50',
    dotColor: 'bg-[#FF6600]',
  },
  {
    number: '05',
    title: 'Brand Authority',
    desc: 'We strengthen your brand with valuable content, short form videos, and organic strategies that build trust, increase visibility, and create lasting customer relationships.',
    color: 'from-orange-500 to-[#FF6600]',
    lightBg: 'bg-orange-50/50',
    dotColor: 'bg-orange-500',
  },
  {
    number: '06',
    title: 'Scalable Growth',
    desc: 'Once your marketing system delivers consistent results, we scale strategically while protecting profitability and maintaining sustainable growth.',
    color: 'from-[#FF6600] to-[#063A9A]',
    lightBg: 'bg-blue-50',
    dotColor: 'bg-[#FF6600]',
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      {/* Background blobs updated to brand colors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#063A9A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#FF6600]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
            <ChevronRight className="w-4 h-4 text-[#FF6600]" />
            How We Scale Brands
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
          >
            The Proven Framework Behind Consistent{' '}
            <span className="text-[#FF6600] block mt-1">Brand Growth</span>
          </h2>
          <p className="mt-5 text-lg text-slate-700 leading-relaxed font-medium">
            A clear, data-driven process that helps you improve profitability, increase conversions, and build a business that scales with confidence.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          {/* Timeline connector */}
          <div className="relative">
            {/* Main Line connecting steps */}
            <div className="absolute top-8 left-[calc(100%/12)] right-[calc(100%/12)] h-1">
              <div className="w-full h-full bg-gradient-to-r from-[#063A9A]/20 via-[#FF6600]/30 to-[#063A9A]/20 rounded-full" />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center group">
                  {/* Dot */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/10 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <span className="text-white font-extrabold text-sm">
                        {step.number}
                      </span>
                    </div>
                    {/* Small connector dash between steps */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-[calc(50%+8px)] w-8 h-1 bg-[#063A9A]/10 rounded-full" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`text-center p-4 ${step.lightBg} rounded-2xl border border-slate-200 shadow-sm w-full h-full group-hover:shadow-md transition-shadow duration-300`}
                  >
                    {/* Step Title in Brand Deep Blue */}
                    <h3 className="font-bold text-[#063A9A] text-sm mb-2 group-hover:text-[#FF6600] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
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
            <div key={step.title} className="flex gap-4 group">
              {/* Left — number + line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
                >
                  <span className="text-white font-extrabold text-sm">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-[#063A9A]/30 to-transparent mt-2 min-h-[24px]" />
                )}
              </div>

              {/* Right — content */}
              <div
                className={`flex-1 pb-4 p-4 ${step.lightBg} rounded-2xl border border-slate-200 shadow-sm group-hover:shadow-md transition-shadow duration-300`}
              >
                <h3 className="font-bold text-[#063A9A] mb-1 group-hover:text-[#FF6600] transition-colors">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
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