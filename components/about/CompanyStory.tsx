'use client';

import { ChevronRight, Lightbulb, Rocket, Users, TrendingUp } from 'lucide-react';

const milestones = [
  {
    year: '2019',
    title: 'The Beginning',
    desc: 'DigitalHub was founded with a clear purpose — to make professional digital presence accessible to every business, not just the big players.',
    icon: Lightbulb,
    color: 'from-blue-500 to-blue-600',
  },
  {
    year: '2020',
    title: 'Growing Our Craft',
    desc: 'We deepened our expertise in performance-first development and SEO, helping early clients achieve measurable search growth and improved conversions.',
    icon: TrendingUp,
    color: 'from-sky-500 to-blue-500',
  },
  {
    year: '2022',
    title: 'Expanding Services',
    desc: 'Added Google Ads management and social media marketing to our offering — giving clients a complete digital growth engine under one roof.',
    icon: Rocket,
    color: 'from-blue-600 to-indigo-500',
  },
  {
    year: '2024',
    title: 'Scaling Impact',
    desc: 'Serving clients across multiple countries, we refined our process and delivery standards — making every project a case study in what a great digital partnership looks like.',
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
                Built to Help{' '}
                <span className="text-gradient">Businesses Thrive</span>
              </h2>
            </div>

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p className="text-lg">
                DigitalHub started from a straightforward observation: too many
                talented businesses were losing customers online simply because
                their digital presence didn&apos;t reflect the quality of their
                work.
              </p>
              <p>
                We set out to change that. Not with one-size-fits-all templates,
                but with thoughtful, purpose-built digital experiences — each
                crafted around the specific goals of the business we serve.
              </p>
              <p>
                From our first project to our most recent one, the commitment has
                stayed the same: deliver honest, high-quality work that creates
                real value. No inflated promises. No cookie-cutter solutions. Just
                professional digital work done right.
              </p>
            </div>

            {/* Decorative quote */}
            <blockquote className="relative pl-6 border-l-4 border-blue-500">
              <p className="text-lg font-semibold text-slate-800 italic leading-relaxed">
                &ldquo;Great digital work is not about being flashy — it&apos;s
                about being effective. Every decision we make is rooted in your
                business goals.&rdquo;
              </p>
              <footer className="mt-3 text-sm text-slate-500 font-medium not-italic">
                — DigitalHub Founding Principle
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
                    className={`flex-1 p-5 bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-100 rounded-2xl card-hover ${
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
