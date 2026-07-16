'use client';

import { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

const STORAGE_KEY = 'Anviaan-cookie-consent';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6 animate-fade-in"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="max-w-3xl mx-auto glass shadow-2xl shadow-slate-900/10 border border-white/40 rounded-2xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 mb-1">We use cookies</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                We use cookies to improve your experience and analyze website
                traffic. By clicking &quot;Accept&quot;, you consent to our use of
                cookies. Read our{' '}
                <a href="/privacy-policy" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-all duration-200 flex-1 sm:flex-none"
            >
              <X className="w-4 h-4" />
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-200 flex-1 sm:flex-none"
            >
              <Check className="w-4 h-4" strokeWidth={2.5} />
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
