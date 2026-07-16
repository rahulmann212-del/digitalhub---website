'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { contactServices } from './contact-data';
import { supabase } from '@/lib/supabase';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState('');

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

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
      services_required: selectedServices.length > 0 ? selectedServices : null,
      message: formData.get('message'),
    };

    try {
      const { error } = await supabase.from('contact_submissions').insert(payload);
      if (error) throw error;
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setSelectedServices([]);
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-xl shadow-blue-500/5 text-center">
        <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Request Received</h3>
        <p className="text-slate-600 mb-8">Our strategy team will review your project and get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="text-sm font-bold text-blue-600 hover:underline">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-blue-500/5">
      <form onSubmit={handleSubmit} className="space-y-6">
        {status === 'error' && (
          <div className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl text-sm">
            <AlertCircle className="w-5 h-5" /> {errorMsg}
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name *</label>
            <input name="full_name" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Phone Number *</label>
            <input name="phone" type="tel" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address *</label>
          <input name="email" type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Website URL <span className="text-slate-400 font-medium normal-case">(Optional)</span></label>
          <input name="website_url" type="url" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-3">Interested In</label>
          <div className="grid sm:grid-cols-2 gap-2">
            {contactServices.map((s) => (
              <button key={s.id} type="button" onClick={() => toggleService(s.id)} className={`px-4 py-3 text-xs font-bold rounded-xl border transition-all ${selectedServices.includes(s.id) ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Project Brief *</label>
          <textarea name="message" required rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none" />
        </div>

        <button disabled={status === 'submitting'} className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
          {status === 'submitting' ? <Loader2 className="animate-spin w-4 h-4" /> : <Send className="w-4 h-4" />}
          Send Growth Request
        </button>
      </form>
    </div>
  );
}