'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

interface CallNowButtonProps {
  phoneNumber?: string;
  label?: string;
}

export default function CallNowButton({
  phoneNumber = '+15551234567',
  label = 'Call Now',
}: CallNowButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={`tel:${phoneNumber.replace(/[^+\d]/g, '')}`}
      aria-label={`Call Rankovio at ${phoneNumber}`}
      className={`fixed bottom-36 right-4 sm:bottom-20 sm:right-6 z-40 flex items-center gap-2.5 pl-3 pr-4 py-3 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="relative flex-shrink-0">
        <span className="absolute inset-0 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        <Phone className="relative w-6 h-6" strokeWidth={2} />
      </span>
      <span className="hidden sm:block text-sm font-bold">{label}</span>
    </a>
  );
}
