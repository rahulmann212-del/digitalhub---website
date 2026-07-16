'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
}

export default function FloatingWhatsApp({
  phoneNumber = '15551234567',
  message = 'Hello Anviaan, I would like to discuss my project.',
}: FloatingWhatsAppProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 pl-3 pr-4 py-3 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="relative flex-shrink-0">
        <span className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
        <MessageCircle className="relative w-6 h-6" strokeWidth={2} />
      </span>
      <span className="hidden sm:block text-sm font-bold">Chat on WhatsApp</span>
    </a>
  );
}
