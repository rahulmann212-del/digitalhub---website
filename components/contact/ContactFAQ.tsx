'use client';

import { useState } from 'react';
import { ChevronRight, Plus, Minus } from 'lucide-react';
import { contactFaqs } from './contact-data';

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="relative py-24 bg-slate-50/50 border-t border-slate-200/80 overflow-hidden"
      aria-labelledby="contact-faq-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-[#063A9A] mb-6 shadow-sm">
            <ChevronRight className="w-4 h-4 text-[#FF6600]" />
            FAQ
          </div>
          <h2
            id="contact-faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
          >
            Engagement &amp;{' '}
            <span className="text-[#FF6600] block mt-1">Partnership Questions</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Clear answers to common questions about our scaling process, timelines, and how we engage with new clients.
          </p>
        </div>

        {/* Accordion */}
        <div
          className="space-y-4"
          role="list"
          aria-label="Frequently asked questions about partnering with Anviaan"
        >
          {contactFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                role="listitem"
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-[#063A9A]/30 shadow-lg shadow-blue-500/5'
                    : 'border-slate-200/80 hover:border-blue-200'
                }`}
              >
                <button
                  className="w-full flex items-start gap-4 p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`contact-faq-answer-${index}`}
                >
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-xl flex items-center justify-center transition-all duration-300 mt-0.5 shadow-sm ${
                      isOpen
                        ? 'bg-gradient-to-br from-[#063A9A] to-blue-600 text-white'
                        : 'bg-blue-50 text-[#063A9A]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" strokeWidth={3} />
                    ) : (
                      <Plus className="w-3.5 h-3.5" strokeWidth={3} />
                    )}
                  </span>
                  <span
                    className={`font-extrabold text-sm sm:text-base leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-[#063A9A]' : 'text-slate-800'
                    }`}
                  >
                    {faq.question}
                  </span>
                </button>

                <div
                  id={`contact-faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-17">
                    <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 p-8 bg-gradient-to-br from-blue-50/60 to-orange-50/30 border border-blue-100 rounded-3xl text-center shadow-sm">
          <p className="text-slate-800 font-bold text-base sm:text-lg mb-1">
            Still have a question?
          </p>
          <p className="text-sm text-slate-600 font-medium mb-4">
            Our Strategy team is happy to clarify any operational details.
          </p>
          <a
            href="mailto:inquiry@Anviaan.com"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#063A9A] hover:text-[#FF6600] transition-colors"
          >
            inquiry@Anviaan.com &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}