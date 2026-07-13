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
      className={`group flex flex-col bg-white border ${service.lightBorder} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/8 transition-all duration-500`}
    >
      {/* Card header */}
      <div className={`relative bg-gradient-to-br ${service.color} p-7 pb-8 overflow-hidden`}>
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/8 rounded-full" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/8 rounded-full" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 border border-white/30 rounded-full text-xs font-semibold text-white mb-3">
              <ChevronRight className="w-3 h-3" />
              {service.category}
            </span>
            <h3 className="text-xl font-extrabold text-white leading-tight">
              {service.title}
            </h3>
            <p className="mt-1 text-sm text-white/75 leading-relaxed">
              {service.tagline}
            </p>
          </div>
          <div className="flex-shrink-0 w-12 h-12 bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-7 gap-7">
        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>

        {/* Benefits & Process in two columns on lg */}
        <div className="grid md:grid-cols-2 gap-6 flex-1">
          {/* Benefits */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-5 h-5 bg-gradient-to-br ${service.color} rounded-md flex items-center justify-center flex-shrink-0`}>
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Key Benefits
              </h4>
            </div>
            <ul className="space-y-2.5" role="list">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5">
                  <div className={`mt-1 w-4 h-4 ${service.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Check className="w-2.5 h-2.5 text-blue-600" strokeWidth={3} />
                  </div>
                  <span className="text-xs text-slate-600 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-5 h-5 bg-gradient-to-br ${service.color} rounded-md flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-[8px] font-black">PS</span>
              </div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Our Process
              </h4>
            </div>
            <ol className="space-y-3" role="list">
              {service.process.map((item, idx) => (
                <li key={item.step} className="flex gap-3">
                  <div
                    className={`w-6 h-6 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm text-white text-xs font-extrabold`}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-700">{item.step} — </span>
                    <span className="text-xs text-slate-500 leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-slate-100 mt-auto">
          <Link
            href="/#contact"
            className={`group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br ${service.color} text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
            aria-label={`Get started with ${service.title}`}
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 ml-4 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
          >
            Ask a question
          </Link>
        </div>
      </div>
    </article>
  );
}
