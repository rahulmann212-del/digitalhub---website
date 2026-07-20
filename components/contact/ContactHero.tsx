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
      // Padding top aur bottom ko kam kiya gaya hai (pt-32 pb-20 -> pt-28 pb-12)
      className="relative pt-28 pb-12 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900"
      aria-labelledby="contact-hero-heading"
    >
      {/* Schema injected for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 90% 70% at 55% 120%, rgba(37,99,235,0.32) 0%, transparent 65%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 8% 18%, rgba(14,165,233,0.16) 0%, transparent 60%)' }}
      />

      {/* Floating orbs */}
      <div className="absolute top-24 right-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-16 left-12 w-64 h-64 bg-sky-400/8 rounded-full blur-3xl animate-float-delayed" />

      {/* Decorative rings */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[460px] h-[460px] border border-white/5 rounded-full hidden lg:block" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[340px] h-[340px] border border-white/5 rounded-full hidden lg:block" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[220px] h-[220px] border border-blue-500/15 rounded-full hidden lg:block" />

      {/* Digital marketing illustration */}
      <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center scale-90">
        <div className="relative w-72 h-72">
          {/* Central dashboard card */}
          <div className="absolute inset-0 m-auto w-44 h-44 bg-white/8 backdrop-blur-sm border border-white/15 rounded-3xl flex flex-col items-center justify-center gap-3 animate-float">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-400 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/40">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="w-24 h-2 bg-white/15 rounded-full" />
            <div className="w-16 h-2 bg-white/10 rounded-full" />
            {/* Mini bar chart */}
            <div className="flex items-end gap-1 h-8">
              <div className="w-2 h-3 bg-blue-400/60 rounded-sm" />
              <div className="w-2 h-5 bg-blue-400/70 rounded-sm" />
              <div className="w-2 h-4 bg-sky-400/60 rounded-sm" />
              <div className="w-2 h-7 bg-sky-400/80 rounded-sm" />
              <div className="w-2 h-6 bg-blue-400/70 rounded-sm" />
              <div className="w-2 h-8 bg-sky-400 rounded-sm" />
            </div>
          </div>
          {/* Orbiting service nodes */}
          {[
            { icon: Send,         top: '0%',   left: '50%', delay: '0s',   color: 'from-sky-500 to-blue-500' },
            { icon: CalendarCheck, top: '50%',  left: '94%',  delay: '0.7s', color: 'from-blue-600 to-indigo-500' },
            { icon: Sparkles,      top: '94%',  left: '50%',  delay: '1.4s', color: 'from-amber-500 to-orange-500' },
            { icon: Send,         top: '50%',  left: '6%',   delay: '2.1s', color: 'from-emerald-500 to-teal-500' },
          ].map((node, i) => {
            const Icon = node.icon;
            return (
              <div
                key={i}
                className={`absolute w-10 h-10 bg-gradient-to-br ${node.color} rounded-2xl flex items-center justify-center shadow-lg animate-float`}
                style={{ top: node.top, left: node.left, transform: 'translate(-50%,-50%)', animationDelay: node.delay }}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
            );
          })}
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
            <line x1="100" y1="100" x2="100" y2="0"   stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="188" y2="100" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="100" y2="188" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="12"  y2="100" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-blue-300/70 mb-6">
          <Link href="/" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-blue-400/40" />
          <span className="text-blue-300 font-medium">Contact</span>
        </nav>

        {/* Space-y kam karke compact banaya gaya hai */}
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/25 rounded-full text-sm font-medium text-blue-300">
            <Send className="w-4 h-4 text-blue-400" />
            The Anviaan Strategy
          </div>

          <h1
            id="contact-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Initiate Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Scaling Strategy
            </span>
          </h1>

          <p className="text-lg text-blue-100/70 leading-relaxed max-w-xl">
            Whether you need high-converting digital architectures, Generative Engine Optimization (GEO), or ROI-obsessed performance marketing, Anviaan is your dedicated growth partner.
          </p>

          {/* Trust pills upgraded */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              'Bespoke Growth Audit',
              'Direct Strategist Access',
              'Data-Driven Execution',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 px-4 py-2 bg-white/8 border border-white/10 rounded-xl backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                <span className="text-sm font-medium text-blue-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}