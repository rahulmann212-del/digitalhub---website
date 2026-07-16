'use client';

import { useState } from 'react';
import { ChevronRight, Plus, Minus } from 'lucide-react';
import { contactFaqs } from './contact-data';

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
      aria-labelledby="contact-faq-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <ChevronRight className="w-4 h-4" />
            FAQ
          </div>
          <h2
            id="contact-faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Engagement &amp;{' '}
            <span className="text-gradient">Partnership</span>{' '}
            Questions
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Clear answers to common questions about our scaling process, timelines, and how we engage with new clients.
          </p>
        </div>

        {/* Accordion */}
        <div
          className="space-y-3"
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
                    ? 'border-blue-200 shadow-lg shadow-blue-500/8'
                    : 'border-slate-100 hover:border-blue-100'
                }`}
              >
                <button
                  className="w-full flex items-start gap-4 p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`contact-faq-answer-${index}`}
                >
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${
                      isOpen
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                    )}
                  </span>
                  <span
                    className={`font-semibold text-sm leading-relaxed transition-colors duration-200 ${
                      isOpen ? 'text-blue-700' : 'text-slate-800'
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
                  <div className="px-6 pb-6 pl-16">
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 rounded-3xl text-center">
          <p className="text-slate-700 font-medium mb-1">
            Still have a question?
          </p>
          <p className="text-sm text-slate-500 mb-4">
            Our Strategy team is happy to clarify any operational details.
          </p>
          <a
            href="mailto:inquiry@Anviaan.com"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            inquiry@Anviaan.com
          </a>
        </div>
      </div>
    </section>
  );
}