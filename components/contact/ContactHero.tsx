'use client';

import Link from 'next/link';
import { Home, ChevronRight, Clock, ShieldCheck } from 'lucide-react';

export default function ContactHero() {
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
      className="relative pt-28 pb-10 overflow-hidden bg-gradient-to-b from-slate-100/80 to-slate-50 border-b border-slate-200/80"
      aria-labelledby="contact-hero-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Background Glow Elements */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb with proper spacing from navbar */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 mb-6 font-medium">
          <Link href="/" className="flex items-center gap-1 hover:text-[#063A9A] transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#063A9A] font-bold">Contact</span>
        </nav>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & Value Prop (Badge removed completely) */}
          <div className="lg:col-span-7 space-y-4">
            <h1
              id="contact-hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-[#063A9A]"
            >
              Initiate Your <span className="text-[#FF6600]">Scaling Strategy</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium max-w-xl">
              Connect with our strategists for high-converting architectures, GEO, and ROI-driven performance marketing tailored to your brand.
            </p>
          </div>

          {/* Right Column: Mini Trust Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            <div className="flex items-center gap-3.5 p-3.5 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#063A9A] shrink-0">
                <Clock className="w-5 h-5 text-[#FF6600]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Quick Response</h4>
                <p className="text-xs text-slate-600 font-medium">Average reply time under 2 hours</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#063A9A] shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#063A9A]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Confidentiality</h4>
                <p className="text-xs text-slate-600 font-medium">100% secure data & NDA protected</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}