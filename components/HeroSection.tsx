'use client';

import Link from 'next/link';
import {
  TrendingUp,
  BarChart2,
  LayoutGrid,
  Target,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const trustItems = [
  {
    icon: TrendingUp,
    label: 'Performance Ads',
    desc: 'High ROI & Lower CAC',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: BarChart2,
    label: 'Advanced SEO',
    desc: 'Dominate organic search',
    color: 'from-sky-500 to-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: LayoutGrid,
    label: 'E-com Development',
    desc: 'High-converting storefronts',
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Target,
    label: 'D2C Brand Scaling',
    desc: 'Profitable growth funnels',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-32"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 hero-glow" />

      {/* Floating blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky-400/8 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700">
              <Sparkles className="w-4 h-4 text-blue-500" />
              E-commerce Growth & Marketing Agency
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900"
            >
              Scale Your Brand With{' '}
              <span className="text-gradient block">Data-Driven Growth</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              Rankovio is a performance marketing and e-commerce development agency. We engineer high-converting storefronts and run advanced digital campaigns to optimize your ROI, slash RTO costs, and scale your D2C brand exponentially.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                Start Scaling Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-300 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust badges inline */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-2">
                {[
                  'bg-gradient-to-br from-blue-500 to-blue-700',
                  'bg-gradient-to-br from-sky-400 to-blue-500',
                  'bg-gradient-to-br from-blue-600 to-indigo-500',
                ].map((c, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 ${c} rounded-full border-2 border-white`}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-slate-700">Multi-Vendor</span> & D2C Experts
              </p>
            </div>
          </div>

          {/* Right — Illustration */}
          <div className="relative flex items-center justify-center">
            {/* Outer ring */}
            <div className="absolute w-80 h-80 lg:w-[440px] lg:h-[440px] border border-blue-100 rounded-full animate-spin-slow" />
            <div className="absolute w-64 h-64 lg:w-[360px] lg:h-[360px] border border-blue-50 rounded-full" style={{ animationDirection: 'reverse' }} />

            {/* Main card */}
            <div className="relative w-72 lg:w-96 glass rounded-3xl shadow-2xl shadow-blue-500/15 p-6 animate-float">
              {/* Browser bar */}
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 ml-2 h-6 bg-slate-100 rounded-lg flex items-center px-2">
                  <span className="text-xs text-slate-400">https://your-d2c-brand.com</span>
                </div>
              </div>

              {/* Website preview mockup */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 p-4 space-y-3">
                {/* Header mockup */}
                <div className="flex items-center justify-between">
                  <div className="h-3 w-20 bg-white/40 rounded-full" />
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-2 w-8 bg-white/30 rounded-full" />
                    ))}
                  </div>
                </div>
                {/* Hero mockup */}
                <div className="bg-white/10 rounded-xl p-3 space-y-2">
                  <div className="h-4 w-32 bg-white/50 rounded-full" />
                  <div className="h-3 w-full bg-white/30 rounded-full" />
                  <div className="h-3 w-3/4 bg-white/30 rounded-full" />
                  <div className="mt-3 flex gap-2">
                    <div className="h-7 w-20 bg-white rounded-lg" />
                    <div className="h-7 w-16 bg-white/30 rounded-lg" />
                  </div>
                </div>
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  {['3.2x', '99/100', '48%'].map((v, i) => (
                    <div key={i} className="bg-white/15 rounded-lg p-2 text-center">
                      <div className="text-white font-bold text-sm">{v}</div>
                      <div className="text-white/60 text-xs">{['ROAS', 'SEO', 'Conv. Rate'][i]}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart area */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Revenue Growth</span>
                  <span className="text-green-500 font-semibold">+185%</span>
                </div>
                <div className="flex items-end gap-1 h-12">
                  {[40, 55, 45, 65, 70, 60, 80, 75, 90, 85, 95, 100].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600 to-sky-400 opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Floating mini cards */}
            <div className="absolute -top-4 -left-4 lg:-left-8 glass rounded-2xl px-3 py-2 shadow-lg animate-float-delayed">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-700">Monthly Sales</div>
                  <div className="text-xs text-green-500 font-semibold">Scaling Fast</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 lg:-right-8 glass rounded-2xl px-3 py-2 shadow-lg animate-float-slow">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-700">RTO Rate</div>
                  <div className="text-xs text-blue-500 font-semibold">Minimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="glass card-hover rounded-2xl p-5 border border-white/80"
            >
              <div
                className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-3`}
              >
                <div className={`w-5 h-5 bg-gradient-to-br ${item.color} rounded-md flex items-center justify-center`}>
                  <item.icon className="w-3 h-3 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="font-bold text-slate-800 text-sm">{item.label}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}