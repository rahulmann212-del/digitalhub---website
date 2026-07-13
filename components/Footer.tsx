'use client';

import Link from 'next/link';
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Process', href: '/#process' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/#contact' },
];

const services = [
  { label: 'Performance Marketing', href: '/services' },
  { label: 'D2C Brand Scaling', href: '/services' },
  { label: 'E-Commerce Development', href: '/services' },
  { label: 'Advanced SEO', href: '/services' },
  { label: 'Short-Form Video', href: '/services' },
  { label: 'Multi-Vendor Marketplaces', href: '/services' },
];

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white" role="contentinfo" aria-label="Site footer">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="absolute inset-0 bg-grid opacity-5" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image 
                src="/rankoviologo.png" 
                alt="Rankovio Logo" 
                width={160} 
                height={45} 
                className="h-10 w-auto brightness-0 invert" 
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed">
              We help e-commerce businesses and brands scale through data-driven performance marketing, SEO, and high-converting web development.
            </p>

            <div className="space-y-3">
              <a href="mailto:hello@rankovio.com" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" /> hello@rankovio.com
              </a>
              <a href="tel:+918318724647" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" /> +91-831-872-4647
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Aditya World City, Ghaziabad, 201001</span>
              </div>
            </div>

            <div className="flex gap-2.5" role="list" aria-label="Social media links">
              {socials.map((social) => (
                <a key={social.label} href={social.href} className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300">
                  <social.icon className="w-4 h-4 text-slate-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Services column... (baaki sections waise hi rahenge) */}
          {/* Main Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter section rahenge... */}
        </div>
      </div>
    </footer>
  );
}