'use client';

import Link from 'next/link';
import { Home, ChevronRight, Send } from 'lucide-react';

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
      className="relative pt-24 pb-8 overflow-hidden bg-slate-50 border-b border-slate-200/80"
      aria-labelledby="contact-hero-heading"
    >
      {/* Schema injected for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-5 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 mb-4 font-medium">
          <Link href="/" className="flex items-center gap-1 hover:text-[#063A9A] transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#063A9A] font-bold">Contact</span>
        </nav>

        <div className="max-w-2xl space-y-3">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-[#063A9A] shadow-sm">
            <Send className="w-3.5 h-3.5 text-[#FF6600]" />
            The Anviaan Strategy
          </div>

          {/* Heading */}
          <h1
            id="contact-hero-heading"
            className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-[#063A9A]"
          >
            Initiate Your{' '}
            <span className="text-[#FF6600]">
              Scaling Strategy
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl font-medium">
            Whether you need high-converting digital architectures, Generative Engine Optimization (GEO), or ROI-obsessed performance marketing, Anviaan is your dedicated growth partner.
          </p>

          {/* Trust pills - Reduced items to save vertical space */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              'Bespoke Growth Audit',
              'Direct Strategist Access',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg shadow-sm"
              >
                <span className="w-1.5 h-1.5 bg-[#FF6600] rounded-full" />
                <span className="text-xs font-extrabold text-[#063A9A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}