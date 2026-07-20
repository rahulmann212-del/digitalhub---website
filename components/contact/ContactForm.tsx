'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      full_name: formData.get('full_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      website_url: formData.get('website_url') || null, // Optional
      message: formData.get('message'),
    };

    try {
      const { error } = await supabase.from('contact_submissions').insert(payload);
      if (error) throw error;
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white border border-slate-200/80 rounded-3xl p-10 shadow-xl shadow-blue-500/5 text-center">
        <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-extrabold text-[#063A9A] mb-2">Request Received</h3>
        <p className="text-slate-600 font-medium mb-8">Our strategy team will review your project and get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="text-sm font-extrabold text-[#FF6600] hover:underline">
          Send another enquiry &rarr;
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl shadow-blue-500/5">
      <form onSubmit={handleSubmit} className="space-y-6">
        {status === 'error' && (
          <div className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl text-sm font-semibold border border-red-100">
            <AlertCircle className="w-5 h-5 flex-shrink-0" /> {errorMsg}
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-[#063A9A] uppercase tracking-wide mb-2">Full Name *</label>
            <input 
              name="full_name" 
              required 
              placeholder="John Doe"
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#063A9A]/20 focus:border-[#063A9A]/50 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-800" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#063A9A] uppercase tracking-wide mb-2">Phone Number *</label>
            <input 
              name="phone" 
              type="tel" 
              required 
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#063A9A]/20 focus:border-[#063A9A]/50 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-800" 
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#063A9A] uppercase tracking-wide mb-2">Email Address *</label>
          <input 
            name="email" 
            type="email" 
            required 
            placeholder="john@company.com"
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#063A9A]/20 focus:border-[#063A9A]/50 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-800" 
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#063A9A] uppercase tracking-wide mb-2">
            Website URL <span className="text-slate-400 font-semibold normal-case ml-1">(Optional)</span>
          </label>
          <input 
            name="website_url" 
            type="url" 
            placeholder="https://www.yourwebsite.com"
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#063A9A]/20 focus:border-[#063A9A]/50 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-800" 
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#063A9A] uppercase tracking-wide mb-2">Project Brief *</label>
          <textarea 
            name="message" 
            required 
            rows={4} 
            placeholder="Tell us about your project goals and how we can help..."
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#063A9A]/20 focus:border-[#063A9A]/50 outline-none transition-all resize-none placeholder:text-slate-400 font-medium text-slate-800" 
          />
        </div>

        <button 
          disabled={status === 'submitting'} 
          className="w-full py-4 bg-gradient-to-r from-[#FF6600] to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? <Loader2 className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
          Send Growth Request
        </button>
      </form>
    </div>
  );
}