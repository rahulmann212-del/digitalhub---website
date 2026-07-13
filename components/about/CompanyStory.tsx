'use client';

import { ChevronRight, Lightbulb, Rocket, Users, TrendingUp } from 'lucide-react';

const milestones = [
  {
    year: '2019',
    title: 'Operator Origins',
    desc: 'Rankovio was born from the trenches. Building and scaling our own platforms like SwipeKarts taught us that standard agencies rarely understand the brutal unit economics of e-commerce.',
    icon: Lightbulb,
    color: 'from-blue-500 to-blue-600',
  },
  {
    year: '2020',
    title: 'Mastering Performance',
    desc: 'We shifted our focus entirely to performance marketing and data-driven e-commerce development, helping early D2C clients slash acquisition costs and boost real ROI.',
    icon: TrendingUp,
    color: 'from-sky-500 to-blue-500',
  },
  {
    year: '2022',
    title: 'Full-Funnel Growth',
    desc: 'Integrated advanced SEO and short-form video campaigns into our core services, giving e-commerce brands a complete, end-to-end growth engine under one roof.',
    icon: Rocket,
    color: 'from-blue-600 to-indigo-500',
  },
  {
    year: '2024',
    title: 'Scaling Marketplaces',
    desc: 'Now engineering multi-vendor marketplaces and scaling international brands. We treat every project as an operator, focusing strictly on metrics that impact the bottom line.',
    icon: Users,
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function CompanyStory() {
  return (
    <section
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="story-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — narrative */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
                <ChevronRight className="w-4 h-4" />
                Our Story
              </div>
              <h2
                id="story-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
              >
                Built by Operators, For{' '}
                <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Scaling Brands</span>
              </h2>
            </div>

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p className="text-lg">
                Rankovio wasn&apos;t started by traditional agency executives. We are operators. While building and managing our own platforms, our leadership realized a massive gap in the market: most agencies talk about vanity metrics, but very few understand RTO optimization, profit margins, and true D2C brand scaling.
              </p>
              <p>
                We built Rankovio to be the growth partner we always wished we had. Our approach skips the cookie-cutter templates and focuses strictly on high-converting e-commerce development and advanced SEO strategies that actually drive revenue.
              </p>
              <p>
                Today, we engineer end-to-end growth funnels. From multi-vendor marketplaces to targeted short-form video campaigns, we treat your business like our own—because we&apos;ve been exactly where you are.
              </p>
            </div>

            {/* Decorative quote */}
            <blockquote className="relative pl-6 border-l-4 border-blue-500">
              <p className="text-lg font-semibold text-slate-800 italic leading-relaxed">
                &ldquo;Scaling an e-commerce brand isn&apos;t about running flashier ads. It&apos;s about fixing the unit economics, building a high-converting storefront, and driving profitable growth.&rdquo;
              </p>
              <footer className="mt-3 text-sm text-slate-500 font-medium not-italic">
                — Pawan Kumar Sharma, Co-Founder
              </footer>
            </blockquote>
          </div>

          {/* Right — timeline */}
          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-sky-400 to-blue-200 rounded-full hidden sm:block" />

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex gap-5">
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20`}
                    >
                      <milestone.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 p-5 bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-100 rounded-2xl transition-all duration-300 hover:shadow-md ${
                      index === milestones.length - 1 ? 'ring-2 ring-blue-500/15' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-extrabold text-blue-600 bg-blue-100 px-2.5 py-1 rounded-full">
                        {milestone.year}
                      </span>
                      <h3 className="font-bold text-slate-800 text-sm">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {milestone.desc}
                    </p>
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