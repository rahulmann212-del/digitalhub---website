'use client';

import { Mail, Phone, MessageCircle, Clock, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'inquiry@Anviaan.com',
    href: 'mailto:inquiry@Anviaan.com',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    description: 'For strategic audits, partnerships, and executive inquiries.',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 83187 24647',
    href: 'tel:+918318724647',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    description: 'Speak directly with a Senior Growth Strategist.',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 83187 24647',
    href: 'https://wa.me/918318724647',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    description: 'Direct line for rapid execution and operational queries.',
  },
];

const businessHours = [
  { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM – 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function ContactCards() {
  return (
    <section
      className="relative py-20 bg-white overflow-hidden"
      aria-labelledby="contact-cards-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Mail className="w-4 h-4" />
            Contact Information
          </div>
          <h2
            id="contact-cards-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Multiple Ways to{' '}
            <span className="text-gradient">Reach Us</span>
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Choose the method that works best for you. We are available across
            email, phone, and WhatsApp for your convenience.
          </p>
        </div>

        {/* Contact method cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                className={`group flex flex-col p-7 bg-white border ${method.border} rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-500/8 card-hover shine-border`}
              >
                <div className={`w-12 h-12 ${method.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-7 h-7 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {method.label}
                </h3>
                <p className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {method.value}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {method.description}
                </p>
              </a>
            );
          })}
        </div>

        {/* Business Hours + Map placeholder */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Business Hours */}
          <div className="p-7 bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-100 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Business Hours</h3>
            </div>
            <ul className="space-y-3" role="list">
              {businessHours.map((item) => (
                <li
                  key={item.day}
                  className="flex items-center justify-between py-2.5 border-b border-slate-200/60 last:border-0"
                >
                  <span className="text-sm font-semibold text-slate-700">{item.day}</span>
                  <span className={`text-sm font-medium ${
                    item.hours === 'Closed' ? 'text-red-500' : 'text-slate-500'
                  }`}>
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-2 px-4 py-2.5 bg-emerald-50 border border-emerald-100 rounded-xl">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-emerald-700">
                Typically responds within 1 business day
              </span>
            </div>
          </div>

          {/* Google Map Placeholder */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 min-h-[280px] bg-gradient-to-br from-slate-100 to-blue-50">
            {/* Stylized map background */}
            <div className="absolute inset-0 bg-grid opacity-40" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
              {/* Roads */}
              <path d="M 0 80 Q 100 70 200 90 T 400 80" stroke="#cbd5e1" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M 0 180 Q 120 170 240 190 T 400 180" stroke="#cbd5e1" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M 120 0 Q 130 100 110 200 T 120 280" stroke="#cbd5e1" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M 280 0 Q 270 120 290 200 T 280 280" stroke="#cbd5e1" strokeWidth="4" fill="none" strokeLinecap="round" />
              {/* Park area */}
              <ellipse cx="60" cy="220" rx="50" ry="35" fill="#d1fae5" opacity="0.6" />
              {/* Water */}
              <path d="M 300 220 Q 350 210 400 230 L 400 280 L 300 280 Z" fill="#dbeafe" opacity="0.7" />
            </svg>

            {/* Location pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 w-14 h-14 bg-blue-500/20 rounded-full animate-pulse-ring" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/40 border-2 border-white">
                  <MapPin className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
              </div>
              <div className="mt-3 px-4 py-2 bg-white rounded-xl shadow-lg border border-slate-100 text-center">
                <p className="text-xs font-bold text-slate-800">Anviaan HQ</p>
                <p className="text-xs text-slate-500">Aditya World City</p>
              </div>
            </div>

            {/* Map overlay label */}
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg text-xs font-medium text-slate-500 border border-slate-200/60">
              Map Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}