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

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { label: 'Website Development', href: '#services' },
  { label: 'WordPress Development', href: '#services' },
  { label: 'E-Commerce Development', href: '#services' },
  { label: 'SEO Services', href: '#services' },
  { label: 'Google Ads', href: '#services' },
  { label: 'Social Media Marketing', href: '#services' },
  { label: 'Website Maintenance', href: '#services' },
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
    <footer
      className="bg-slate-900 text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="absolute inset-0 bg-grid opacity-5" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="#home" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold text-white">
                Digital<span className="text-blue-400">Hub</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed">
              We help startups and businesses build a powerful online presence
              through professional web development, SEO, and digital marketing
              that drives real growth.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:hello@digitalhub.agency"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                hello@digitalhub.agency
              </a>
              <a
                href="tel:+15550123456"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                +1 (555) 012-3456
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>New York, NY 10001, USA</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-2.5" role="list" aria-label="Social media links">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`Follow us on ${social.label}`}
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                >
                  <social.icon className="w-4 h-4 text-slate-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 rounded-full" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Newsletter
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Get weekly insights on web design, SEO, and digital marketing
              delivered straight to your inbox.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-3"
              aria-label="Newsletter signup"
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  aria-label="Email address for newsletter"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="mt-3 text-xs text-slate-500">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} DigitalHub Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="w-1 h-1 bg-slate-600 rounded-full" />
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <span className="w-1 h-1 bg-slate-600 rounded-full" />
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
