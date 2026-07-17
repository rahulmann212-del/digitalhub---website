'use client';

import Link from 'next/link';
import {
  TrendingUp,
  BarChart2,
  LayoutGrid,
  Target,
  ArrowRight,
  Sparkles,
  Activity
} from 'lucide-react';

const trustItems = [
  {
    icon: TrendingUp,
    label: 'Performance Ads',
    desc: 'High ROI & Lower CAC',
    color: 'from-[#063A9A] to-blue-500',
    bg: 'bg-blue-900/20',
  },
  {
    icon: BarChart2,
    label: 'Advanced SEO',
    desc: 'Dominate organic search',
    color: 'from-blue-500 to-cyan-400',
    bg: 'bg-cyan-900/20',
  },
  {
    icon: LayoutGrid,
    label: 'E-com Development',
    desc: 'High-converting storefronts',
    color: 'from-[#063A9A] to-[#FF6600]',
    bg: 'bg-orange-900/20',
  },
  {
    icon: Target,
    label: 'D2C Brand Scaling',
    desc: 'Profitable growth funnels',
    color: 'from-[#FF6600] to-orange-400',
    bg: 'bg-orange-900/20',
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a] pt-32"
      aria-labelledby="hero-heading"
    >
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 hero-glow opacity-60" />

      {/* Floating blobs for depth */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#063A9A]/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FF6600]/10 rounded-full blur-[100px] animate-float-delayed" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm font-medium text-slate-300 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#FF6600]" />
              E-commerce Growth & Marketing Agency
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-1" />
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white"
            >
              Helping Businesses Grow Faster Through{' '}
              <span className="text-gradient block mt-2">Smarter Digital Experiences</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              We combine strategy, creativity, and technology to help businesses attract customers, build trust, and achieve sustainable growth in competitive markets.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#063A9A] to-blue-600 rounded-2xl shadow-lg shadow-[#063A9A]/30 hover:shadow-[#063A9A]/60 hover:-translate-y-1 transition-all duration-300 border border-blue-500/30"
              >
                Start Scaling Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-slate-800/50 border border-slate-700 rounded-2xl shadow-sm hover:border-[#FF6600]/50 hover:text-[#FF6600] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right — Actionable Animated Dashboard */}
          <div className="relative flex items-center justify-center mt-10 lg:mt-0">
            {/* Outer spinning rings */}
            <div className="absolute w-80 h-80 lg:w-[440px] lg:h-[440px] border border-[#063A9A]/30 rounded-full animate-spin-slow" />
            <div className="absolute w-64 h-64 lg:w-[360px] lg:h-[360px] border border-[#FF6600]/20 rounded-full" style={{ animationDirection: 'reverse' }} />

            {/* Main Interactive Card */}
            <div className="relative w-72 lg:w-96 bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(6,58,154,0.3)] p-6 border border-slate-700 hover:border-[#063A9A] transition-colors duration-500 animate-float">
              
              {/* Browser bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
                <div className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Live Metrics</span>
                </div>
              </div>

              {/* Website preview mockup */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#063A9A]/40 to-slate-800 p-4 border border-white/5 space-y-4">
                
                {/* Stats row with glowing effect */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: '3.2x', label: 'ROAS', color: 'text-[#FF6600]' },
                    { val: '99%', label: 'SEO', color: 'text-blue-400' },
                    { val: '48%', label: 'Conv.', color: 'text-green-400' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-950/50 rounded-xl p-3 text-center border border-slate-700 hover:border-slate-500 transition-colors">
                      <div className={`font-black text-lg ${stat.color}`}>{stat.val}</div>
                      <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Animated Chart area */}
                <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-slate-400 font-medium flex items-center gap-1">
                      <Activity className="w-3 h-3 text-[#FF6600]" /> Revenue Growth
                    </span>
                    <span className="text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded-full">+185%</span>
                  </div>
                  
                  {/* CSS Animated Live Bars */}
                  <div className="flex items-end gap-1.5 h-16">
                    {[40, 55, 45, 65, 70, 60, 80, 75, 90, 85, 95, 100].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-[#063A9A] to-[#FF6600] animate-pulse"
                          style={{ 
                            height: `${h}%`,
                            animationDelay: `${i * 0.15}s`,
                            animationDuration: '1.5s'
                          }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating mini card 1 */}
            <div className="absolute -top-4 -left-4 lg:-left-8 bg-slate-800/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-slate-700 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Monthly Sales</div>
                  <div className="text-xs text-green-400 font-semibold">Scaling Fast</div>
                </div>
              </div>
            </div>

            {/* Floating mini card 2 */}
            <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-slate-800/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-slate-700 animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FF6600]/20 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-[#FF6600]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">RTO Rate</div>
                  <div className="text-xs text-[#FF6600] font-semibold">Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust Cards (Redesigned for Dark Mode with Hover Glow) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-24">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="group bg-[#0f172a] hover:bg-slate-800 rounded-2xl p-6 border border-slate-800 hover:border-[#063A9A] hover:shadow-[0_0_25px_rgba(6,58,154,0.3)] transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-12 h-12 ${item.bg} group-hover:scale-110 transition-transform duration-300 rounded-xl flex items-center justify-center mb-4`}
              >
                <div className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-md flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-[#FF6600] transition-colors">{item.label}</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}