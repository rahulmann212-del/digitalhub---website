'use client';

import { ChevronRight, Lightbulb, Rocket, Users, TrendingUp } from 'lucide-react';

const milestones = [
  {
    year: '2019',
    title: 'The Beginning',
    desc: 'Anviaan was established with a vision to help businesses navigate the evolving digital landscape through practical strategies, transparent collaboration, and measurable results.',
    icon: Lightbulb,
    color: 'from-[#063A9A] to-blue-600',
  },
  {
    year: '2021',
    title: 'Expanding Our Expertise',
    desc: 'We broadened our capabilities across website development, SEO, and performance marketing, enabling businesses to build stronger digital foundations and reach the right audience.',
    icon: TrendingUp,
    color: 'from-blue-600 to-[#FF6600]',
  },
  {
    year: '2022',
    title: 'Delivering Integrated Growth',
    desc: 'Our services evolved into a complete digital marketing ecosystem, bringing together branding, content, search, paid media, and analytics to create consistent growth strategies under one roof.',
    icon: Rocket,
    color: 'from-[#FF6600] to-orange-500',
  },
  {
    year: '2024',
    title: 'Driving Long Term Partnerships',
    desc: 'Today, Anviaan works with businesses across multiple industries, helping them strengthen their online presence, generate qualified leads, and achieve sustainable business growth through tailored digital solutions.',
    icon: Users,
    color: 'from-[#063A9A] to-[#FF6600]',
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — narrative */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
                <ChevronRight className="w-4 h-4 text-[#FF6600]" />
                Our Story
              </div>
              <h2
                id="story-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
              >
                Built to Help Businesses Grow{' '}
                <span className="text-[#FF6600] block mt-1">with Confidence</span>
              </h2>
            </div>

            <div className="space-y-5 text-slate-700 leading-relaxed font-medium">
              <p className="text-base sm:text-lg">
                Anviaan was founded with a simple belief that great marketing should create measurable business impact, not just impressive reports. We saw too many businesses investing in digital marketing without a clear strategy, transparent communication, or meaningful results.
              </p>
              <p className="text-sm sm:text-base">
                From day one, our mission has been to build growth strategies tailored to each business. By combining creative thinking, data-driven decisions, and technical expertise, we help organizations strengthen their digital presence, attract the right audience, and achieve sustainable growth.
              </p>
              <p className="text-sm sm:text-base">
                Today, we partner with businesses across industries to deliver websites, marketing campaigns, SEO, branding, and performance strategies that support long-term success. Every solution we create is guided by your goals, your customers, and measurable outcomes.
              </p>
            </div>

            {/* Decorative quote */}
            <blockquote className="relative pl-6 border-l-4 border-[#FF6600] bg-orange-50/30 p-4 rounded-r-2xl">
              <p className="text-base sm:text-lg font-bold text-slate-800 italic leading-relaxed">
                &ldquo;Successful marketing isn't about chasing trends. It's about understanding your business, solving the right problems, and creating strategies that deliver lasting results.&rdquo;
              </p>
              <footer className="mt-3 text-sm text-[#063A9A] font-extrabold not-italic">
                — Vijay Mishra, Founder
              </footer>
            </blockquote>
          </div>

          {/* Right — timeline */}
          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#063A9A] via-[#FF6600] to-blue-200 rounded-full hidden sm:block" />

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
                    className={`flex-1 p-5 bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-200/80 rounded-2xl transition-all duration-300 hover:shadow-md ${
                      index === milestones.length - 1 ? 'ring-2 ring-[#063A9A]/15' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-extrabold text-white bg-[#063A9A] px-2.5 py-1 rounded-full shadow-sm">
                        {milestone.year}
                      </span>
                      <h3 className="font-extrabold text-[#063A9A] text-sm sm:text-base">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
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