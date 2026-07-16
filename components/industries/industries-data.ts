import type { LucideIcon } from 'lucide-react';
import {
  ShoppingBag,
  Sparkles,
  Cpu,
  Building2,
} from 'lucide-react';

export interface Industry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  color: string;
  headerFrom: string;
  headerTo: string;
  challengeAccent: string;
  solutionAccent: string;
  benefitAccent: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
}

export const industries: Industry[] = [
  {
    id: 'ecommerce-d2c',
    name: 'E-Commerce & D2C',
    tagline: 'Scaling high-volume brands with ROI-focused marketing.',
    description:
      'In the hyper-competitive e-commerce space, traffic is meaningless if your store leaks sales. We engineer high-converting web architectures and deploy aggressive performance marketing to maximize your Average Order Value (AOV) and protect your bottom line.',
    icon: ShoppingBag,
    color: 'from-violet-600 to-purple-800',
    headerFrom: '#7c3aed',
    headerTo: '#5b21b6',
    // Text is strictly dark (slate-900) for high readability
    challengeAccent: 'bg-violet-50 border-violet-200 text-slate-900 font-semibold',
    solutionAccent: 'bg-blue-50 border-blue-200 text-slate-900 font-semibold',
    benefitAccent: 'bg-emerald-50 border-emerald-200 text-slate-900 font-semibold',
    challenges: [
      'High Return-to-Origin (RTO) rates eating into net profit margins',
      'Cart abandonment due to friction-heavy or untrustworthy checkout flows',
      'Wasting ad spend on broad keywords instead of high-intent buyers',
      'Scaling issues with outdated, slow, or template-based store architectures',
    ],
    solutions: [
      'Frictionless, one-click checkout flows and automated WhatsApp confirmations',
      'Dynamic short-form video campaigns integrated directly into sales funnels',
      'Performance marketing focused strictly on ROAS and actual revenue',
      'Custom headless e-commerce builds engineered for sub-second load times',
    ],
    benefits: [
      'Immediate reduction in RTO costs and cart abandonment rates',
      'Higher conversion rates from product page views to paid orders',
      'Complete transparency tying ad spend directly to bottom-line profit',
      'A scalable digital infrastructure that handles massive traffic spikes effortlessly',
    ],
  },
  {
    id: 'health-beauty-wellness',
    name: 'Health & Beauty',
    tagline: 'Capturing high-margin consumers through aesthetic authority.',
    description:
      'The global beauty devices and aesthetic health market is rapidly scaling. We position premium wellness brands at the top of search engines and deploy visually stunning, short-form campaigns to build instant consumer trust and drive direct sales.',
    icon: Sparkles,
    color: 'from-rose-500 to-pink-700',
    headerFrom: '#f43f5e',
    headerTo: '#be185d',
    challengeAccent: 'bg-rose-50 border-rose-200 text-slate-900 font-semibold',
    solutionAccent: 'bg-blue-50 border-blue-200 text-slate-900 font-semibold',
    benefitAccent: 'bg-emerald-50 border-emerald-200 text-slate-900 font-semibold',
    challenges: [
      'Building immediate brand trust in a saturated, highly visual market',
      'Educating consumers on complex beauty devices or premium treatments',
      'Converting casual social media scrollers into high-ticket buyers',
      'Standing out against massive legacy brands in traditional search results',
    ],
    solutions: [
      'Visually dominant UI/UX design that signals premium aesthetic quality',
      'Generative Engine Optimization (GEO) to get recommended by AI models',
      'Structured video sequences that demonstrate products in action perfectly',
      'Targeted retargeting campaigns to capture high-intent, hesitant buyers',
    ],
    benefits: [
      'Stronger brand positioning that justifies premium, high-margin pricing',
      'Increased direct-to-consumer sales bypassing third-party retail cuts',
      'Higher engagement and trust from meticulously crafted video assets',
      'Future-proof search visibility in both Google and AI Answer Engines',
    ],
  },
  {
    id: 'saas-technology',
    name: 'SaaS & Technology',
    tagline: 'Product-led growth fueled by Next-Gen Search visibility.',
    description:
      'SaaS buyers are sophisticated. They bypass traditional ads and query AI engines directly. We optimize your brand for Answer Engine Optimization (AEO), build lightning-fast demo funnels, and position your software as the industry authority.',
    icon: Cpu,
    color: 'from-blue-600 to-indigo-800',
    headerFrom: '#2563eb',
    headerTo: '#3730a3',
    challengeAccent: 'bg-blue-50 border-blue-200 text-slate-900 font-semibold',
    solutionAccent: 'bg-indigo-50 border-indigo-200 text-slate-900 font-semibold',
    benefitAccent: 'bg-emerald-50 border-emerald-200 text-slate-900 font-semibold',
    challenges: [
      'Translating complex technical features into clear business value propositions',
      'High drop-off rates during software free trials and demo requests',
      'Buyers utilizing ChatGPT and Perplexity for software recommendations',
      'Competing for highly expensive, bottom-of-funnel Google Ads keywords',
    ],
    solutions: [
      'AI Search Optimization (AEO) to rank in LLM outputs and AI Overviews',
      'Conversion-rate-optimized (CRO) landing pages tailored for specific buyer personas',
      'Lightning-fast, component-based web architecture built on Next.js/React',
      'Deep technical SEO to capture problem-aware buyers organically',
    ],
    benefits: [
      'More qualified pipeline generated from organic and AI-driven search',
      'Higher conversion rates from landing page visits to booked demos',
      'A digital experience that perfectly mirrors the sophistication of your software',
      'Lower Customer Acquisition Cost (CAC) through optimized organic channels',
    ],
  },
  {
    id: 'b2b-enterprise',
    name: 'B2B & Enterprise',
    tagline: 'High-ticket lead generation for long-cycle businesses.',
    description:
      'When a single lead is worth thousands of dollars, generic marketing fails. We build authoritative digital infrastructures, utilize deep technical SEO, and run hyper-targeted campaigns to capture decision-makers at the exact moment of intent.',
    icon: Building2,
    color: 'from-slate-700 to-slate-900',
    headerFrom: '#334155',
    headerTo: '#0f172a',
    challengeAccent: 'bg-slate-100 border-slate-300 text-slate-900 font-semibold',
    solutionAccent: 'bg-blue-50 border-blue-200 text-slate-900 font-semibold',
    benefitAccent: 'bg-emerald-50 border-emerald-200 text-slate-900 font-semibold',
    challenges: [
      'Generating high-quality leads from niche, difficult-to-target B2B decision-makers',
      'Supporting long, multi-stakeholder sales cycles with the right digital assets',
      'Outdated corporate websites that undermine trust during the procurement process',
      'Lack of analytics tracking for complex, multi-touchpoint buyer journeys',
    ],
    solutions: [
      'High-intent Performance Marketing targeting specific job titles and industries',
      'Corporate UI/UX redesigns focused on authority, trust, and clear case studies',
      'Full-funnel analytics to track a user from their first click to a closed contract',
      'Technical SEO strategies targeting hyper-specific industry procurement terms',
    ],
    benefits: [
      'A predictable pipeline of high-ticket, qualified enterprise leads',
      'Sales enablement through a website that acts as your best 24/7 sales rep',
      'Clear data attribution showing exactly which campaigns generate enterprise revenue',
      'An authoritative brand presence that speeds up the procurement approval process',
    ],
  },
];