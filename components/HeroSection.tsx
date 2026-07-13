'use client';

import Link from 'next/link';
import {
  TrendingUp,
  Target,
  ShoppingCart,
  Users,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const trustItems = [
  {
    icon: TrendingUp,
    label: 'Performance Marketing',
    desc: 'Data-driven campaigns',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Target,
    label: 'D2C Brand Scaling',
    desc: 'End-to-end growth strategies',
    color: 'from-sky-500 to-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: ShoppingCart,
    label: 'E-commerce Optimization',
    desc: 'Maximize ROAS & Sales',
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Users,
    label: 'Marketplace Development',
    desc: 'Custom multi-vendor setups',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-50"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 hero-glow opacity-50" />

      {/* Floating blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky-400/8 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-sm font-semibold text-blue-800 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Growth Marketing & E-commerce Agency
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900"
            >
              Scale Your Brand &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400 block pb-2">
                Dominate E-commerce
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-medium">
              We specialize in performance marketing, D2C brand scaling, and high-converting e-commerce development to drive exponential revenue growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                Start Scaling Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-xl hover:border-blue-300 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300"
              >
                View Our Strategies
              </Link>
            </div>

            {/* Trust badges inline */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[
                  'bg-gradient-to-br from-blue-500 to-blue-700',
                  'bg-gradient-to-br from-sky-400 to-blue-500',
                  'bg-gradient-to-br from-blue-600 to-indigo-500',
                ].map((c, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 ${c} rounded-full border-2 border-white shadow-sm`}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-600 font-medium">
                <span className="font-bold text-slate-800 text-base">₹10Cr+</span>{' '}
                Revenue Generated for Clients
              </p>
            </div>
          </div>

          {/* Right — Illustration */}
          <div className="relative flex items-center justify-center">
            {/* Outer ring */}
            <div className="absolute w-80 h-80 lg:w-[440px] lg:h-[440px] border border-blue-200/50 rounded-full animate-spin-slow" />
            <div className="absolute w-64 h-64 lg:w-[360px] lg:h-[360px] border border-blue-100/50 rounded-full" style={{ animationDirection: 'reverse' }} />

            {/* Main card */}
            <div className="relative w-72 lg:w-96 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 p-6 animate-float border border-white">
              {/* Header/Nav */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-bold text-slate-800">Campaign Performance</div>
                <div className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-1 rounded-md">Live</div>
              </div>

              {/* Data Cards */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-4 border border-blue-100/50">
                  <div className="text-xs text-slate-500 mb-1">Total Sales (30 Days)</div>
                  <div className="text-2xl font-black text-slate-800">₹24,50,000</div>
                  <div className="text-xs text-green-500 font-medium mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +42% vs last month
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                     <div className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider">ROAS</div>
                     <div className="text-slate-800 font-bold text-lg">4.8x</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                     <div className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider">Conversion Rate</div>
                     <div className="text-slate-800 font-bold text-lg">3.2%</div>
                  </div>
                </div>
              </div>

              {/* Chart area */}
              <div className="mt-6">
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 55, 45, 65, 70, 60, 80, 75, 90, 85, 95, 100].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-sky-400"
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Floating mini cards */}
            <div className="absolute -top-4 -left-4 lg:-left-8 bg-white backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-slate-100 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500">Orders Today</div>
                  <div className="text-sm text-slate-900 font-black">1,432</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-white backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-slate-100 animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500">CPA Reduced</div>
                  <div className="text-sm text-green-600 font-black">-28%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="bg-white hover:bg-slate-50 transition-colors duration-300 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md"
            >
              <div
                className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4`}
              >
                <div className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-sm`}>
                  <item.icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 text-base">{item.label}</h3>
              <p className="text-sm text-slate-500 mt-1 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}