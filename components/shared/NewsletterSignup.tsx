'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

interface NewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonLabel?: string;
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export default function NewsletterSignup({
  title = 'Get Growth Insights in Your Inbox',
  subtitle = 'Join 2,000+ business owners receiving our best articles on SEO, digital marketing, and online growth. No spam, ever.',
  placeholder = 'you@company.com',
  buttonLabel = 'Subscribe',
  variant = 'dark',
  compact = false,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const isDark = variant === 'dark';

  return (
    <div className={`relative overflow-hidden rounded-3xl ${compact ? 'p-6' : 'p-8'} ${
      isDark
        ? 'bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 shadow-xl shadow-slate-900/20'
        : 'bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100'
    }`}>
      {isDark && <div className="absolute inset-0 bg-grid opacity-10" />}
      <div className={`absolute -top-8 -right-8 w-32 h-32 ${isDark ? 'bg-blue-500/15' : 'bg-blue-100/40'} rounded-full`} />

      <div className="relative z-10">
        <div className={`w-11 h-11 ${isDark ? 'bg-white/15' : 'bg-white'} backdrop-blur-sm border ${isDark ? 'border-white/25' : 'border-blue-100'} rounded-2xl flex items-center justify-center mb-5`}>
          <Mail className={`w-5 h-5 ${isDark ? 'text-blue-300' : 'text-blue-600'}`} />
        </div>
        <h3 className={`text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        {!compact && (
          <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-blue-100/70' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        )}

        {submitted ? (
          <div className="flex items-center gap-2.5 px-4 py-3 bg-emerald-500/15 border border-emerald-400/30 rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span className="text-sm font-semibold text-emerald-300">You're subscribed. Welcome aboard!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${compact ? '' : 'mt-1'}`}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              aria-label="Email address for newsletter"
              required
              className={`flex-1 px-4 py-3 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all ${
                isDark
                  ? 'bg-white/10 border-white/15 text-white placeholder-blue-200/40 focus:border-blue-400/40'
                  : 'bg-white border-blue-200 text-slate-800 placeholder-slate-400 focus:border-blue-400'
              }`}
            />
            <button
              type="submit"
              className={`group flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-xl whitespace-nowrap transition-all duration-300 ${
                isDark
                  ? 'bg-white text-slate-900 hover:shadow-lg hover:-translate-y-0.5'
                  : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5'
              }`}
            >
              {buttonLabel}
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}

        {!compact && (
          <p className={`text-xs mt-4 ${isDark ? 'text-blue-300/50' : 'text-slate-400'}`}>
            Join 2,000+ business owners. Unsubscribe anytime.
          </p>
        )}
      </div>
    </div>
  );
}
