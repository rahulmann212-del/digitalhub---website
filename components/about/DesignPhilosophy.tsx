'use client';

import { ChevronRight, Eye, Zap, Accessibility, LayoutTemplate } from 'lucide-react';

const principles = [
  {
    title: 'Form Follows Function',
    desc: 'Every visual element earns its place. We design with intention — removing noise, reducing friction, and guiding users toward meaningful actions without confusion.',
    icon: LayoutTemplate,
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
  },
  {
    title: 'Simplicity as a Feature',
    desc: 'Complexity is easy. Clarity is hard. We work to distill complicated ideas into clean, intuitive interfaces that users understand immediately and navigate effortlessly.',
    icon: Eye,
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
  },
  {
    title: 'Accessibility by Default',
    desc: 'Good design works for everyone. We build with inclusive principles — proper contrast ratios, keyboard navigation, semantic HTML, and ARIA attributes — not as afterthoughts, but as foundations.',
    icon: Accessibility,
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
  },
  {
    title: 'Performance is Design',
    desc: 'A beautiful site that loads slowly is a broken experience. We treat performance as a core design constraint — every image, animation, and interaction is evaluated against its impact on speed.',
    icon: Zap,
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-indigo-50',
  },
];

export default function DesignPhilosophy() {
  return (
    <section
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      aria-labelledby="design-philosophy-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — illustration panel */}
          <div className="relative order-2 lg:order-1">
            {/* Outer container */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-sky-500 p-8 shadow-2xl shadow-blue-500/25">
              <div className="absolute inset-0 bg-grid opacity-15" />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/8 rounded-full" />

              {/* UI mockup blocks */}
              <div className="relative z-10 space-y-4">
                {/* Top bar */}
                <div className="flex items-center gap-2">
                  <div className="h-8 flex-1 bg-white/20 rounded-xl flex items-center px-3 gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/50" />
                    <div className="h-2 w-24 bg-white/40 rounded-full" />
                  </div>
                  <div className="h-8 w-8 bg-white/25 rounded-xl" />
                </div>

                {/* Two-column cards row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/15 rounded-2xl p-4 space-y-2">
                    <div className="w-8 h-8 bg-white/30 rounded-xl" />
                    <div className="h-2.5 w-16 bg-white/50 rounded-full" />
                    <div className="h-2 w-full bg-white/25 rounded-full" />
                    <div className="h-2 w-3/4 bg-white/25 rounded-full" />
                  </div>
                  <div className="bg-white/25 rounded-2xl p-4 space-y-2 border border-white/30">
                    <div className="w-8 h-8 bg-white/40 rounded-xl" />
                    <div className="h-2.5 w-14 bg-white/60 rounded-full" />
                    <div className="h-2 w-full bg-white/30 rounded-full" />
                    <div className="h-2 w-2/3 bg-white/30 rounded-full" />
                  </div>
                </div>

                {/* Wide card */}
                <div className="bg-white/15 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/30 rounded-lg" />
                    <div className="h-2.5 w-20 bg-white/50 rounded-full" />
                    <div className="ml-auto h-2 w-10 bg-green-400/60 rounded-full" />
                  </div>
                  <div className="flex items-end gap-1 h-16">
                    {[35, 55, 40, 70, 60, 80, 65, 90, 75, 95, 85, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-white/30 rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* CTA row */}
                <div className="flex gap-3">
                  <div className="h-10 flex-1 bg-white rounded-xl" />
                  <div className="h-10 w-24 bg-white/25 border border-white/30 rounded-xl" />
                </div>
              </div>
            </div>

            {/* Floating labels */}
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2 shadow-xl animate-float-delayed">
              <div className="text-xs font-bold text-blue-700">Accessibility</div>
              <div className="text-xs text-slate-500">WCAG 2.1 AA</div>
            </div>
            <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-2 shadow-xl animate-float">
              <div className="text-xs font-bold text-blue-700">Performance</div>
              <div className="text-xs text-slate-500">100/100 Score</div>
            </div>
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
                <ChevronRight className="w-4 h-4" />
                Design Thinking
              </div>
              <h2
                id="design-philosophy-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
              >
                Our Design{' '}
                <span className="text-gradient">Philosophy</span>
              </h2>
              <p className="mt-5 text-slate-500 leading-relaxed">
                Design is not just how something looks. It is how it works, how
                it feels, and how effectively it serves the people using it. Our
                design philosophy is built on four enduring principles.
              </p>
            </div>

            <div className="space-y-4">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="group flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl card-hover"
                >
                  <div
                    className={`w-10 h-10 ${principle.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div
                      className={`w-6 h-6 bg-gradient-to-br ${principle.color} rounded-lg flex items-center justify-center`}
                    >
                      <principle.icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm mb-1.5">
                      {principle.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
