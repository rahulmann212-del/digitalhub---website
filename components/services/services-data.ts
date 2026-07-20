import type { LucideIcon } from 'lucide-react';
import {
  Paintbrush2,
  Code2,
  ShoppingCart,
  LayoutTemplate,
  Search,
  MapPin,
  MousePointerClick,
  Share2,
  ShieldCheck,
  Sparkles
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

export const categories: Category[] = [
  { id: 'marketing',   label: 'Digital & Performance',   desc: 'Paid ads, video production, and ROI-driven conversion growth.' },
  { id: 'seo',         label: 'Next-Gen Search & AI',    desc: 'Search Engine Optimization built for LLMs and AI Overviews.' },
  { id: 'web',         label: 'Web & E-Commerce',        desc: 'High-performing web architectures engineered for transaction scaling.' },
];

export const services: Service[] = [
  // ── 1. Digital & Performance Marketing ─────────────────────────────────────
  {
    id: 'google-ads',
    category: 'Marketing',
    categoryId: 'marketing',
    icon: MousePointerClick,
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50/60',
    lightBorder: 'border-blue-100',
    title: 'Performance Marketing (Ads)',
    tagline: 'Paid campaigns built on data, scaling, and high return on ad spend.',
    description:
      'Anviaan delivers full-funnel paid media management focused on driving qualified traffic that converts. We strictly optimize for your bottom-line revenue, ensuring complete transparency on budget allocation and bid strategy.',
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
    category: 'Marketing',
    categoryId: 'marketing',
    icon: Share2,
    color: 'from-[#063A9A] to-blue-500',
    bg: 'bg-blue-50/40',
    lightBorder: 'border-blue-100/70',
    title: 'Social & Short-Form Video',
    tagline: 'Hook immediate audience attention, build brand trust, and drive acquisition.',
    description:
      'Static assets face creative fatigue quickly. We integrate fast-paced, high-retention short-form video campaigns and dynamic promotional assets directly into your social funnels to drive consumer engagement.',
    benefits: [
      'High-retention short-form video strategies for Instagram Reels, YouTube Shorts, and TikTok',
      'Structured visual sequences designed to minimize user drop-off metrics',
      'Data-driven audience targeting based on custom conversion behaviors',
      'Paid social amplification matching your exact customer demographic records',
      'Performance analytics tying social video reach directly to store conversion volumes',
    ],
    process: [
      { step: 'Content Strategy', desc: 'Defining content pillars, visual themes, and viral hook frameworks' },
      { step: 'Production', desc: 'Scripting, editing, and producing dynamic video assets and visual concepts' },
      { step: 'Distribution', desc: 'Strategic posting across platforms at peak engagement times' },
      { step: 'Optimization', desc: 'Analyzing watch-time drop-offs and iterating hooks for better retention' },
    ],
  },

  // ── 2. Next-Gen Search & AI ────────────────────────────────────────────────
  {
    id: 'ai-search-optimization',
    category: 'SEO',
    categoryId: 'seo',
    icon: Sparkles,
    color: 'from-[#063A9A] to-[#FF6600]',
    bg: 'bg-orange-50/40',
    lightBorder: 'border-orange-100/70',
    title: 'AI Search Optimization (AEO & GEO)',
    tagline: 'Secure organic recommendations inside ChatGPT, Perplexity, and AI Overviews.',
    description:
      'Traditional keyword placement is no longer sufficient. Anviaan structures your digital ecosystem to ensure your brand surfaces as the primary cited solution when prospective buyers query language models.',
    benefits: [
      'Answer Engine Optimization (AEO) to secure direct text references in ChatGPT and Claude',
      'Generative Engine Optimization (GEO) optimized for Google AI Overviews interface layout',
      'Content structuring built specifically for continuous extraction by machine learning agents',
      'Building systemic brand authority layers that algorithmic models inherently score high',
      'Capturing high-intent organic users who rely completely on aggregated answer engines',
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
    category: 'SEO',
    categoryId: 'seo',
    icon: Search,
    color: 'from-blue-600 to-[#FF6600]',
    bg: 'bg-orange-50/60',
    lightBorder: 'border-orange-100',
    title: 'Technical & Organic SEO',
    tagline: 'Deep architectural structural foundation built for long-term search dominance.',
    description:
      'Engineered backend optimizations ensuring your domain is fast, cleanly indexable, and effortlessly scrapable. We eliminate structural flaws that block indexation to accelerate organic positioning.',
    benefits: [
      'Comprehensive optimization targeting elite Core Web Vitals rankings parameters',
      'Advanced JSON-LD schema integration for rich snippet enhancements across SERPs',
      'Strategic structural internal link flows to distribute page authority profiles securely',
      'E-commerce directory architecture alignment to maximize collection visibility',
      'Elimination of crawl budget leaks, layout shifts, and indexing exceptions',
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
    category: 'SEO',
    categoryId: 'seo',
    icon: MapPin,
    color: 'from-[#FF6600] to-orange-500',
    bg: 'bg-orange-50/80',
    lightBorder: 'border-orange-200/60',
    title: 'Local SEO & Maps Dominance',
    tagline: 'Capture geographical commercial intent matching your distinct operations.',
    description:
      'Targeted search optimization focusing on localized buyers. We audit and manage business infrastructure to ensure your locations claim the top positions in map packs and high-intent local queries.',
    benefits: [
      'Optimized Google Business Profile records designed to clear competitive baselines',
      'Geographical map tracking setup analyzing spatial distribution visibility scales',
      'Localized structured review cycles built to amplify regional authority indices',
      'Complete tracking alignment across core directories preventing duplicate citations',
    ],
    process: [
      { step: 'Local Audit', desc: 'Citation gap analysis and local competitor ranking review' },
      { step: 'GBP Optimization', desc: 'Profile completion, category alignment, and product/service integration' },
      { step: 'Local Content', desc: 'Creating dedicated, high-ranking service area pages on your website' },
      { step: 'Management', desc: 'Monthly GBP posts, Q&A seeding, and review response management' },
    ],
  },

  // ── 3. Web & E-Commerce Solutions ──────────────────────────────────────────
  {
    id: 'ecommerce',
    category: 'Development',
    categoryId: 'web',
    icon: ShoppingCart,
    color: 'from-[#063A9A] to-blue-600',
    bg: 'bg-blue-50/60',
    lightBorder: 'border-blue-100',
    title: 'E-Commerce Development',
    tagline: 'Online platforms engineered to minimize layout leakages and maximize profit margins.',
    description:
      'User interface layout options optimized for conversions. We deliver transactional flows built for friction-free experiences, offering fast filtering systems and checkouts that preserve acquisition values.',
    benefits: [
      'One-click checkout mechanisms reducing cart drop-off percentages significantly',
      'Dynamic bundling matrices and clear upsell flows built into item modules',
      'Backend data layers configured to handle inventory management metrics cleanly',
      'Responsive design paths built explicitly for high-volume social acquisition funnels',
      'Automated order confirmation tracking systems tying transactions to analytics grids',
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
    category: 'Development',
    categoryId: 'web',
    icon: Paintbrush2,
    color: 'from-[#063A9A] to-blue-500',
    bg: 'bg-blue-50/40',
    lightBorder: 'border-blue-100/70',
    title: 'UI/UX & Website Design',
    tagline: 'Purposeful layouts built to align your interface with modern design choices.',
    description:
      'We craft elegant interfaces built around visual balance and identity coherence. Every structural item is evaluated to ease user interaction paths, turning anonymous hits into defined actions.',
    benefits: [
      'Custom interface layout options matching specific identity parameters cleanly',
      'Interface components verified by layout testing data and visual hierarchies',
      'Fluid layouts built to adapt flawlessly across mobile, tablet, and widescreen setups',
      'Clean accessibility features built onto elements to fulfill clear display rules',
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
    category: 'Development',
    categoryId: 'web',
    icon: Code2,
    color: 'from-[#063A9A] to-[#FF6600]',
    bg: 'bg-orange-50/40',
    lightBorder: 'border-orange-100/70',
    title: 'Custom Web Development',
    tagline: 'Component-driven application systems built for speed and fluid interactions.',
    description:
      'We design application layout modules using modern JavaScript tech stacks (Next.js and React). Codebases are optimized to execute cleanly without heavy runtime delays, securing maximum performance.',
    benefits: [
      'Modular asset structuring preventing component bloating over time',
      'Headless interface configurations separating system core from representation tools',
      'Clean base structures ensuring search crawlers parse application logic quickly',
      'API integrations ensuring communication with inventory tools runs smoothly',
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
    category: 'Development',
    categoryId: 'web',
    icon: LayoutTemplate,
    color: 'from-blue-600 to-[#FF6600]',
    bg: 'bg-orange-50/60',
    lightBorder: 'border-orange-100',
    title: 'High-Converting Landing Pages',
    tagline: 'Laser-focused single-purpose landing modules optimized for paid channels.',
    description:
      'Paid campaigns demand structured target layouts. We build single-objective templates stripped of standard navigational options, pushing users toward direct, immediate interactions.',
    benefits: [
      'Focused layout structures removing external option paths to secure interaction conversion',
      'Clean content flows matching buyer value indices perfectly',
      'Sub-second execution patterns to maximize Quality Scores on advertising channels',
      'Tracking instrumentation setup to enable simple performance verification runs',
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
    category: 'Development',
    categoryId: 'web',
    icon: ShieldCheck,
    color: 'from-[#FF6600] to-orange-500',
    bg: 'bg-orange-50/80',
    lightBorder: 'border-orange-200/60',
    title: 'Speed & Security Hardening',
    tagline: 'Defend your platform metrics and isolate infrastructure vulnerabilities.',
    description:
      'Advanced architectural adjustments designed to clear high performance limits. We minimize latency cycles and configure defenses to block malicious request pools.',
    benefits: [
      'Substantial bounce drop records achieved through strict loading cycle cuts',
      'Advanced request filtering matrices built via enterprise network protocols',
      'Asset optimizations reducing processing pressure on mobile user devices',
      'Automated diagnostic setups monitoring application stability indices constantly',
    ],
    process: [
      { step: 'Audit', desc: 'Lighthouse speed testing and comprehensive security vulnerability scanning' },
      { step: 'Hardening', desc: 'Closing security loopholes, updating protocols, and locking access points' },
      { step: 'Acceleration', desc: 'Minifying code, compressing assets, and optimizing server delivery' },
      { step: 'Monitoring', desc: '24/7 automated tracking to ensure speeds remain fast and barriers remain up' },
    ],
  }
];