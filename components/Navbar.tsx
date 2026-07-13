'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href.split('#')[0]) && href.split('#')[0] !== '/';
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-blue-500/5 border-b border-white/50'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Rankovio - Go to homepage"
          >
            <Image
              src="/rankoviologo.png"
              alt="Rankovio Logo"
              width={160}
              height={45}
              className="object-contain h-10 w-auto"
              priority
            />
            {/* Note: Agar aapke logo ki PNG mein 'Rankovio' naam nahi likha hai aur aap text dikhana chahte hain, 
                toh niche wali line ka code use karein. Agar logo mein naam pehle se hai, toh is line ki zaroorat nahi hai. */}
            {/* <span className="text-xl font-bold text-slate-900 tracking-tight">Rankovio</span> */}
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group ${
                    isActive(link.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1.5 left-4 right-4 h-0.5 bg-blue-600 rounded-full transition-transform duration-300 origin-left ${
                      isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/#contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-blue-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass rounded-2xl p-4 mt-2 shadow-xl">
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-slate-100">
              <Link
                href="/#contact"
                className="block text-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg shadow-blue-500/25"
                onClick={() => setIsOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}