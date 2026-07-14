'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';

interface StickyMobileCTAProps {
  phoneHref?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export default function StickyMobileCTA({
  phoneHref = 'tel:+15551234567',
  ctaHref = '/contact',
  ctaLabel = 'Free Consultation',
}: StickyMobileCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sm:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="glass border-t border-white/30 shadow-2xl shadow-slate-900/10">
        <div className="flex items-center gap-3 p-3">
          <a
            href={phoneHref}
            aria-label="Call Rankovio"
            className="flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex-shrink-0"
          >
            <Phone className="w-5 h-5" />
          </a>
          <Link
            href={ctaHref}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/25"
          >
            <Calendar className="w-4 h-4" />
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
