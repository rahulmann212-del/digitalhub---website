'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Mail, Phone, MapPin, ChevronRight,
  Linkedin, Facebook, Instagram, MessageCircle, Send, Globe, Pin,
} from 'lucide-react';

const footerLinks = {
  company: {
    title: 'Company',
    links: [
      { label: 'About Anviaan', href: '/about' },
      { label: 'Industries We Serve', href: '/industries' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  marketing: {
    title: 'Marketing',
    links: [
      { label: 'Google Ads', href: '/services#google-ads' },
      { label: 'Social Media', href: '/services#social-media' },
      { label: 'Content Marketing', href: '/services#content-marketing' },
      { label: 'Performance Tracking', href: '/services#performance' },
    ],
  },
  seo: {
    title: 'SEO Services',
    links: [
      { label: 'Search Optimization', href: '/services#seo' },
      { label: 'Local SEO', href: '/services#local-seo' },
      { label: 'Technical SEO', href: '/services#technical-seo' },
      { label: 'SEO Audits', href: '/services#seo-audit' },
    ],
  },
  web: {
    title: 'Development',
    links: [
      { label: 'Custom Websites', href: '/services#web-dev' },
      { label: 'Landing Pages', href: '/services#landing-pages' },
      { label: 'E-Commerce Sites', href: '/services#ecommerce' },
      { label: 'Web Maintenance', href: '/services#maintenance' },
    ],
  },
};

const socials = [
  { icon: Linkedin,      label: 'LinkedIn',   href: 'https://www.linkedin.com/company/anviaan' },
  { icon: Facebook,      label: 'Facebook',   href: 'https://www.facebook.com/profile.php?id=61592047228193' },
  { icon: Instagram,     label: 'Instagram',  href: 'https://www.instagram.com/anviaan.co/' },
  { icon: Globe,         label: 'X (Twitter)',href: 'https://x.com/anviaanhq' },
  { icon: Pin,           label: 'Pinterest',  href: 'https://in.pinterest.com/anviaan/' },
  { icon: MessageCircle, label: 'WhatsApp',   href: 'https://wa.me/918318724647' }, 
  { icon: Mail,          label: 'Email',      href: 'mailto:info@anviaan.com' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms and Conditions', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const linkSections = Object.values(footerLinks);

  return (
    <footer
      className="relative bg-slate-900 text-white z-20"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          
          {/* Brand + contact */}
          <div className="lg:col-span-2 space-y-6">
            
            <Link href="/" className="inline-block group mb-2" aria-label="Anviaan — Go to homepage">
              <img 
                src="/ANVIAAN.png" 
                alt="Anviaan Logo" 
                className="w-48 lg:w-56 h-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Anviaan helps businesses increase search visibility, generate
              qualified leads, and grow online revenue through customized SEO
              and digital marketing strategies.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:inquiry@Anviaan.com"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                inquiry@Anviaan.com
              </a>
              
              <a
                href="tel:+918318724647"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                +91 83187 24647
              </a>
              
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Aditya World City</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-2.5" role="list" aria-label="Social media links">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.label}`}
                    className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4 text-slate-400 hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
                {section.title}
              </h3>
              <ul className="space-y-3" role="list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                    >
                      <ChevronRight className="w-3 h-3 text-blue-500/50 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 pt-10 border-t border-slate-800">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-extrabold text-white mb-2">
                Get Growth Insights in Your Inbox
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Join 2,000+ business owners receiving our best articles on SEO,
                digital marketing, and online growth. No spam, ever.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3" aria-label="Newsletter signup">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-label="Email address for newsletter"
                required
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
                {!subscribed && <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Anviaan. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            {legalLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-4">
                {i > 0 && <span className="w-1 h-1 bg-slate-600 rounded-full" />}
                <Link 
                  href={link.href} 
                  className="text-slate-300 hover:text-blue-400 hover:underline transition-colors cursor-pointer relative z-30"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}