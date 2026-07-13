'use client';

import Link from 'next/link';
import { Home, ChevronRight, ArrowRight, Building2, Globe2, Sparkles } from 'lucide-react';

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[72vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900"
      aria-labelledby="about-hero-heading"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 60% 120%, rgba(37,99,235,0.35) 0%, transparent 65%)',
        }}
      />
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 10% 20%, rgba(14,165,233,0.18) 0%, transparent 60%)',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-24 right-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-16 left-16 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl animate-float-delayed" />

      {/* Decorative rings */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full hidden lg:block" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[380px] h-[380px] border border-white/5 rounded-full hidden lg:block" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[260px] h-[260px] border border-blue-500/15 rounded-full hidden lg:block" />

      {/* Abstract illustration — right side */}
      <div className="absolute right-8 lg:right-20 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-64 h-64">
        <div className="relative w-48 h-48">
          {/* Central node */}
          <div className="absolute inset-0 m-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-sky-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/40 animate-float">
            <Building2 className="w-9 h-9 text-white" />
          </div>
          {/* Orbiting nodes */}
          {[
            { icon: Globe2, top: '0%', left: '50%', delay: '0s', color: 'from-sky-500 to-blue-500' },
            { icon: Sparkles, top: '50%', left: '90%', delay: '0.5s', color: 'from-blue-600 to-indigo-500' },
            { icon: ArrowRight, top: '85%', left: '20%', delay: '1s', color: 'from-cyan-500 to-blue-500' },
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-blue-300/70 mb-8">
          <Link href="/" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-blue-400/40" />
          <span className="text-blue-300 font-medium">About</span>
        </nav>

        <div className="max-w-2xl space-y-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/25 rounded-full text-sm font-medium text-blue-300">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Our Story
          </div>

          {/* Heading */}
          <h1
            id="about-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white"
          >
            We Are{' '}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              DigitalHub
            </span>
          </h1>

          <p className="text-lg text-blue-100/70 leading-relaxed max-w-xl">
            A modern digital agency built on a simple belief — every business
            deserves a powerful online presence. We combine strategy, design, and
            technology to help you grow with confidence.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-900 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Work With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white border-2 border-white/20 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Bottom pill stats row */}
        <div className="mt-14 flex flex-wrap gap-4">
          {[
            { label: 'Founded', value: '2019' },
            { label: 'Services', value: '7+' },
            { label: 'Countries Served', value: '10+' },
            { label: 'Focus', value: 'Results' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-5 py-3 bg-white/8 border border-white/10 rounded-2xl backdrop-blur-sm"
            >
              <div className="text-lg font-extrabold text-white">{item.value}</div>
              <div className="text-sm text-blue-200/60 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
