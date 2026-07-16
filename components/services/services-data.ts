import type { LucideIcon } from 'lucide-react';
import {
  Paintbrush2,
  Code2,
  Globe,
  ShoppingCart,
  LayoutTemplate,
  RefreshCw,
  Wrench,
  Search,
  MapPin,
  MousePointerClick,
  Share2,
  Zap,
  ShieldCheck,
  Sparkles // Added Sparkles icon for AI/GEO
} from 'lucide-react';

export interface ProcessStep {
  step: string;
  desc: string;
}

export interface Service {
  id: string;
  category: string;
  categoryId: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  lightBorder: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  process: ProcessStep[];
}

export interface Category {
  id: string;
  label: string;
  desc: string;
}

// 1. Categories ko 3 sharp focused tabs mein merge aur re-order kiya gaya hai
export const categories: Category[] = [
  { id: 'marketing',   label: 'Digital & Performance',   desc: 'Paid ads, video & ROI-driven growth' },
  { id: 'seo',         label: 'Next-Gen Search & AI',    desc: 'SEO, AEO & Generative Engine visibility' },
  { id: 'web',         label: 'Web & E-Commerce',        desc: 'High-converting dev, speed & security' },
];

export const services: Service[] = [
  
  // ── 1. Digital & Performance Marketing (Top Priority) ─────────────────────
  {
    id: 'google-ads',
    category: 'Digital & Performance',
    categoryId: 'marketing',
    icon: MousePointerClick,
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    lightBorder: 'border-blue-100',
    title: 'Performance Marketing (Ads)',
    tagline: 'Paid campaigns built on data, scaling, and ROAS.',
    description:
      'Aviaan delivers full-funnel paid media management focused on driving qualified traffic that converts. We strictly optimize for your bottom-line revenue, ensuring complete transparency on budget allocation and bid strategy.',
    benefits: [
      'Aggressive scaling strategies for D2C and E-commerce brands',
      'Advanced retargeting funnels to capture lost cart abandonments',
      'Continuous A/B testing of ad creatives to lower CPA (Cost Per Acquisition)',
      'High-intent keyword bidding to avoid budget waste on informational searches',
      'Transparent analytics mapping ad spend directly to actual sales revenue',
    ],
    process: [
      { step: 'Strategy & Setup', desc: 'Account structure, tracking pixels, audience profiling, and conversion mapping' },
      { step: 'Campaign Build', desc: 'Ad group creation, persuasive copywriting, and bid strategy configuration' },
      { step: 'Launch & Monitor', desc: 'Initial performance monitoring, Quality Score optimization, and aggressive bid adjustments' },
      { step: 'Scale', desc: 'Identifying winning creatives and reallocating budget to scale profitable campaigns' },
    ],
  },
  {
    id: 'social-media-video',
    category: 'Digital & Performance',
    categoryId: 'marketing',
    icon: Share2,
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
    lightBorder: 'border-sky-100',
    title: 'Social & Short-Form Video',
    tagline: 'Hook attention, build trust, and drive immediate sales.',
    description:
      'Static images don\'t sell anymore. We integrate fast-paced, high-quality short-form video campaigns and dynamic promotional content directly into your social media funnels to reduce buyer hesitation.',
    benefits: [
      'High-retention short-form video strategies for Instagram Reels, YouTube Shorts, and TikTok',
      'Structured visual sequences that act as a 24/7 salesperson for your brand',
      'Community management and authentic audience engagement',
      'Paid social boosting to guarantee reach among your exact target demographic',
      'Monthly analytics tying engagement directly to website traffic and sales',
    ],
    process: [
      { step: 'Content Strategy', desc: 'Defining content pillars, visual themes, and viral hook frameworks' },
      { step: 'Production', desc: 'Scripting, editing, and producing dynamic video assets and visual concepts' },
      { step: 'Distribution', desc: 'Strategic posting across platforms at peak engagement times' },
      { step: 'Optimization', desc: 'Analyzing watch-time drop-offs and iterating hooks for better retention' },
    ],
  },

  // ── 2. Next-Gen Search & AI (SEO + AEO + GEO) ───────────────────────────
  {
    id: 'ai-search-optimization',
    category: 'Next-Gen Search & AI',
    categoryId: 'seo',
    icon: Sparkles, // Using the new AI Sparkles icon
    color: 'from-indigo-500 to-purple-600',
    bg: 'bg-indigo-50',
    lightBorder: 'border-indigo-100',
    title: 'AI Search Optimization (AEO & GEO)',
    tagline: 'Get recommended by ChatGPT, Perplexity, and Google AI Overviews.',
    description:
      'Traditional SEO is only half the battle. Aviaan future-proofs your brand by optimizing your digital footprint to ensure you are the top recommended answer when potential customers query LLMs and Generative Engines.',
    benefits: [
      'Answer Engine Optimization (AEO) to rank as citations in ChatGPT and Claude',
      'Generative Engine Optimization (GEO) for Google\'s AI Overviews (SGE)',
      'Content structuring that directly feeds machine-learning models',
      'Building deep brand authority signals that AI systems inherently trust',
      'Capturing high-intent users who skip traditional search results completely',
    ],
    process: [
      { step: 'AI Presence Audit', desc: 'Analyzing how top LLMs currently perceive, hallucinate, or recommend your brand' },
      { step: 'Entity Structuring', desc: 'Encoding your business data into clear, machine-readable knowledge graph entities' },
      { step: 'Conversational Content', desc: 'Publishing targeted answers to the exact prompts users feed into AI bots' },
      { step: 'Authority Citations', desc: 'Generating high-trust external links that AI engines use to verify factual accuracy' },
    ],
  },
  {
    id: 'technical-seo',
    category: 'Next-Gen Search & AI',
    categoryId: 'seo',
    icon: Search,
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-cyan-50',
    lightBorder: 'border-cyan-100',
    title: 'Technical & Organic SEO',
    tagline: 'The structural foundation for undeniable search dominance.',
    description:
      'Deep technical optimization that makes your website crawlable, indexable, and blazing fast. We address the under-the-hood architecture issues that hold back organic performance, setting the stage for massive traffic growth.',
    benefits: [
      'Flawless Core Web Vitals performance for elite page experience rankings',
      'Advanced Schema markup implementation for rich snippets and AI scraping',
      'Strategic internal linking to efficiently distribute domain authority',
      'E-commerce specific category and product page organic optimization',
      'Resolution of canonicalization, duplicate content, and crawl budget issues',
    ],
    process: [
      { step: 'Technical Audit', desc: 'Full deep-crawl, index coverage analysis, and architecture review' },
      { step: 'Implementation', desc: 'Direct code-level fixes to optimize speed, tags, and structured data' },
      { step: 'Content Strategy', desc: 'Targeting high-intent, long-tail search queries where buyers are active' },
      { step: 'Monitoring', desc: 'Continuous rank tracking, algorithm update monitoring, and traffic reporting' },
    ],
  },
  {
    id: 'local-seo',
    category: 'Next-Gen Search & AI',
    categoryId: 'seo',
    icon: MapPin,
    color: 'from-sky-600 to-blue-600',
    bg: 'bg-sky-50',
    lightBorder: 'border-sky-100',
    title: 'Local SEO & Dominance',
    tagline: 'Capture the market right in your backyard.',
    description:
      'Hyper-targeted optimization for businesses serving specific geographic areas. We optimize your Google Business Profile and local citations to ensure you dominate Google Maps and "near me" search queries.',
    benefits: [
      'Fully optimized Google Business Profile engineered to outrank competitors',
      'Local keyword mapping based on actual geographic search volume',
      'Review acquisition strategies to build localized trust signals',
      'Consistent NAP (Name, Address, Phone) citations across premium directories',
    ],
    process: [
      { step: 'Local Audit', desc: 'Citation gap analysis and local competitor ranking review' },
      { step: 'GBP Optimization', desc: 'Profile completion, category alignment, and product/service integration' },
      { step: 'Local Content', desc: 'Creating dedicated, high-ranking service area pages on your website' },
      { step: 'Management', desc: 'Monthly GBP posts, Q&A seeding, and review response management' },
    ],
  },

  // ── 3. Web & E-Commerce Solutions (The Foundation) ──────────────────────
  {
    id: 'ecommerce',
    category: 'Web & E-Commerce',
    categoryId: 'web',
    icon: ShoppingCart,
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
    lightBorder: 'border-cyan-100',
    title: 'E-Commerce Development',
    tagline: 'Online stores engineered by Aviaan to maximize profit margins.',
    description:
      'Traffic means nothing if your store leaks sales. We build conversion-optimized e-commerce platforms with frictionless checkouts, advanced filtering, and layouts designed specifically to increase your Average Order Value (AOV).',
    benefits: [
      'One-click checkouts and digital wallet integrations to slash abandonment rates',
      'Advanced product variants, bundling systems, and cross-sell architecture',
      'Backend infrastructure optimized to aggressively manage RTO (Return-to-Origin) risks',
      'Mobile-first shopping experiences built for social media traffic',
      'Integrated inventory, shipping, and automated WhatsApp order confirmations',
    ],
    process: [
      { step: 'Architecture', desc: 'Taxonomy, user journey mapping, and conversion funnel design' },
      { step: 'Development', desc: 'Building lightning-fast product pages, carts, and user account portals' },
      { step: 'Integrations', desc: 'Connecting payment gateways, logistics APIs, and marketing pixels' },
      { step: 'QA & Launch', desc: 'Stress testing order flows before deploying to a live production environment' },
    ],
  },
  {
    id: 'website-design',
    category: 'Web & E-Commerce',
    categoryId: 'web',
    icon: Paintbrush2,
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    lightBorder: 'border-blue-100',
    title: 'UI/UX & Website Design',
    tagline: 'Beautiful, purposeful design built on cognitive psychology.',
    description:
      'We craft premium visual identities that reflect the Aviaan standard. Our designs engage visitors from the first impression and guide them confidently toward key actions using data-backed conversion principles.',
    benefits: [
      'Bespoke design systems tailored to elevate your brand perception',
      'Conversion-focused layouts informed by UX research and heatmap data',
      'Flawlessly responsive interfaces for every device and screen size',
      'Accessibility-compliant designs meeting global WCAG standards',
    ],
    process: [
      { step: 'Discovery', desc: 'Brand audit, competitor landscape review, and audience research' },
      { step: 'Wireframing', desc: 'Mapping structural user flows and friction-less navigation paths' },
      { step: 'Visual Design', desc: 'High-fidelity Figma prototypes with complete brand application' },
      { step: 'Handoff', desc: 'Creating developer-ready specs for pixel-perfect implementation' },
    ],
  },
  {
    id: 'website-development',
    category: 'Web & E-Commerce',
    categoryId: 'web',
    icon: Code2,
    color: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    lightBorder: 'border-sky-100',
    title: 'Custom Web Development',
    tagline: 'Fast, clean architecture engineered to perform and scale.',
    description:
      'We build modern, component-based websites on advanced tech stacks (like Next.js and React). Every site is engineered for ultimate speed, security, and long-term maintainability without bloated legacy code.',
    benefits: [
      'Component-based architecture built to scale alongside your business growth',
      'Headless CMS integrations allowing you to manage content effortlessly',
      'Technical SEO foundations hardcoded from the very first line of code',
      'Robust API integrations to connect your site with third-party software',
    ],
    process: [
      { step: 'Stack Selection', desc: 'Choosing the exact modern technologies best suited for your goals' },
      { step: 'Development', desc: 'Writing clean, documented code and integrating backend systems' },
      { step: 'Performance Pass', desc: 'Aggressive image optimization, caching, and code-splitting' },
      { step: 'Launch', desc: 'Secure production deployment and continuous uptime monitoring' },
    ],
  },
  {
    id: 'landing-pages',
    category: 'Web & E-Commerce',
    categoryId: 'web',
    icon: LayoutTemplate,
    color: 'from-blue-500 to-sky-400',
    bg: 'bg-blue-50',
    lightBorder: 'border-blue-100',
    title: 'High-Converting Landing Pages',
    tagline: 'Single-goal pages built to squeeze ROI out of every click.',
    description:
      'When you are spending money on ads, you cannot send traffic to a generic homepage. We build laser-focused, distraction-free landing pages designed around one clear objective: getting the user to convert immediately.',
    benefits: [
      'Singular-focus design that removes navigation and directs attention to the CTA',
      'Persuasive copywriting frameworks that handle objections and build social proof',
      'Sub-second load times to ensure higher Google Ads Quality Scores',
      'A/B testing architecture to continuously beat the control conversion rate',
    ],
    process: [
      { step: 'Strategy', desc: 'Aligning the page offer strictly with the paid ad traffic intent' },
      { step: 'Copy & Design', desc: 'Structuring value propositions, urgency elements, and trust signals' },
      { step: 'Tracking Setup', desc: 'Configuring exact event tracking for leads, clicks, or purchases' },
      { step: 'Optimization', desc: 'Analyzing heatmaps to identify where users drop off and improving the flow' },
    ],
  },
  {
    id: 'speed-security',
    category: 'Web & E-Commerce',
    categoryId: 'web',
    icon: ShieldCheck,
    color: 'from-blue-700 to-blue-500',
    bg: 'bg-blue-50',
    lightBorder: 'border-blue-100',
    title: 'Speed & Security Hardening',
    tagline: 'Protect your brand equity and maximize site performance.',
    description:
      'A merged technical service that ensures your website never becomes a liability. We optimize server response times, pass Core Web Vitals, and implement enterprise-grade security to prevent breaches and downtime.',
    benefits: [
      'Immediate reduction in bounce rates via extreme page speed optimization',
      'CDN configuration, lazy loading, and advanced caching implementation',
      'Web Application Firewall (WAF) setup to block malicious traffic and bots',
      'Proactive malware scanning, secure authentication, and vulnerability patching',
    ],
    process: [
      { step: 'Audit', desc: 'Lighthouse speed testing and comprehensive security vulnerability scanning' },
      { step: 'Hardening', desc: 'Closing security loopholes, updating protocols, and locking access points' },
      { step: 'Acceleration', desc: 'Minifying code, compressing assets, and optimizing server delivery' },
      { step: 'Monitoring', desc: '24/7 automated tracking to ensure speeds remain fast and barriers remain up' },
    ],
  }
];