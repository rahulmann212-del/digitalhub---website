'use client';

import Link from 'next/link';
import { Home, ChevronRight, Sparkles, Send, CalendarCheck } from 'lucide-react';

export default function ContactHero() {
  // SEO Breadcrumb Schema Data for Google
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.anviaan.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://www.anviaan.com/contact"
      }
    ]
  };

  return (
    <section
      className="relative pt-28 pb-12 overflow-hidden bg-slate-50 border-b border-slate-200/80"
      aria-labelledby="contact-hero-heading"
    >
      {/* Schema injected for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Background Grid and Glow Elements matching About Us */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative rings (Light mode adapted) */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[460px] h-[460px] border border-blue-500/10 rounded-full hidden lg:block pointer-events-none" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[340px] h-[340px] border border-blue-500/10 rounded-full hidden lg:block pointer-events-none" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[220px] h-[220px] border border-orange-500/15 rounded-full hidden lg:block pointer-events-none" />

      {/* Digital marketing illustration - Adapted for Light Theme */}
      <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center scale-90 pointer-events-none">
        <div className="relative w-72 h-72">
          {/* Central dashboard card */}
          <div className="absolute inset-0 m-auto w-44 h-44 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-3xl flex flex-col items-center justify-center gap-3 animate-float shadow-xl shadow-blue-500/10">
            <div className="w-12 h-12 bg-gradient-to-br from-[#063A9A] to-blue-600 rounded-2xl flex items-center justify-center shadow-md">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="w-24 h-2 bg-slate-200 rounded-full" />
            <div className="w-16 h-2 bg-slate-100 rounded-full" />
            {/* Mini bar chart */}
            <div className="flex items-end gap-1.5 h-8">
              <div className="w-2 h-3 bg-blue-300 rounded-sm" />
              <div className="w-2 h-5 bg-[#063A9A] rounded-sm" />
              <div className="w-2 h-4 bg-orange-300 rounded-sm" />
              <div className="w-2 h-7 bg-[#FF6600] rounded-sm" />
              <div className="w-2 h-6 bg-blue-400 rounded-sm" />
              <div className="w-2 h-8 bg-[#063A9A] rounded-sm" />
            </div>
          </div>
          {/* Orbiting service nodes */}
          {[
            { icon: Send,         top: '0%',   left: '50%', delay: '0s',   color: 'from-[#063A9A] to-blue-500' },
            { icon: CalendarCheck, top: '50%',  left: '94%', delay: '0.7s', color: 'from-blue-600 to-[#FF6600]' },
            { icon: Sparkles,      top: '94%',  left: '50%', delay: '1.4s', color: 'from-[#FF6600] to-orange-400' },
            { icon: Send,         top: '50%',  left: '6%',  delay: '2.1s', color: 'from-[#063A9A] to-blue-400' },
          ].map((node, i) => {
            const Icon = node.icon;
            return (
              <div
                key={i}
                className={`absolute w-10 h-10 bg-gradient-to-br ${node.color} rounded-2xl flex items-center justify-center shadow-md animate-float`}
                style={{ top: node.top, left: node.left, transform: 'translate(-50%,-50%)', animationDelay: node.delay }}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
            );
          })}
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 200 200">
            <line x1="100" y1="100" x2="100" y2="0"   stroke="#063A9A" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="188" y2="100" stroke="#063A9A" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="100" y2="188" stroke="#063A9A" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="12"  y2="100" stroke="#063A9A" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600 mb-6 font-medium">
          <Link href="/" className="flex items-center gap-1 hover:text-[#063A9A] transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#063A9A] font-bold">Contact</span>
        </nav>

        <div className="max-w-2xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] shadow-sm">
            <Send className="w-4 h-4 text-[#FF6600]" />
            The Anviaan Strategy
          </div>

          {/* Heading */}
          <h1
            id="contact-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#063A9A]"
          >
            Initiate Your{' '}
            <span className="text-[#FF6600] block mt-1">
              Scaling Strategy
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-medium">
            Whether you need high-converting digital architectures, Generative Engine Optimization (GEO), or ROI-obsessed performance marketing, Anviaan is your dedicated growth partner.
          </p>

          {/* Trust pills upgraded for Light Theme */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              'Bespoke Growth Audit',
              'Direct Strategist Access',
              'Data-Driven Execution',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm"
              >
                <span className="w-2 h-2 bg-[#FF6600] rounded-full" />
                <span className="text-xs sm:text-sm font-extrabold text-[#063A9A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}