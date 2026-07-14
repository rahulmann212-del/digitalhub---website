export interface ContactService {
  id: string;
  label: string;
}

export const contactServices: ContactService[] = [
  { id: 'seo',       label: 'SEO' },
  { id: 'local-seo', label: 'Local SEO' },
  { id: 'google-ads', label: 'Google Ads' },
  { id: 'social-media', label: 'Social Media Marketing' },
  { id: 'web-dev',   label: 'Website Development' },
  { id: 'content',   label: 'Content Marketing' },
];

export interface BudgetOption {
  id: string;
  label: string;
}

export const budgetOptions: BudgetOption[] = [
  { id: 'under-1k',  label: 'Under $1,000 / month' },
  { id: '1k-3k',    label: '$1,000 – $3,000 / month' },
  { id: '3k-5k',    label: '$3,000 – $5,000 / month' },
  { id: '5k-10k',   label: '$5,000 – $10,000 / month' },
  { id: 'over-10k', label: 'Over $10,000 / month' },
  { id: 'not-sure',  label: 'Not sure yet' },
];

export interface TimelineOption {
  id: string;
  label: string;
}

export const timelineOptions: TimelineOption[] = [
  { id: 'asap',        label: 'As soon as possible' },
  { id: '1-3-months',  label: 'Within 1–3 months' },
  { id: '3-6-months',  label: 'Within 3–6 months' },
  { id: '6-plus',      label: 'More than 6 months out' },
  { id: 'exploring',   label: 'Just exploring options' },
];

export interface ContactFAQ {
  question: string;
  answer: string;
}

export const contactFaqs: ContactFAQ[] = [
  {
    question: 'How quickly will you respond to my enquiry?',
    answer:
      'We respond to all enquiries within one business day, and most within a few hours. If you submit a proposal request or consultation booking through this form, a member of our team will reach out personally — not with an automated email, but with a real response from a real person.',
  },
  {
    question: 'Is the free consultation really free, with no obligation?',
    answer:
      'Yes. The free strategy call is a genuine consultation, not a sales pitch disguised as one. We will spend 30 minutes understanding your business, your goals, and your current digital presence, then give you honest recommendations — even if that means we are not the right fit for you. There is no obligation to proceed with any paid service afterward.',
  },
  {
    question: 'What information should I have ready before our call?',
    answer:
      'It helps to have a rough idea of your current website (if you have one), your main business goals, any previous experience with SEO or paid advertising, and an approximate budget range. But if you do not have all of this figured out yet, that is completely fine — part of the consultation is helping you clarify these things.',
  },
  {
    question: 'Do you work with businesses in any industry?',
    answer:
      'We work across most industries, from local service businesses to national e-commerce brands. Our process is designed to adapt to your specific market, audience, and competitive landscape. If during the consultation we feel your industry falls outside our expertise, we will tell you honestly and recommend a partner who is a better fit.',
  },
  {
    question: 'What happens after I submit the contact form?',
    answer:
      'A member of our team will personally review your submission and reach out within one business day. For proposal requests, we will schedule a brief discovery call to understand your needs in detail before preparing a custom proposal. For consultation bookings, we will send you a link to choose a time that works for your schedule.',
  },
  {
    question: 'Can I contact you about a project that is not listed in your services?',
    answer:
      'Absolutely. The services listed on the form are the most common, but we handle a wide range of digital projects. Use the message field to describe what you need, and we will let you know whether it is something we can help with or whether we can point you toward someone who can.',
  },
  {
    question: 'Do you offer month-to-month contracts or long-term commitments?',
    answer:
      'We work on month-to-month agreements after an initial strategy and implementation period. We do not believe in locking clients into long contracts — if the work is not delivering value, you should be free to leave. Earning your business every month produces better results for both sides.',
  },
  {
    question: 'Will my information be shared with third parties?',
    answer:
      'Never. The information you share through this form is used solely to respond to your enquiry and prepare a proposal or consultation. We do not sell, share, or distribute your data to any third party. Your contact details are stored securely and used only for direct communication with you about your project.',
  },
];
