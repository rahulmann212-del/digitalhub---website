'use client';

import Link from 'next/link';
import { Check, ArrowRight, ChevronRight } from 'lucide-react';
import type { Service } from './services-data';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      id={service.id}
      className={`group flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-[#063A9A] transition-all duration-500`}
    >
      {/* Card header */}
      <div className={`relative bg-gradient-to-br ${service.color} p-7 pb-8 overflow-hidden`}>
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/10 rounded-full pointer-events-none" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full pointer-events-none" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 border border-white/30 rounded-full text-xs font-bold text-white mb-3 shadow-sm">
              <ChevronRight className="w-3 h-3 text-[#FF6600]" />
              {service.category}
            </span>
            <h3 className="text-xl font-extrabold text-white leading-tight">
              {service.title}
            </h3>
            <p className="mt-1.5 text-sm text-blue-100 font-medium leading-relaxed">
              {service.tagline}
            </p>
          </div>
          <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center shadow-md">
            <Icon className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-7 gap-7 bg-white">
        {/* Description */}
        <p className="text-sm text-slate-700 leading-relaxed font-medium">{service.description}</p>

        {/* Benefits & Process in two columns on lg */}
        <div className="grid md:grid-cols-2 gap-6 flex-1">
          {/* Benefits */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-5 h-5 bg-gradient-to-br ${service.color} rounded-md flex items-center justify-center flex-shrink-0 shadow-sm`}>
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <h4 className="text-xs font-bold text-[#063A9A] uppercase tracking-wider">
                Key Benefits
              </h4>
            </div>
            <ul className="space-y-3" role="list">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5">
                  <div className={`mt-0.5 w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Check className="w-2.5 h-2.5 text-[#063A9A]" strokeWidth={3} />
                  </div>
                  <span className="text-xs text-slate-700 leading-relaxed font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-5 h-5 bg-gradient-to-br ${service.color} rounded-md flex items-center justify-center flex-shrink-0 shadow-sm`}>
                <span className="text-white text-[9px] font-black">AV</span>
              </div>
              <h4 className="text-xs font-bold text-[#063A9A] uppercase tracking-wider">
                Our Process
              </h4>
            </div>
            <ol className="space-y-3.5" role="list">
              {service.process.map((item, idx) => (
                <li key={item.step} className="flex gap-3">
                  <div
                    className={`w-5 h-5 bg-gradient-to-br ${service.color} rounded-md flex items-center justify-center flex-shrink-0 shadow-sm text-white text-[10px] font-extrabold`}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#063A9A]">{item.step} — </span>
                    <span className="text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-slate-200 mt-auto flex items-center justify-between">
          <Link
            href="/#contact"
            className={`group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FF6600] to-orange-500 text-white text-sm font-bold rounded-xl shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all duration-300`}
            aria-label={`Get started with ${service.title}`}
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#contact"
            className="text-xs font-bold text-[#063A9A] hover:text-[#FF6600] transition-colors"
          >
            Ask a question →
          </Link>
        </div>
      </div>
    </article>
  );
}