'use client';

import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import type { Service } from './services-data';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      id={service.id}
      className="group flex flex-col bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#063A9A]/10 hover:border-[#063A9A]/30 transition-all duration-300"
    >
      {/* 1. CLEAN PROFESSIONAL HEADER (No heavy gradients, 100% readable) */}
      <div className="relative p-7 pb-6 bg-slate-50 border-b border-slate-100">
        <div className="flex items-start justify-between gap-5">
          <div className="flex-1">
            {/* Main Heading - Sharp Deep Blue */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#063A9A] leading-tight group-hover:text-[#FF6600] transition-colors duration-300">
              {service.title}
            </h3>
            <p className="mt-2.5 text-sm text-slate-600 font-medium leading-relaxed">
              {service.tagline}
            </p>
          </div>
          {/* Accent Icon Box - This is the ONLY place the dynamic color applies in the header */}
          <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* 2. CARD BODY (Clean white background for perfect contrast) */}
      <div className="flex flex-col flex-1 p-7 gap-8 bg-white">
        {/* Main Description */}
        <p className="text-sm text-slate-700 leading-relaxed font-medium">
          {service.description}
        </p>

        {/* Benefits & Process Grid */}
        <div className="grid md:grid-cols-2 gap-8 flex-1">
          {/* Left Column: Benefits */}
          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
              <h4 className="text-xs font-bold text-[#063A9A] uppercase tracking-wider">
                Key Benefits
              </h4>
            </div>
            <ul className="space-y-3.5" role="list">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className={`mt-0.5 w-5 h-5 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Process */}
          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
              <h4 className="text-xs font-bold text-[#063A9A] uppercase tracking-wider">
                Our Process
              </h4>
            </div>
            <ol className="space-y-4" role="list">
              {service.process.map((item, idx) => (
                <li key={item.step} className="flex gap-3">
                  <div
                    className={`w-5 h-5 bg-gradient-to-br ${service.color} rounded-md flex items-center justify-center flex-shrink-0 shadow-sm text-white text-[10px] font-extrabold`}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#063A9A] block mb-0.5">
                      {item.step}
                    </span>
                    <span className="text-xs text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* 3. CARD CTA (Action Area) */}
        <div className="pt-6 border-t border-slate-100 mt-auto flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#contact"
            className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF6600] to-orange-500 text-white text-sm font-bold rounded-xl shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300"
            aria-label={`Get started with ${service.title}`}
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-bold text-[#063A9A] hover:text-[#FF6600] transition-colors"
          >
            Ask a question &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}