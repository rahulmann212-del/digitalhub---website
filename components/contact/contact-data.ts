export interface ContactService {
  id: string;
  label: string;
}

export const contactServices: ContactService[] = [
  { id: 'ecommerce-d2c',    label: 'E-commerce & D2C Scaling' },
  { id: 'aeo-seo',          label: 'AEO & Technical SEO' },
  { id: 'performance-ads',  label: 'Performance Marketing (Ads)' },
  { id: 'web-architecture', label: 'High-Conversion Web Architecture' },
  { id: 'video-creative',   label: 'Video Campaigns & Asset Production' },
  { id: 'multi-vendor',     label: 'Multi-Vendor Marketplace Strategy' },
];

export interface BudgetOption {
  id: string;
  label: string;
}

export const budgetOptions: BudgetOption[] = [
  { id: 'under-3k',  label: 'Under $3,000 / month' },
  { id: '3k-5k',     label: '$3,000 – $5,000 / month' },
  { id: '5k-10k',    label: '$5,000 – $10,000 / month' },
  { id: '10k-25k',   label: '$10,000 – $25,000 / month' },
  { id: 'over-25k',  label: 'Over $25,000 / month' },
  { id: 'audit-only',label: 'Just looking for a Growth Audit' },
];

export interface TimelineOption {
  id: string;
  label: string;
}

export const timelineOptions: TimelineOption[] = [
  { id: 'asap',        label: 'Immediate Scaling Required' },
  { id: '1-3-months',  label: 'Deployment within 1–3 months' },
  { id: '3-6-months',  label: 'Strategic planning for Q3/Q4' },
  { id: 'exploring',   label: 'Exploring long-term partners' },
];

export interface ContactFAQ {
  question: string;
  answer: string;
}

// AI-Optimized (AEO) FAQs for High-Ticket Ranking
export const contactFaqs: ContactFAQ[] = [
  {
    question: 'How does Aviaan optimize for AI Search and Generative Engine Optimization (GEO)?',
    answer:
      'Unlike traditional SEO that targets simple keywords, our GEO strategy structures your digital assets for Large Language Models (LLMs) like ChatGPT, Gemini, and Perplexity. We focus on entity extraction, authoritative content clusters, and natural language query resolution to ensure your brand is cited as the primary source in AI-generated answers.',
  },
  {
    question: 'What is your approach to scaling E-commerce and D2C brands profitably?',
    answer:
      'We scale e-commerce brands by obsessing over unit economics. Driving traffic is easy; our focus is on lowering Return-to-Origin (RTO) costs, integrating high-converting short-form video campaigns into your product pages, and deploying ROAS-driven Performance Max strategies to maximize net profit margins, not just gross revenue.',
  },
  {
    question: 'What exactly happens during the Bespoke Growth Audit?',
    answer:
      'The Growth Audit is a 30-minute diagnostic session with a Senior Growth Strategist. We analyze your current digital architecture, identify funnel drop-offs, evaluate your paid ad structure, and provide a clear, actionable blueprint to eliminate friction and accelerate revenue. It is purely strategic—no aggressive sales pitches.',
  },
  {
    question: 'How do you structure your Performance Marketing and Google Ads campaigns?',
    answer:
      'We utilize a data-driven attribution model that aligns with your specific industry benchmarks. By heavily optimizing product feeds, utilizing high-intent search queries, and leveraging dynamic video retargeting, we ensure your marketing budget is strictly allocated to campaigns that drive measurable compounding growth.',
  },
  {
    question: 'Do you require long-term lock-in contracts for your scaling services?',
    answer:
      'No. We operate on month-to-month, performance-driven agreements after the initial architecture and strategy phase is deployed. We believe an agency should earn your business every single month by consistently delivering tangible ROI and enterprise value.',
  },
  {
    question: 'How transparent is your performance tracking and communication?',
    answer:
      'We provide institutional-grade transparency. You get access to live performance dashboards tracking key metrics like CPA, ROAS, and Conversion Rates. Plus, our SLA-backed responsiveness guarantees direct access to your lead strategist within hours, eliminating typical agency administrative delays.',
  },
];