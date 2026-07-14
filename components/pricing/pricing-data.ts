import type { LucideIcon } from 'lucide-react';
import {
  TrendingUp, MapPin, Target, Rocket, Check, X, Minus,
} from 'lucide-react';

export interface Solution {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
  overview: string;
  idealFor: string;
  services: string[];
  outcomes: string[];
  featured: boolean;
}

export const solutions: Solution[] = [
  {
    id: 'seo-growth',
    name: 'SEO Growth',
    icon: TrendingUp,
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    overview:
      'A comprehensive organic search strategy designed to grow your visibility in search results, attract qualified traffic, and build durable authority in your market over time.',
    idealFor:
      'Businesses with an existing website that want to grow organic traffic and reduce reliance on paid advertising.',
    services: [
      'Search Engine Optimization',
      'Technical SEO',
      'Content Marketing',
      'Performance Tracking',
      'Monthly Reporting',
    ],
    outcomes: [
      'Increased organic search visibility for high-intent keywords',
      'A growing library of content that compounds in value over time',
      'Reduced dependency on paid traffic as organic authority builds',
      'Clear monthly reporting tied to traffic and ranking movement',
    ],
    featured: false,
  },
  {
    id: 'local-business-growth',
    name: 'Local Business Growth',
    icon: MapPin,
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    overview:
      'A location-focused growth strategy built around local search visibility, Google Business Profile optimisation, and reputation management to drive foot traffic, calls, and local enquiries.',
    idealFor:
      'Brick-and-mortar businesses and service-area companies that serve a specific city, region, or community.',
    services: [
      'Local SEO',
      'Google Business Profile Management',
      'Review Acquisition Strategy',
      'Landing Page Design',
      'Monthly Reporting',
    ],
    outcomes: [
      'Higher rankings in local search and Google Maps results',
      'More direction requests, calls, and website visits from local search',
      'A stronger, more visible online reputation in your service area',
      'Measurable growth in local enquiries tied to specific locations',
    ],
    featured: false,
  },
  {
    id: 'performance-marketing',
    name: 'Performance Marketing',
    icon: Target,
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    overview:
      'A paid acquisition strategy focused on Google Ads and social media campaigns engineered to deliver qualified traffic and measurable return on ad spend, not just impressions.',
    idealFor:
      'Businesses that need faster, more predictable lead flow alongside or instead of long-term organic growth.',
    services: [
      'Google Ads Management',
      'Social Media Marketing',
      'Landing Page Design',
      'Performance Tracking',
      'Monthly Reporting',
    ],
    outcomes: [
      'Qualified traffic delivered within days of campaign launch',
      'Transparent cost-per-lead and return-on-ad-spend reporting',
      'Landing pages built specifically to convert paid traffic',
      'Continuous bid and creative optimisation based on performance data',
    ],
    featured: false,
  },
  {
    id: 'complete-digital-growth',
    name: 'Complete Digital Growth',
    icon: Rocket,
    color: 'from-blue-600 to-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    overview:
      'Our most comprehensive solution — combining SEO, local visibility, paid acquisition, content, and a conversion-focused website into one integrated strategy built for sustained, compounding growth.',
    idealFor:
      'Growing businesses that want a single, accountable partner managing their entire digital growth engine.',
    services: [
      'Search Engine Optimization',
      'Local SEO',
      'Technical SEO',
      'Google Ads Management',
      'Social Media Marketing',
      'Content Marketing',
      'Website Development',
      'Landing Page Design',
      'Performance Tracking',
      'Monthly Reporting',
    ],
    outcomes: [
      'A single, cohesive strategy across organic, local, and paid channels',
      'Compounding organic growth paired with immediate paid traffic',
      'A website and landing pages built to convert every traffic source',
      'One reporting framework covering your entire digital presence',
    ],
    featured: true,
  },
];

export interface ComparisonService {
  name: string;
  seo: boolean;
  local: boolean;
  performance: boolean;
  complete: boolean;
}

export const comparisonServices: ComparisonService[] = [
  { name: 'Search Engine Optimization', seo: true,  local: false, performance: false, complete: true  },
  { name: 'Local SEO',                  seo: false, local: true,  performance: false, complete: true  },
  { name: 'Technical SEO',              seo: true,  local: false, performance: false, complete: true  },
  { name: 'Google Ads Management',      seo: false, local: false, performance: true,  complete: true  },
  { name: 'Social Media Marketing',     seo: false, local: false, performance: true,  complete: true  },
  { name: 'Content Marketing',          seo: true,  local: false, performance: false, complete: true  },
  { name: 'Website Development',        seo: false, local: false, performance: false, complete: true  },
  { name: 'Landing Page Design',        seo: false, local: true,  performance: true,  complete: true  },
  { name: 'Performance Tracking',       seo: true,  local: true,  performance: true,  complete: true  },
  { name: 'Monthly Reporting',          seo: true,  local: true,  performance: true,  complete: true  },
];

export const comparisonColumns = [
  { id: 'seo',         label: 'SEO Growth',          color: 'text-blue-700',   dot: 'bg-blue-500'   },
  { id: 'local',       label: 'Local Business',      color: 'text-sky-700',    dot: 'bg-sky-500'    },
  { id: 'performance', label: 'Performance',        color: 'text-amber-700',  dot: 'bg-amber-500'  },
  { id: 'complete',    label: 'Complete Growth',    color: 'text-indigo-700', dot: 'bg-indigo-500' },
] as const;

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'Why do you not publish prices on your website?',
    answer:
      'Because every business has different goals, competitive landscapes, and starting points, a fixed price list would be misleading. A local business targeting one city has very different needs from a national e-commerce brand. We provide custom proposals after understanding your objectives, market, and current digital presence — so you only pay for the work that actually moves your business forward.',
  },
  {
    question: 'How do you determine the cost of a growth strategy?',
    answer:
      'Pricing is based on the scope of work, the competitiveness of your market, the number of channels involved, and the level of ongoing management required. After a free strategy call, we deliver a detailed proposal with a clear breakdown of services, deliverables, and monthly investment. There are no hidden fees — everything is documented before we begin.',
  },
  {
    question: 'Do you require long-term contracts?',
    answer:
      'No. We work on month-to-month agreements after an initial strategy and implementation period. We believe earning your business every month produces better results than locking clients into contracts they cannot exit. If the work is not delivering value, you should be free to leave — and we are confident enough in our process to offer that flexibility.',
  },
  {
    question: 'How long before I see results from SEO?',
    answer:
      'SEO is a compounding strategy, not an overnight one. Most clients begin seeing measurable improvements in organic traffic and keyword rankings within 3 to 6 months, with more significant growth visible between 6 and 12 months. The timeline depends on your industry competitiveness, the quality of your existing website, and how much content and technical work is required. We set realistic expectations upfront and report progress monthly.',
  },
  {
    question: 'Can I start with just one service and add more later?',
    answer:
      'Absolutely. Many clients begin with a single focus — such as SEO Growth or Performance Marketing — and expand as they see results. Our solutions are designed to scale with your business. Adding services later is straightforward because we build every strategy on the same reporting and tracking foundation, so additional channels integrate cleanly rather than starting from scratch.',
  },
  {
    question: 'Is Website Development a primary service or a supporting one?',
    answer:
      'Website Development is a supporting service within our growth solutions. Our primary focus is SEO and digital marketing — driving qualified traffic and converting it into revenue. However, a high-performing website is often essential to convert that traffic, so we offer development as part of the Complete Digital Growth solution or as a standalone project when needed. If you already have a strong website, we will work with it rather than rebuild unnecessarily.',
  },
  {
    question: 'What happens if my current website needs work?',
    answer:
      'During the discovery phase, we audit your existing website for technical SEO, performance, and conversion effectiveness. If improvements are needed, we will recommend specific changes — ranging from targeted optimisations to a full rebuild — and explain why. You are never pressured into a rebuild; many websites need optimisation rather than replacement, and we will tell you honestly which applies to yours.',
  },
  {
    question: 'How do I know which solution is right for my business?',
    answer:
      'Start by booking a free strategy call. We will learn about your business, goals, target audience, and current digital presence, then recommend the solution that fits — even if that means a smaller scope than you initially expected. Our goal is to build a long-term relationship, not to upsell you into a package you do not need. The right solution is the one that delivers measurable growth for your specific business.',
  },
];
