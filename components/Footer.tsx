'use client';

import Link from 'next/link';
import {
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
  { label: 'About Us', href: '/about' },
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
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image src="/rankoviologo.png" alt="Rankovio Logo" width={250} height={80} className="w-40 h-auto brightness-0 invert" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              We help e-commerce businesses and brands scale through data-driven performance marketing, SEO, and high-converting web development.
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-500" /> hello@rankovio.com</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-500" /> +91-831-872-4647</div>
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-blue-500 mt-1" /> Aditya World City, Ghaziabad, 201001</div>
            </div>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <s.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6">QUICK LINKS</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              {quickLinks.map((l) => <li key={l.label}><Link href={l.href} className="hover:text-blue-400">{l.label}</Link></li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-6">SERVICES</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              {services.map((s) => <li key={s.label}><Link href={s.href} className="hover:text-blue-400">{s.label}</Link></li>)}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-6">NEWSLETTER</h3>
            <p className="text-sm text-slate-400 mb-4">Get weekly growth insights.</p>
            <input type="email" placeholder="Enter your email" className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-sm mb-3" />
            <button className="w-full py-3 bg-blue-600 text-sm font-bold rounded-lg hover:bg-blue-500">Subscribe</button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Rankovio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-blue-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-400">Terms of Service</Link>
            <Link href="#" className="hover:text-blue-400">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}