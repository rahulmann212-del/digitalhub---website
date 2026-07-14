import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactCards from '@/components/contact/ContactCards';
import WhyContactRankovio from '@/components/contact/WhyContactRankovio';
import ContactFAQ from '@/components/contact/ContactFAQ';

export const metadata: Metadata = {
  title: 'Contact Rankovio — Let\'s Grow Your Business Together',
  description:
    'Get in touch with Rankovio for SEO, Local SEO, Google Ads management, social media marketing, website development, and content marketing. Request a free proposal or schedule a free consultation today.',
  keywords:
    'contact digital marketing agency, SEO consultation, free marketing proposal, Google Ads management, social media marketing services, website development enquiry, content marketing',
  openGraph: {
    title: 'Contact Rankovio — Let\'s Grow Your Business Together',
    description:
      'Whether you need better search rankings, more qualified leads, or a professional website, Rankovio is ready to help. Request a free proposal or schedule a consultation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Rankovio',
  },
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />

      {/* Form section */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
            {/* Form */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Send Us a Message
                </h2>
              </div>
              <ContactForm />
            </div>

            {/* Sidebar — quick info */}
            <aside className="space-y-6 lg:sticky lg:top-28">
              {/* Quick contact */}
              <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                  Quick Contact
                </h3>
                <ul className="space-y-4" role="list">
                  <li className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">Email</p>
                      <a href="mailto:hello@rankovio.com" className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors truncate">
                        hello@rankovio.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-sky-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">Phone</p>
                      <a href="tel:+15551234567" className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">WhatsApp</p>
                      <a href="https://wa.me/15551234567" className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Response promise */}
              <div className="relative overflow-hidden p-6 bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 rounded-3xl shadow-lg">
                <div className="absolute inset-0 bg-grid opacity-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/15 rounded-full" />
                <div className="relative z-10">
                  <h3 className="text-base font-extrabold text-white mb-2">
                    Our Response Promise
                  </h3>
                  <p className="text-sm text-blue-100/70 leading-relaxed mb-4">
                    Every enquiry receives a personal response from a real member
                    of our team — not an autoresponder — within one business day.
                  </p>
                  <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/15 border border-emerald-400/25 rounded-xl">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-emerald-300">
                      Typically responds within 4 hours
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ContactCards />
      <WhyContactRankovio />
      <ContactFAQ />
      <Footer />
    </main>
  );
}
