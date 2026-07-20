'use client';

import { useState } from 'react';
import { ChevronRight, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What types of businesses does Anviaan work with?',
    answer:
      'We work with a wide range of clients — from early-stage startups and local service businesses to established brands and growing e-commerce stores. Our process is designed to adapt to your specific industry, goals, and budget. If you need a professional digital presence or growth strategy, we are the right partner.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Project timelines vary based on scope and complexity. A standard business website typically takes 4–6 weeks from kickoff to launch. E-commerce platforms or custom web applications can take 8–12 weeks. We will give you a clear timeline during the discovery phase and hold to it throughout the project.',
  },
  {
    question: 'Do you offer SEO services separately, or is it included in the website build?',
    answer:
      'Both options are available. Every website we build includes technical SEO foundations — proper HTML structure, meta tags, schema markup, sitemap, and Core Web Vitals optimization. Ongoing SEO (keyword strategy, content, link building, monthly reporting) is available as a separate retainer service tailored to your goals.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'We offer project-based pricing for website builds and monthly retainers for ongoing services like SEO, Google Ads, and maintenance. Pricing varies based on the scope and complexity of the work. We provide transparent proposals with clear line items — no hidden fees or surprise invoices. Contact us for a custom quote.',
  },
  {
    question: 'Will I be able to update the website myself after launch?',
    answer:
      'Yes. We build with content management in mind. Whether your site is built on WordPress, a headless CMS, or a custom admin panel, we ensure you can update content, images, and pages without any technical knowledge. We also provide documentation and a brief training session as part of every handover.',
  },
  {
    question: 'Do you work with clients outside of your local area?',
    answer:
      'Absolutely. We work with clients across multiple countries entirely remotely. Our communication and project management tools — structured check-in calls, shared project boards, and detailed documentation — ensure that distance is never a barrier to delivering excellent work.',
  },
  {
    question: 'What happens after my website is launched?',
    answer:
      'Launch is just the beginning. We offer post-launch support packages that cover security updates, performance monitoring, content changes, and ongoing SEO. You can choose a maintenance plan that fits your needs, or simply reach out for one-off updates. We are here for the long term.',
  },
  {
    question: 'How do you handle revisions and feedback during the design phase?',
    answer:
      'Our design process includes structured feedback rounds built into the timeline. We share wireframes first, then high-fidelity designs, with dedicated revision windows at each stage. This iterative approach ensures the final design reflects your vision while staying within project scope and timeline.',
  },
  {
    question: 'Do you offer Google Ads and social media management as standalone services?',
    answer:
      'Yes. Google Ads management, social media marketing, and SEO are all available as standalone monthly services — you do not need to have your website built by us to take advantage of them. However, clients who use multiple services benefit from a more integrated strategy and cohesive brand experience.',
  },
  {
    question: 'How do I get started?',
    answer:
      'The easiest way to start is to book a free consultation. During this session, we will learn about your business, your goals, and what you need from a digital partner. There is no obligation — just an honest conversation about whether we are the right fit for each other. Click the "Free Consultation" button in the navigation to get started.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // SEO FAQ Schema Data (Dynamically generated from the faqs array)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section
      className="relative py-24 bg-slate-50/50 border-t border-slate-200/80 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Schema injected for FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#063A9A] leading-tight tracking-tight"
          >
            Frequently Asked{' '}
            <span className="text-[#FF6600] block mt-1">Questions</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Answers to the questions we hear most often. If yours is not here,
            just reach out — we are happy to talk.
          </p>
        </div>

        {/* Accordion */}
        <div
          className="space-y-4"
          role="list"
          aria-label="Frequently asked questions"
        >
          {faqs.map((faq, index) => {
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
                  aria-controls={`faq-answer-${index}`}
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
                  id={`faq-answer-${index}`}
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
            We are happy to answer anything not covered here.
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