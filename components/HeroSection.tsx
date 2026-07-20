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
    color: 'from-[#063A9A] to-blue-500',
    bg: 'bg-blue-100',
  },
  {
    icon: BarChart2,
    label: 'Advanced SEO',
    desc: 'Dominate organic search',
    color: 'from-blue-500 to-cyan-400',
    bg: 'bg-cyan-100',
  },
  {
    icon: LayoutGrid,
    label: 'E-com Development',
    desc: 'High-converting storefronts',
    color: 'from-[#063A9A] to-[#FF6600]',
    bg: 'bg-orange-100',
  },
  {
    icon: Target,
    label: 'D2C Brand Scaling',
    desc: 'Profitable growth funnels',
    color: 'from-[#FF6600] to-orange-400',
    bg: 'bg-orange-100',
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-slate-50 border-b border-slate-200/80 pt-28 lg:pt-32 pb-12 lg:pb-16"
      aria-labelledby="hero-heading"
    >
      {/* Static Background Pattern (No JS state or heavy calculations) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 58, 154, 0.05) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(6, 58, 154, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 rounded-full text-xs md:text-sm font-semibold text-[#063A9A] shadow-sm">
              <Sparkles className="w-4 h-4 text-[#FF6600]" />
              E-commerce Growth & Marketing Agency
              <span className="w-2 h-2 bg-green-500 rounded-full ml-1" />
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.15] tracking-tight text-[#063A9A]"
            >
              Helping Businesses Grow Faster Through{' '}
              <span className="text-[#FF6600] block mt-2">
                Smarter Digital Experiences
              </span>
            </h1>

            <p className="text-base lg:text-lg text-slate-700 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              We combine strategy, creativity, and technology to help businesses attract customers, build trust, and achieve sustainable growth in competitive markets.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="group inline-flex justify-center items-center gap-2 px-6 py-3.5 lg:px-8 lg:py-4 text-sm font-bold text-white bg-gradient-to-r from-[#063A9A] to-blue-600 rounded-xl shadow-lg shadow-[#063A9A]/20 hover:-translate-y-1 transition-all duration-300"
              >
                Start Scaling Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 lg:px-8 lg:py-4 text-sm font-bold text-slate-700 bg-white border border-slate-300 rounded-xl shadow-sm hover:border-[#FF6600] hover:text-[#FF6600] hover:-translate-y-1 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right — Static Clean UI Graphic (Completely lightweight, zero heavy animations for instant LCP) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[380px] bg-[#020b1e] rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-600" />
                  <div className="w-3 h-3 rounded-full bg-slate-600" />
                  <div className="w-3 h-3 rounded-full bg-slate-600" />
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/50">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span className="text-[10px] text-slate-300 font-medium uppercase tracking-wider">Live Metrics</span>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#063A9A]/30 to-slate-900/80 p-4 border border-white/5 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: '3.2x', label: 'ROAS', color: 'text-[#FF6600]' },
                    { val: '99%', label: 'SEO', color: 'text-blue-400' },
                    { val: '48%', label: 'Conv.', color: 'text-green-400' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#020816]/90 rounded-xl p-3 text-center border border-slate-700/50">
                      <div className={`font-black text-lg ${stat.color}`}>{stat.val}</div>
                      <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#020816]/90 rounded-xl p-4 border border-slate-700/50 text-center">
                  <div className="text-xs text-slate-300 font-medium mb-1">Accelerated Business Growth</div>
                  <div className="text-2xl font-black text-green-400">+185% Revenue Boost</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-16 lg:mt-24">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="group bg-white hover:bg-[#fafafa] rounded-xl p-3 lg:p-4 border border-slate-200 hover:border-[#063A9A] transition-all duration-300 flex items-center gap-3 lg:gap-4 shadow-sm"
            >
              <div
                className={`flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 ${item.bg} rounded-lg lg:rounded-xl flex items-center justify-center`}
              >
                <div className={`w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-br ${item.color} rounded-md flex items-center justify-center shadow-md`}>
                  <item.icon className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#063A9A] text-sm lg:text-base leading-tight">
                  {item.label}
                </h3>
                <p className="text-[11px] lg:text-xs text-slate-600 mt-0.5 lg:mt-1 leading-snug font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}