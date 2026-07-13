import { ChevronRight, Check, X } from 'lucide-react';

const rows = [
  {
    topic: 'Design Approach',
    us: 'Custom-designed to your brand, audience, and conversion goals',
    typical: 'Template-based with surface-level customization',
    weight: true,
  },
  {
    topic: 'SEO Integration',
    us: 'Technical SEO is built into every project from day one',
    typical: 'Added as a plugin or separate afterthought',
    weight: false,
  },
  {
    topic: 'Performance',
    us: 'Core Web Vitals and load time are treated as design constraints',
    typical: 'Performance reviewed only if a client complains',
    weight: false,
  },
  {
    topic: 'Communication',
    us: 'Structured check-ins, shared project boards, and proactive updates',
    typical: 'Sparse updates — you have to chase for progress',
    weight: true,
  },
  {
    topic: 'Post-Launch',
    us: 'Long-term partner: maintenance, growth, and ongoing support',
    typical: 'Project closes at launch; support is ad hoc or unavailable',
    weight: false,
  },
  {
    topic: 'Code Quality',
    us: 'Clean, documented, maintainable code any developer can work with',
    typical: 'Proprietary builders or undocumented legacy code',
    weight: true,
  },
  {
    topic: 'Pricing Transparency',
    us: 'Detailed proposals with clear line items — no hidden fees',
    typical: 'Vague estimates with scope creep billing surprises',
    weight: false,
  },
  {
    topic: 'Accessibility',
    us: 'WCAG-compliant markup built in as a standard practice',
    typical: 'Accessibility rarely considered or checked',
    weight: true,
  },
];

const pillars = [
  {
    title: 'Outcomes Over Outputs',
    desc: 'We track what matters to your business — leads, sales, rankings, and revenue — not just deliverables ticked off a list.',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
  },
  {
    title: 'No Vendor Lock-in',
    desc: 'You own everything we build: code, accounts, content, and assets. We never hold your project hostage to keep you paying.',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
  },
  {
    title: 'Honest Scoping',
    desc: 'We would rather give you a realistic timeline and budget upfront than win the project with optimistic numbers we cannot deliver.',
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    title: 'Right-Sized for You',
    desc: 'We scale our approach to your goals — a startup gets focused, high-impact work; a growing company gets a comprehensive strategy.',
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
  },
];

export default function ServicesComparison() {
  return (
    <section
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="comparison-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-50/40 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            The DigitalHub Standard
          </div>
          <h2
            id="comparison-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Why Businesses{' '}
            <span className="text-gradient">Choose DigitalHub</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            The difference is not just in what we deliver — it is in how we
            work. Here is what you can expect when you partner with us.
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-lg shadow-blue-500/5 mb-16">
          <table className="w-full min-w-[640px]" role="table">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left p-5 pl-7 text-sm font-bold text-slate-500 uppercase tracking-wider w-[22%]">
                  What We Compare
                </th>
                <th className="text-left p-5 w-[40%]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-blue-700">DigitalHub</div>
                      <div className="text-xs text-slate-400 font-normal">Our standard approach</div>
                    </div>
                  </div>
                </th>
                <th className="text-left p-5 w-[38%]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-500">Typical Agency</div>
                      <div className="text-xs text-slate-400 font-normal">Common industry shortcuts</div>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.topic}
                  className={`border-b border-slate-50 transition-colors ${
                    row.weight ? 'bg-blue-50/30 hover:bg-blue-50/50' : 'bg-white hover:bg-slate-50/60'
                  }`}
                >
                  <td className="p-5 pl-7">
                    <span className="text-sm font-bold text-slate-700">{row.topic}</span>
                  </td>
                  <td className="p-5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-700 leading-relaxed">{row.us}</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-slate-400" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-slate-400 leading-relaxed">{row.typical}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Four principle cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group p-6 bg-white border border-slate-100 rounded-3xl card-hover shine-border"
            >
              <div
                className={`w-10 h-10 ${pillar.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className={`w-5 h-5 bg-gradient-to-br ${pillar.color} rounded-lg`} />
              </div>
              <h3 className="font-bold text-slate-800 text-sm mb-2 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
