'use client';

import Link from 'next/link';
import { Home, ChevronRight, ArrowRight, Building2, Globe2, Sparkles, Target, TrendingUp, Code, CheckCircle2 } from 'lucide-react';

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
      className="relative pt-28 pb-12 overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-100 to-slate-200/60 border-b border-slate-300/60 shadow-sm"
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

      {/* Background Glow Elements matching Contact/Home */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb with proper spacing */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 mb-6 font-medium">
          <Link href="/" className="flex items-center gap-1 hover:text-[#063A9A] transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#063A9A] font-bold">About</span>
        </nav>

        {/* Split Grid Layout: Text Left, Illustration Right (No empty space in between) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-4">
            <h1
              id="about-hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-[#063A9A]"
            >
              Helping Businesses Grow Through{' '}
              <span className="text-[#FF6600] block mt-1">
                Smarter Digital Strategies
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium max-w-xl">
              At Anviaan, we help businesses build a stronger digital presence, attract the right audience, and turn more visitors into customers. From strategy and website development to performance marketing and SEO, we create tailored solutions that support measurable growth across industries.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF6600] to-orange-500 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-[#063A9A] bg-white border border-slate-200/90 rounded-xl hover:border-[#063A9A] hover:bg-blue-50/50 transition-all duration-300 shadow-sm"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Floating Illustration pinned to the Right */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-end">
            <div className="relative w-64 h-64">
              {/* Central node */}
              <div className="absolute inset-0 m-auto w-24 h-24 bg-gradient-to-br from-[#063A9A] to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20 animate-float">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              {/* Orbiting nodes */}
              {[
                { icon: Globe2, top: '10%', left: '20%', delay: '0s', color: 'from-[#063A9A] to-blue-500' },
                { icon: Sparkles, top: '20%', left: '85%', delay: '0.5s', color: 'from-blue-600 to-[#FF6600]' },
                { icon: ArrowRight, top: '80%', left: '15%', delay: '1s', color: 'from-[#FF6600] to-orange-400' },
              ].map((node, i) => (
                <div
                  key={i}
                  className={`absolute w-11 h-11 bg-gradient-to-br ${node.color} rounded-2xl flex items-center justify-center shadow-md animate-float`}
                  style={{ top: node.top, left: node.left, transform: 'translate(-50%,-50%)', animationDelay: node.delay }}
                >
                  <node.icon className="w-5 h-5 text-white" />
                </div>
              ))}
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 200 200">
                <line x1="100" y1="100" x2="60" y2="40" stroke="#063A9A" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="100" y1="100" x2="170" y2="50" stroke="#063A9A" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="100" y1="100" x2="40" y2="160" stroke="#063A9A" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

        </div>

        {/* Bottom pill stats row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Approach', value: 'Growth Strategy', icon: Target, borderColor: 'border-l-blue-600', bgColor: 'bg-blue-50/50' },
            { label: 'Expertise', value: 'Performance Marketing', icon: TrendingUp, borderColor: 'border-l-[#FF6600]', bgColor: 'bg-orange-50/50' },
            { label: 'Solutions', value: 'Web Development', icon: Code, borderColor: 'border-l-indigo-600', bgColor: 'bg-indigo-50/50' },
            { label: 'Outcome', value: 'Measurable Results', icon: CheckCircle2, borderColor: 'border-l-emerald-600', bgColor: 'bg-emerald-50/50' },
          ].map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.label}
                className={`flex items-center gap-3.5 p-3.5 bg-white/90 backdrop-blur-sm border border-slate-200/90 rounded-2xl shadow-sm border-l-4 ${item.borderColor} hover:shadow-md transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className="w-5 h-5 text-[#063A9A]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">{item.label}</div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#063A9A]">{item.value}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}