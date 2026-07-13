'use client';

import Link from 'next/link';
import {
  Globe,
  Code2,
  ShoppingCart,
  Search,
  TrendingUp,
  Video,
  Settings,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web & E-Commerce Development',
    desc: 'Custom, high-performance websites and online stores crafted with modern frameworks to deliver exceptional user experiences and sales.',
    color: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-50',
    tag: 'Most Popular',
  },
  {
    icon: Search,
    title: 'Advanced SEO Strategies',
    desc: 'Dominating search results with technical SEO and content strategies to generate consistent, high-quality organic traffic and leads.',
    color: 'from-sky-500 to-blue-500',
    lightBg: 'bg-sky-50',
    tag: 'Trending', // SEO ko Trending banaya gaya hai
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    desc: 'Data-driven ad campaigns focused on maximizing ROAS, reducing customer acquisition costs, and scaling revenue rapidly.',
    color: 'from-blue-600 to-indigo-500',
    lightBg: 'bg-blue-50',
    tag: 'Highest ROI',
  },
  {
    icon: ShoppingCart,
    title: 'D2C Brand Scaling',
    desc: 'End-to-end growth strategies to scale Direct-to-Consumer brands, focusing on operations, customer retention, and profit margins.',
    color: 'from-cyan-500 to-blue-500',
    lightBg: 'bg-cyan-50',
    tag: null,
  },
  {
    icon: Globe,
    title: 'Multi-Vendor Marketplaces',
    desc: 'Strategic development of scalable e-commerce platforms, designed for heavy traffic, complex operations, and seamless vendor management.',
    color: 'from-blue-500 to-sky-400',
    lightBg: 'bg-blue-50',
    tag: null,
  },
  {
    icon: Video,
    title: 'Short-Form Video Campaigns',
    desc: 'Engaging, viral-ready video content and promotional scripts designed specifically for high-converting brand campaigns and social media.',
    color: 'from-sky-600 to-blue-600',
    lightBg: 'bg-sky-50',
    tag: null,
  },
  {
    icon: Settings,
    title: 'Technical Optimization',
    desc: 'Proactive web maintenance, speed optimization, and security updates to keep your digital assets performing at peak efficiency.',
    color: 'from-blue-600 to-cyan-500',
    lightBg: 'bg-blue-50',
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
            Digital Services Built for{' '}
            <span className="text-gradient">Real Growth</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            From custom web development to viral marketing campaigns, we provide the complete spectrum of technical and digital services your business needs to scale online.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group relative bg-white border border-slate-100 rounded-3xl p-7 card-hover shine-border ${
                index === 0 ? 'lg:col-span-1 ring-2 ring-blue-500/20' : ''
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
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                {service.desc}
              </p>

              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group/link hover:gap-2.5 transition-all duration-200"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}

          {/* CTA card */}
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-sky-500 rounded-3xl p-7 flex flex-col justify-between overflow-hidden card-hover">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3">
                Need a Custom Solution?
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Whether you need a high-performance website or a comprehensive marketing strategy, we tailor our solutions to your business goals.
              </p>
            </div>
            <Link
              href="#contact"
              className="relative z-10 mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 text-sm font-bold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}