import Link from 'next/link';
import { ArrowRight, Globe2, MessageSquare, Lightbulb, ChevronRight } from 'lucide-react';

const universals = [
  {
    icon: Globe2,
    title: 'Industry-Specific Strategy',
    desc: 'We research your sector before we write a line of code — understanding your competitive landscape, customer expectations, and the specific digital levers that drive results.',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
  },
  {
    icon: Lightbulb,
    title: 'Sector-Informed UX',
    desc: 'User expectations vary significantly between industries. We design with your sector\'s conventions and trust signals in mind — not a generic template applied to every client.',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
  },
  {
    icon: MessageSquare,
    title: 'Honest, Relevant Communication',
    desc: 'Every industry has its own language and audience. Our content and UX writing is aligned with how your customers think, search, and decide — not generic marketing copy.',
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-indigo-50',
  },
];

export default function IndustriesCTA() {
  return (
    <section
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="industries-cta-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-50/40 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Universal approach cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-5">
              <ChevronRight className="w-4 h-4" />
              Our Approach
            </div>
            <h2
              id="industries-cta-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              Industry Knowledge Meets{' '}
              <span className="text-gradient">Digital Expertise</span>
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Whatever sector you operate in, our process starts with understanding
              your business context before recommending any digital solution.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {universals.map((u) => {
              const Icon = u.icon;
              return (
                <div
                  key={u.title}
                  className="group p-6 bg-white border border-slate-100 rounded-3xl card-hover shine-border"
                >
                  <div className={`w-11 h-11 ${u.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-6 h-6 bg-gradient-to-br ${u.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm mb-2">{u.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{u.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dark banner CTA */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 p-10 md:p-16 shadow-2xl shadow-slate-900/25">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sky-500/8 rounded-full blur-3xl" />
          <div className="absolute top-8 right-8 w-40 h-40 border border-white/5 rounded-full" />
          <div className="absolute bottom-8 left-8 w-28 h-28 border border-white/5 rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/25 rounded-full text-sm font-medium text-blue-300 mb-5">
                <Globe2 className="w-4 h-4" />
                Don&apos;t See Your Sector?
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                We Work Across{' '}
                <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                  Many More Industries
                </span>
              </h3>
              <p className="mt-4 text-blue-100/70 leading-relaxed">
                If your sector is not listed, that does not mean we cannot help.
                Reach out and tell us about your business — we will give you an
                honest assessment of how we can support your growth online.
              </p>
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
                {['Legal & Professional Services', 'Non-Profit', 'Automotive', 'Beauty & Wellness', 'Events'].map(
                  (s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 bg-white/8 border border-white/12 rounded-full text-xs text-blue-200 font-medium"
                    >
                      {s}
                    </span>
                  )
                )}
                <span className="px-3 py-1.5 bg-white/8 border border-white/12 rounded-full text-xs text-blue-200 font-medium">
                  + many more
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/#contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold text-base rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Discuss Your Industry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 px-8 py-4 text-white font-bold border-2 border-white/20 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                View Our Services
              </Link>
              <p className="text-center text-xs text-blue-300/50">
                Free consultation · No obligation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
