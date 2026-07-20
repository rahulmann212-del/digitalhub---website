'use client';

import { Mail, Phone, MessageCircle, Clock, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@anviaan.com',
    href: 'mailto:info@anviaan.com',
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-slate-200/80 hover:border-[#063A9A]/30',
    description: 'For strategic audits, partnerships, and executive inquiries.',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 83187 24647',
    href: 'tel:+918318724647',
    color: 'from-[#FF6600] to-orange-500',
    bg: 'bg-orange-50/60',
    border: 'border-slate-200/80 hover:border-[#FF6600]/30',
    description: 'Speak directly with a Senior Growth Strategist.',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 83187 24647',
    href: 'https://wa.me/918318724647',
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-slate-200/80 hover:border-[#063A9A]/30',
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
      className="relative py-24 bg-slate-50/50 border-t border-slate-200/80 overflow-hidden"
      aria-labelledby="contact-cards-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
            <Mail className="w-4 h-4 text-[#FF6600]" />
            Contact Information
          </div>
          <h2
            id="contact-cards-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
          >
            Multiple Ways to{' '}
            <span className="text-[#FF6600] block mt-1">Reach Us</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Choose the method that works best for you. We are available across
            email, phone, and WhatsApp for your convenience.
          </p>
        </div>

        {/* Contact method cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                className={`group flex flex-col p-7 bg-white border ${method.border} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative`}
              >
                <div className={`w-12 h-12 ${method.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm relative z-10`}>
                  <div className={`w-7 h-7 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center shadow-md`}>
                    <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2 relative z-10">
                  {method.label}
                </h3>
                <p className="text-lg font-extrabold text-[#063A9A] mb-2 group-hover:text-[#FF6600] transition-colors relative z-10">
                  {method.value}
                </p>
                <p className="text-sm text-slate-600 font-medium leading-relaxed relative z-10">
                  {method.description}
                </p>
                
                {/* Bottom accent line on hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </a>
            );
          })}
        </div>

        {/* Business Hours + Map placeholder */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Business Hours */}
          <div className="p-8 bg-white border border-slate-200/80 rounded-3xl shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shadow-sm">
                <div className="w-7 h-7 bg-gradient-to-br from-[#063A9A] to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                  <Clock className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-[#063A9A]">Business Hours</h3>
            </div>
            <ul className="space-y-4" role="list">
              {businessHours.map((item) => (
                <li
                  key={item.day}
                  className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-700">{item.day}</span>
                  <span className={`text-sm sm:text-base font-extrabold ${
                    item.hours === 'Closed' ? 'text-[#FF6600]' : 'text-[#063A9A]'
                  }`}>
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-2.5 px-5 py-3 bg-orange-50 border border-orange-100 rounded-xl">
              <span className="w-2.5 h-2.5 bg-[#FF6600] rounded-full animate-pulse shadow-sm" />
              <span className="text-xs sm:text-sm font-bold text-orange-800">
                Typically responds within 1 business day
              </span>
            </div>
          </div>

          {/* Google Map Placeholder */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 min-h-[320px] bg-gradient-to-br from-slate-50 to-blue-50/50 shadow-sm">
            {/* Stylized map background */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
              {/* Roads */}
              <path d="M 0 80 Q 100 70 200 90 T 400 80" stroke="#cbd5e1" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6" />
              <path d="M 0 180 Q 120 170 240 190 T 400 180" stroke="#cbd5e1" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.6" />
              <path d="M 120 0 Q 130 100 110 200 T 120 280" stroke="#cbd5e1" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.6" />
              <path d="M 280 0 Q 270 120 290 200 T 280 280" stroke="#cbd5e1" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6" />
              {/* Park area */}
              <ellipse cx="60" cy="220" rx="50" ry="35" fill="#d1fae5" opacity="0.5" />
              {/* Water */}
              <path d="M 300 220 Q 350 210 400 230 L 400 280 L 300 280 Z" fill="#dbeafe" opacity="0.6" />
            </svg>

            {/* Location pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 w-14 h-14 bg-[#FF6600]/20 rounded-full animate-pulse-ring" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#FF6600] to-orange-500 rounded-full flex items-center justify-center shadow-xl shadow-orange-500/30 border-2 border-white">
                  <MapPin className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="mt-4 px-5 py-2.5 bg-white rounded-xl shadow-lg border border-slate-100 text-center">
                <p className="text-sm font-extrabold text-[#063A9A]">Anviaan HQ</p>
                <p className="text-xs font-medium text-slate-500">Aditya World City</p>
              </div>
            </div>

            {/* Map overlay label */}
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-bold text-slate-500 border border-slate-200/80 shadow-sm">
              Map Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}