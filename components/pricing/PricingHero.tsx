'use client';

import Link from 'next/link';
import {
  Home, ChevronRight, ArrowRight, Calendar, FileText, Sparkles,
  TrendingUp, MapPin, Target, Rocket,
} from 'lucide-react';

const orbitNodes = [
  { icon: TrendingUp, top: '0%',   left: '50%', delay: '0s',   color: 'from-sky-500 to-blue-500' },
  { icon: MapPin,    top: '50%',  left: '92%',  delay: '0.5s', color: 'from-blue-600 to-indigo-500' },
  { icon: Target,    top: '88%',  left: '20%',  delay: '1s',   color: 'from-amber-500 to-orange-500' },
  { icon: Rocket,    top: '88%',  left: '80%',  delay: '1.5s', color: 'from-indigo-500 to-blue-600' },
];

export default function PricingHero() {
  return (
    <section
      className="relative min-h-[78vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900"
      aria-labelledby="pricing-hero-heading"
    >
      {/* Background layers */}
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

      {/* Right decorative illustration */}
      <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center">
        <div className="relative w-64 h-64">
          {/* Center node */}
          <div className="absolute inset-0 m-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-sky-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/40 animate-float">
            <Sparkles className="w-9 h-9 text-white" />
          </div>
          {/* Orbiting nodes */}
          {orbitNodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <div
                key={i}
                className={`absolute w-10 h-10 bg-gradient-to-br ${node.color} rounded-2xl flex items-center justify-center shadow-lg`}
                style={{ top: node.top, left: node.left, transform: 'translate(-50%,-50%)', animationDelay: node.delay }}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
            );
          })}
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
            <line x1="100" y1="100" x2="100" y2="0"   stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="184" y2="100" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="40"  y2="176" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="160" y2="176" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-blue-300/70 mb-8">
          <Link href="/" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-blue-400/40" />
          <span className="text-blue-300 font-medium">Pricing</span>
        </nav>

        <div className="max-w-2xl space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/25 rounded-full text-sm font-medium text-blue-300">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Custom Growth Solutions
          </div>

          <h1
            id="pricing-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Digital Growth Solutions{' '}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Built Around Your Business
            </span>
          </h1>

          <p className="text-lg text-blue-100/70 leading-relaxed max-w-xl">
            Every business has different goals. We create customized SEO and
            digital marketing strategies that deliver measurable growth instead
            of offering one size fits all packages.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-900 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              Request Custom Proposal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white border-2 border-white/20 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Book Free Strategy Call
            </Link>
          </div>
        </div>

        {/* Bottom trust pills */}
        <div className="mt-14 flex flex-wrap gap-4">
          {[
            'No lock-in contracts',
            'Custom strategy, not packages',
            'Transparent monthly reporting',
            'Cancel anytime',
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-white/8 border border-white/10 rounded-2xl backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              <span className="text-sm font-medium text-blue-100">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
