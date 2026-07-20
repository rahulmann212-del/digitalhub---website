'use client';

import Link from 'next/link';
import { Home, ChevronRight, ArrowRight, Building2, Globe2, Sparkles } from 'lucide-react';

export default function AboutHero() {
  // SEO AboutPage Schema Data
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Anviaan",
      "url": "https://www.anviaan.com",
      "description": "Anviaan is a premier Digital Marketing and Web Development Company dedicated to helping businesses achieve measurable digital growth.",
      "founder": {
        "@type": "Person",
        "name": "Vijay Mishra"
      }
    }
  };

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
        "name": "About",
        "item": "https://www.anviaan.com/about"
      }
    ]
  };

  return (
    <section
      className="relative min-h-[72vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900"
      aria-labelledby="about-hero-heading"
    >
      {/* Schemas injected for About Page & Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 60% 120%, rgba(37,99,235,0.35) 0%, transparent 65%)',
        }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 10% 20%, rgba(14,165,233,0.18) 0%, transparent 60%)',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-24 right-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-16 left-16 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl animate-float-delayed pointer-events-none" />

      {/* Decorative rings */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full hidden lg:block pointer-events-none" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[380px] h-[380px] border border-white/5 rounded-full hidden lg:block pointer-events-none" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[260px] h-[260px] border border-blue-500/15 rounded-full hidden lg:block pointer-events-none" />

      {/* Abstract illustration — right side */}
      <div className="absolute right-8 lg:right-20 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-64 h-64 pointer-events-none">
        <div className="relative w-48 h-48">
          {/* Central node */}
          <div className="absolute inset-0 m-auto w-20 h-20 bg-gradient-to-br from-[#063A9A] to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/40 animate-float">
            <Building2 className="w-9 h-9 text-white" />
          </div>
          {/* Orbiting nodes */}
          {[
            { icon: Globe2, top: '0%', left: '50%', delay: '0s', color: 'from-[#063A9A] to-blue-500' },
            { icon: Sparkles, top: '50%', left: '90%', delay: '0.5s', color: 'from-blue-700 to-[#FF6600]' },
            { icon: ArrowRight, top: '85%', left: '20%', delay: '1s', color: 'from-[#FF6600] to-orange-500' },
          ].map((node, i) => (
            <div
              key={i}
              className={`absolute w-10 h-10 bg-gradient-to-br ${node.color} rounded-2xl flex items-center justify-center shadow-lg`}
              style={{ top: node.top, left: node.left, transform: 'translate(-50%,-50%)', animationDelay: node.delay }}
            >
              <node.icon className="w-5 h-5 text-white" />
            </div>
          ))}
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
            <line x1="100" y1="100" x2="100" y2="0" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="180" y2="100" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="40" y2="170" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-blue-200/80 mb-8 font-medium">
          <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-blue-400/50" />
          <span className="text-white font-bold">About</span>
        </nav>

        <div className="max-w-2xl space-y-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/30 rounded-full text-sm font-bold text-blue-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#FF6600]" />
            Growth Focused Digital Marketing Agency
          </div>

          {/* Heading */}
          <h1
            id="about-hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-white"
          >
            Helping Businesses Grow with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-[#FF6600] bg-clip-text text-transparent">
              Smarter Digital Strategies
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-medium">
            At Anviaan, we help businesses build a stronger digital presence, attract the right audience, and turn more visitors into customers. From strategy and website development to performance marketing and SEO, we create tailored solutions that support measurable growth across industries.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#FF6600] to-orange-500 rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-white/10 border-2 border-white/20 rounded-2xl hover:border-white/40 hover:bg-white/15 transition-all duration-300 shadow-sm backdrop-blur-sm"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Bottom pill stats row */}
        <div className="mt-14 flex flex-wrap gap-4">
          {[
            { label: 'Approach', value: 'Growth Strategy' },
            { label: 'Expertise', value: 'Performance Marketing' },
            { label: 'Solutions', value: 'Web Development' },
            { label: 'Outcome', value: 'Measurable Results' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-5 py-3 bg-white/10 border border-white/15 rounded-2xl backdrop-blur-md shadow-sm"
            >
              <div className="text-sm sm:text-base font-extrabold text-white">{item.value}</div>
              <div className="text-xs sm:text-sm text-blue-200/80 font-semibold">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}