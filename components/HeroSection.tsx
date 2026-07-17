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
    <>
      {/* Custom inline style for the growing bar animation */}
      <style jsx>{`
        @keyframes grow-bar {
          0%, 100% { transform: scaleY(0.3); opacity: 0.6; }
          50% { transform: scaleY(1); opacity: 1; }
        }
        .animate-grow {
          transform-origin: bottom;
          animation: grow-bar 2.5s ease-in-out infinite;
        }
      `}</style>

      <section
        id="home"
        /* CHANGED: Background updated to Deep Navy Blue Gradient and height reduced to 90vh */
        className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#020B1E] via-[#05173B] to-[#010612] pt-24 lg:pt-28 pb-10"
        aria-labelledby="hero-heading"
      >
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute inset-0 hero-glow opacity-50" />

        {/* Floating blobs for depth */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#063A9A]/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF6600]/15 rounded-full blur-[100px] animate-float-delayed" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/50 border border-blue-800/50 rounded-full text-xs md:text-sm font-medium text-blue-200 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#FF6600]" />
                E-commerce Growth & Marketing Agency
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-1" />
              </div>

              {/* Headline */}
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-white"
              >
                Helping Businesses Grow Faster Through{' '}
                <span className="text-gradient block mt-1 lg:mt-2">Smarter Digital Experiences</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base lg:text-lg text-slate-400 leading-relaxed max-w-lg">
                We combine strategy, creativity, and technology to help businesses attract customers, build trust, and achieve sustainable growth in competitive markets.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 lg:px-7 lg:py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#063A9A] to-blue-600 rounded-xl lg:rounded-2xl shadow-lg shadow-[#063A9A]/30 hover:shadow-[#063A9A]/60 hover:-translate-y-1 transition-all duration-300 border border-blue-500/30"
                >
                  Start Scaling Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 lg:px-7 lg:py-3.5 text-sm font-bold text-white bg-slate-800/40 border border-slate-700/50 rounded-xl lg:rounded-2xl shadow-sm hover:border-[#FF6600]/50 hover:text-[#FF6600] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right — Actionable Animated Dashboard */}
            <div className="relative flex items-center justify-center mt-8 lg:mt-0">
              {/* Outer spinning rings */}
              <div className="absolute w-72 h-72 lg:w-[420px] lg:h-[420px] border border-[#063A9A]/30 rounded-full animate-spin-slow" />
              <div className="absolute w-56 h-56 lg:w-[340px] lg:h-[340px] border border-[#FF6600]/20 rounded-full" style={{ animationDirection: 'reverse' }} />

              {/* Main Interactive Card */}
              <div className="relative w-[280px] lg:w-[380px] bg-[#030d22]/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-[0_0_40px_rgba(6,58,154,0.3)] p-5 lg:p-6 border border-slate-700/50 hover:border-[#063A9A] transition-colors duration-500 animate-float">
                
                {/* Browser bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-slate-600" />
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-slate-600" />
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-slate-600" />
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/50">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-slate-300 font-medium uppercase tracking-wider">Live Metrics</span>
                  </div>
                </div>

                {/* Website preview mockup */}
                <div className="rounded-xl lg:rounded-2xl overflow-hidden bg-gradient-to-br from-[#063A9A]/30 to-slate-900/80 p-3 lg:p-4 border border-white/5 space-y-3 lg:space-y-4">
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 lg:gap-3">
                    {[
                      { val: '3.2x', label: 'ROAS', color: 'text-[#FF6600]' },
                      { val: '99%', label: 'SEO', color: 'text-blue-400' },
                      { val: '48%', label: 'Conv.', color: 'text-green-400' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-[#020816]/60 rounded-lg lg:rounded-xl p-2 lg:p-3 text-center border border-slate-700/50 hover:border-slate-500 transition-colors">
                        <div className={`font-black text-base lg:text-lg ${stat.color}`}>{stat.val}</div>
                        <div className="text-slate-400 text-[9px] lg:text-[10px] uppercase font-bold tracking-wider mt-0.5 lg:mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Animated Chart area */}
                  <div className="bg-[#020816]/60 rounded-lg lg:rounded-xl p-3 lg:p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-slate-300 font-medium flex items-center gap-1">
                        <Activity className="w-3 h-3 text-[#FF6600]" /> Revenue Growth
                      </span>
                      <span className="text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded-full">+185%</span>
                    </div>
                    
                    {/* CHANGED: Live Growing Bars Animation */}
                    <div className="flex items-end gap-1 lg:gap-1.5 h-12 lg:h-16 border-b border-slate-700/50 pb-1">
                      {[40, 60, 45, 75, 50, 85, 65, 90, 70, 95, 80, 100].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-[#063A9A] to-[#FF6600] animate-grow"
                            style={{ 
                              height: `${h}%`,
                              animationDelay: `${i * 0.1}s` // Staggered delay for wave effect
                            }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating mini cards */}
              <div className="absolute -top-3 -left-2 lg:-left-6 bg-slate-900/90 backdrop-blur-md rounded-xl lg:rounded-2xl px-3 py-2 lg:px-4 lg:py-3 shadow-xl border border-slate-700 animate-float-delayed">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-[10px] lg:text-xs font-bold text-white">Monthly Sales</div>
                    <div className="text-[10px] lg:text-xs text-green-400 font-semibold">Scaling Fast</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-2 lg:-right-6 bg-slate-900/90 backdrop-blur-md rounded-xl lg:rounded-2xl px-3 py-2 lg:px-4 lg:py-3 shadow-xl border border-slate-700 animate-float-slow">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#FF6600]/20 rounded-lg flex items-center justify-center">
                    <Target className="w-3 h-3 lg:w-4 lg:h-4 text-[#FF6600]" />
                  </div>
                  <div>
                    <div className="text-[10px] lg:text-xs font-bold text-white">RTO Rate</div>
                    <div className="text-[10px] lg:text-xs text-[#FF6600] font-semibold">Optimized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CHANGED: Reduced margin-top (mt-12) to bring cards closer and fit in one screen */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 lg:mt-16">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="group bg-[#040e24] hover:bg-[#061435] rounded-xl lg:rounded-2xl p-5 border border-slate-800 hover:border-[#063A9A] hover:shadow-[0_0_20px_rgba(6,58,154,0.2)] transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-10 h-10 lg:w-12 lg:h-12 ${item.bg} group-hover:scale-110 transition-transform duration-300 rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-4`}
                >
                  <div className={`w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-br ${item.color} rounded-md flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="font-bold text-white text-sm lg:text-base group-hover:text-[#FF6600] transition-colors">{item.label}</h3>
                <p className="text-xs lg:text-sm text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}