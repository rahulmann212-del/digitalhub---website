'use client';

import { useState, MouseEvent } from 'react';
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
  // State for Parallax Cursor Movement
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (divided by a factor to make it subtle)
    const x = (e.clientX - centerX) / 40;
    const y = (e.clientY - centerY) / 40;
    
    setTransform({ x, y });
  };

  return (
    <>
      <style jsx>{`
        @keyframes revenue-growth {
          0% { transform: scaleY(0); opacity: 0; }
          15% { transform: scaleY(1); opacity: 1; }
          85% { transform: scaleY(1); opacity: 1; }
          100% { transform: scaleY(0); opacity: 0; }
        }
        .animate-revenue {
          transform-origin: bottom;
          animation: revenue-growth 5s ease-out infinite;
        }
      `}</style>

      <section
        id="home"
        onMouseMove={handleMouseMove}
        // CHANGED: Explicitly set background to slate-50 (tinted) and added a bottom border to differentiate from the next white section
        className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-slate-50 border-b border-slate-200/80 pt-28 lg:pt-32 pb-12 lg:pb-16 transition-colors duration-500"
        aria-labelledby="hero-heading"
      >
        
        {/* PARALLAX LAYER 1: Interactive Dot Pattern Grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none transition-transform duration-200 ease-out opacity-40"
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px)`,
            backgroundImage: 'radial-gradient(circle at 2px 2px, #063A9A 2px, transparent 0)',
            backgroundSize: '48px 48px'
          }}
        />

        {/* PARALLAX LAYER 2: Fast moving floating shapes for 3D effect */}
        <div
          className="absolute inset-0 z-0 pointer-events-none transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${transform.x * -1.5}px, ${transform.y * -1.5}px)`,
          }}
        >
          {/* Floating Orange Circle */}
          <div className="absolute top-[20%] left-[10%] w-8 h-8 rounded-full border-[3px] border-[#FF6600]/20" />
          {/* Floating Blue Plus */}
          <div className="absolute top-[60%] right-[15%] text-[#063A9A]/10 text-4xl font-bold">+</div>
          {/* Floating Orange Dot */}
          <div className="absolute bottom-[20%] left-[40%] w-3 h-3 rounded-full bg-[#FF6600]/20" />
        </div>

        {/* Static Ambient Glow Blobs */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-[80px] animate-float pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-300/15 rounded-full blur-[80px] animate-float-delayed pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 rounded-full text-xs md:text-sm font-semibold text-[#063A9A] shadow-sm shadow-blue-100/50">
                <Sparkles className="w-4 h-4 text-[#FF6600]" />
                E-commerce Growth & Marketing Agency
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-1" />
              </div>

              {/* Headline */}
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.15] tracking-tight text-slate-900"
              >
                Helping Businesses Grow Faster Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#063A9A] to-[#FF6600] block mt-2">
                  Smarter Digital Experiences
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                We combine strategy, creativity, and technology to help businesses attract customers, build trust, and achieve sustainable growth in competitive markets.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="#contact"
                  className="group inline-flex justify-center items-center gap-2 px-6 py-3.5 lg:px-8 lg:py-4 text-sm font-bold text-white bg-gradient-to-r from-[#063A9A] to-blue-600 rounded-xl shadow-lg shadow-[#063A9A]/20 hover:shadow-[#063A9A]/40 hover:-translate-y-1 transition-all duration-300"
                >
                  Start Scaling Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3.5 lg:px-8 lg:py-4 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-[#FF6600]/50 hover:text-[#FF6600] hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right — Actionable Animated Dashboard (Dark Contrast Maintained) */}
            <div className="relative flex items-center justify-center mt-12 lg:mt-0">
              {/* Outer spinning rings */}
              <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] border border-blue-200 rounded-full animate-spin-slow pointer-events-none" />
              <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px] border border-orange-200 rounded-full pointer-events-none" style={{ animationDirection: 'reverse' }} />

              {/* Main Interactive Card */}
              <div className="relative w-[290px] sm:w-[340px] lg:w-[380px] bg-[#020b1e] rounded-2xl lg:rounded-3xl shadow-[0_20px_50px_rgba(6,58,154,0.15)] p-4 lg:p-6 border border-slate-700/50 hover:border-[#FF6600]/50 transition-colors duration-500 animate-float z-10">
                
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
                      <div key={i} className="bg-[#020816]/80 rounded-lg lg:rounded-xl p-2 lg:p-3 text-center border border-slate-700/50 hover:border-slate-500 transition-colors">
                        <div className={`font-black text-base lg:text-lg ${stat.color}`}>{stat.val}</div>
                        <div className="text-slate-400 text-[9px] lg:text-[10px] uppercase font-bold tracking-wider mt-0.5 lg:mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Animated Chart area */}
                  <div className="bg-[#020816]/80 rounded-lg lg:rounded-xl p-3 lg:p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-slate-300 font-medium flex items-center gap-1">
                        <Activity className="w-3 h-3 text-[#FF6600]" /> Revenue Growth
                      </span>
                      <span className="text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded-full">+185%</span>
                    </div>
                    
                    {/* Cascade Left-to-Right True Growth Chart */}
                    <div className="flex items-end gap-1 lg:gap-1.5 h-12 lg:h-16 border-b border-slate-700/50 pb-1">
                      {[15, 25, 30, 45, 55, 60, 75, 80, 85, 90, 95, 100].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-[#063A9A] to-[#FF6600] animate-revenue"
                            style={{ 
                              height: `${h}%`,
                              animationDelay: `${i * 0.15}s`
                            }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating mini cards */}
              <div className="absolute -top-4 -left-2 sm:-left-6 lg:-left-10 bg-white/95 backdrop-blur-md rounded-xl lg:rounded-2xl px-3 py-2 lg:px-4 lg:py-3 shadow-xl border border-slate-200 animate-float-delayed z-20">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-7 h-7 lg:w-9 lg:h-9 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-[10px] lg:text-xs font-bold text-slate-800">Monthly Sales</div>
                    <div className="text-[10px] lg:text-xs text-green-600 font-semibold">Scaling Fast</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-2 sm:-right-6 lg:-right-10 bg-white/95 backdrop-blur-md rounded-xl lg:rounded-2xl px-3 py-2 lg:px-4 lg:py-3 shadow-xl border border-slate-200 animate-float-slow z-20">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-7 h-7 lg:w-9 lg:h-9 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Target className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#FF6600]" />
                  </div>
                  <div>
                    <div className="text-[10px] lg:text-xs font-bold text-slate-800">RTO Rate</div>
                    <div className="text-[10px] lg:text-xs text-[#FF6600] font-semibold">Optimized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Cards (Horizontal Layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-16 lg:mt-24">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="group bg-white hover:bg-[#fafafa] rounded-xl p-3 lg:p-4 border border-slate-200 hover:border-[#063A9A] hover:shadow-[0_8px_30px_rgba(6,58,154,0.1)] transition-all duration-300 cursor-pointer flex items-center gap-3 lg:gap-4 shadow-sm"
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 ${item.bg} group-hover:scale-105 transition-transform duration-300 rounded-lg lg:rounded-xl flex items-center justify-center`}
                >
                  <div className={`w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-br ${item.color} rounded-md flex items-center justify-center shadow-md`}>
                    <item.icon className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm lg:text-base group-hover:text-[#FF6600] transition-colors leading-tight">{item.label}</h3>
                  <p className="text-[11px] lg:text-xs text-slate-500 mt-0.5 lg:mt-1 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}