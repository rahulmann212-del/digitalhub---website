'use client';

import { useState } from 'react';
import { Send, CalendarCheck, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { contactServices, budgetOptions, timelineOptions } from './contact-data';
import { supabase } from '@/lib/supabase';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [submitType, setSubmitType] = useState<'proposal' | 'consultation'>('proposal');
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
      full_name: formData.get('full_name') as string,
      business_name: (formData.get('business_name') as string) || null,
      email: formData.get('email') as string,
      phone: (formData.get('phone') as string) || null,
      website_url: (formData.get('website_url') as string) || null,
      services_required: selectedServices.length > 0 ? selectedServices : null,
      message: (formData.get('message') as string) || null,
      monthly_budget: (formData.get('monthly_budget') as string) || null,
      project_timeline: (formData.get('project_timeline') as string) || null,
      submission_type: submitType,
    };

    try {
      const { error } = await supabase.from('contact_submissions').insert(payload);
      if (error) throw error;
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setSelectedServices([]);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-xl shadow-blue-500/5">
        <div className="flex flex-col items-center text-center py-10">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25">
            <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Message Sent Successfully</h3>
          <p className="text-slate-500 leading-relaxed max-w-md mb-8">
            Thank you for reaching out to Rankovio. A member of our team will
            personally review your enquiry and respond within one business day.
            We look forward to helping you grow.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-100 rounded-3xl shadow-xl shadow-blue-500/5 overflow-hidden">
      {/* Form header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-500 p-7 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/8 rounded-full" />
        <div className="relative z-10">
          <h3 className="text-xl font-extrabold text-white">Tell Us About Your Project</h3>
          <p className="mt-1.5 text-sm text-white/75 leading-relaxed">
            Fill out the form below and we will prepare a custom proposal or
            schedule your free strategy call.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-7 space-y-6">
        {/* Error banner */}
        {status === 'error' && (
          <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-700">Submission failed</p>
              <p className="text-xs text-red-600 mt-0.5">{errorMsg}</p>
            </div>
          </div>
        )}

        {/* Full Name + Business Name */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="full_name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              required
              placeholder="Jane Smith"
              className="w-full px-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 focus:bg-white transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="business_name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Business Name
            </label>
            <input
              type="text"
              id="business_name"
              name="business_name"
              placeholder="Acme Inc."
              className="w-full px-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="jane@acme.com"
              className="w-full px-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 focus:bg-white transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (555) 123-4567"
              className="w-full px-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        {/* Website URL */}
        <div>
          <label htmlFor="website_url" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Website URL
          </label>
          <input
            type="url"
            id="website_url"
            name="website_url"
            placeholder="https://www.acme.com"
            className="w-full px-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 focus:bg-white transition-all duration-200"
          />
        </div>

        {/* Services Required */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Services Required <span className="text-slate-400 normal-case font-medium">(select all that apply)</span>
          </label>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {contactServices.map((service) => {
              const isSelected = selectedServices.includes(service.id);
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                    isSelected
                      ? 'bg-blue-50 border-blue-300 text-blue-700 shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-blue-200 hover:bg-blue-50/50'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      isSelected ? 'bg-blue-600' : 'bg-white border border-slate-300'
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />}
                  </span>
                  {service.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your business goals, current challenges, and what you are hoping to achieve..."
            className="w-full px-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 focus:bg-white transition-all duration-200 resize-none"
          />
        </div>

        {/* Budget + Timeline */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="monthly_budget" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Monthly Marketing Budget
            </label>
            <select
              id="monthly_budget"
              name="monthly_budget"
              defaultValue=""
              className="w-full px-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 focus:bg-white transition-all duration-200"
            >
              <option value="" disabled>Select a range</option>
              {budgetOptions.map((opt) => (
                <option key={opt.id} value={opt.label}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="project_timeline" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Project Timeline
            </label>
            <select
              id="project_timeline"
              name="project_timeline"
              defaultValue=""
              className="w-full px-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 focus:bg-white transition-all duration-200"
            >
              <option value="" disabled>Select a timeline</option>
              {timelineOptions.map((opt) => (
                <option key={opt.id} value={opt.label}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit buttons */}
        <div className="pt-2 space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="submit"
              onClick={() => setSubmitType('proposal')}
              disabled={status === 'submitting'}
              className="group flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === 'submitting' && submitType === 'proposal' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
              Request Free Proposal
            </button>
            <button
              type="submit"
              onClick={() => setSubmitType('consultation')}
              disabled={status === 'submitting'}
              className="group flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-2xl hover:border-blue-200 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' && submitType === 'consultation' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <CalendarCheck className="w-4 h-4" />
              )}
              Schedule Free Consultation
            </button>
          </div>
          <p className="text-center text-xs text-slate-400">
            We respond within one business day. Your information is never shared with third parties.
          </p>
        </div>
      </form>
    </div>
  );
}
