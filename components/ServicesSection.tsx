'use client';

import Link from 'next/link';
import {
  Code2,
  ShoppingCart,
  Search,
  MousePointerClick,
  TrendingUp,
  Megaphone,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    icon: MousePointerClick,
    title: 'Performance Marketing',
    desc: 'Run highly optimized campaigns across leading advertising platforms to maximize conversions, reduce acquisition costs, and generate measurable business growth.',
    color: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-50',
    tag: 'Most Popular',
  },
  {
    icon: Search,
    title: 'Search Visibility',
    desc: 'Increase your online presence with technical excellence, content strategy, and authority-building that drives qualified traffic and long-term business growth.',
    color: 'from-sky-500 to-blue-500',
    lightBg: 'bg-sky-50',
    tag: null,
  },
  {
    icon: TrendingUp,
    title: 'Conversion Optimization',
    desc: 'Turn more visitors into customers by improving landing pages, user journeys, and conversion funnels through continuous testing and data-backed optimization.',
    color: 'from-blue-600 to-indigo-500',
    lightBg: 'bg-blue-50',
    tag: null,
  },
  {
    icon: Megaphone,
    title: 'Content That Connects',
    desc: 'Create engaging videos, visuals, and written content that captures attention, builds trust, and keeps your audience coming back for more.',
    color: 'from-cyan-500 to-blue-500',
    lightBg: 'bg-cyan-50',
    tag: null,
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    desc: 'Build scalable online stores and marketplace platforms designed to simplify operations, improve customer experiences, and support long-term business expansion.',
    color: 'from-blue-500 to-sky-400',
    lightBg: 'bg-blue-50',
    tag: null,
  },
  {
    icon: Code2,
    title: 'Website Development',
    desc: 'Design and develop fast, secure, and conversion-focused websites that create exceptional user experiences and provide a strong foundation for business growth.',
    color: 'from-sky-600 to-blue-600',
    lightBg: 'bg-sky-50',
    tag: null,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-100/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            Our Core Expertise
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Solutions That Deliver{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Measurable Growth</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            From strategy to execution, we help businesses attract the right
audience, generate qualified leads, strengthen their brand, and achieve
sustainable digital growth.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group relative bg-white border border-slate-100 rounded-3xl p-7 card-hover shine-border ${
                index === 0 ? 'ring-2 ring-blue-500/20' : ''
              }`}
            >
              {service.tag && (
                <span className="absolute top-5 right-5 px-2.5 py-1 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-full">
                  {service.tag}
                </span>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 ${service.lightBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <div
                  className={`w-7 h-7 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}
                >
                  <service.icon className="w-4 h-4 text-white" strokeWidth={2} />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2.5">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {service.desc}
              </p>
            </article>
          ))}

          {/* Full-Width CTA Banner */}
          <div className="sm:col-span-2 lg:col-span-3 mt-4 relative bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                Ready to Dominate Your Market?
              </h3>
              <p className="text-blue-200 text-sm md:text-base leading-relaxed">
                Let's audit your current digital strategy and uncover the bottlenecks stopping your business from scaling profitably.
              </p>
            </div>
            
            <Link
              href="/contact"
              className="relative z-10 shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 text-sm font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              Start Scaling Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}