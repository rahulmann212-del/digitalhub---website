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
  { id: 'web',         label: 'Web Solutions',         desc: 'Design, development & maintenance' },
  { id: 'seo',         label: 'SEO & Growth',           desc: 'Organic search & visibility' },
  { id: 'marketing',   label: 'Digital Marketing',      desc: 'Paid ads & social media' },
  { id: 'performance', label: 'Performance & Security', desc: 'Speed, uptime & protection' },
];

export const services: Service[] = [
  // ── Web Solutions ────────────────────────────────────────────────────────
  {
    id: 'website-design',
    category: 'Web Solutions',
    categoryId: 'web',
    icon: Paintbrush2,
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    lightBorder: 'border-blue-100',
    title: 'Website Design',
    tagline: 'Beautiful, purposeful design built for your audience.',
    description:
      'Custom visual design that reflects your brand, engages visitors from first impression, and guides them confidently toward key actions — built on user research and conversion principles, not personal taste.',
    benefits: [
      'Unique design system tailored to your brand identity and target audience',
      'Conversion-focused layouts informed by UX research and cognitive psychology',
      'Fully responsive across every device — mobile, tablet, and desktop',
      'Accessibility-compliant markup meeting WCAG 2.1 AA standards',
      'Delivered as a documented design system for future consistency',
    ],
    process: [
      { step: 'Discovery', desc: 'Brand audit, competitor landscape review, and target audience research' },
      { step: 'Wireframing', desc: 'Low-fidelity structure and user flow mapping for all key pages' },
      { step: 'Visual Design', desc: 'High-fidelity design in Figma with full brand identity application' },
      { step: 'Handoff', desc: 'Developer-ready files with component specs, spacing, and typography documentation' },
    ],
  },
  {
    id: 'website-development',
    category: 'Web Solutions',
    categoryId: 'web',
    icon: Code2,
    color: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    lightBorder: 'border-sky-100',
    title: 'Website Development',
    tagline: 'Fast, clean code engineered to perform and scale.',
    description:
      'Modern, component-based websites built on the right technology for your needs. Every site is engineered for speed, technical SEO, and long-term maintainability — not just visual output.',
    benefits: [
      'Component-based architecture built to scale alongside your business',
      'Core Web Vitals compliance for better search rankings and user experience',
      'Technical SEO foundations embedded from the first line of code',
      'Secure, documented codebase that any developer can maintain',
      'CMS integration so you manage your own content without developer dependency',
    ],
    process: [
      { step: 'Architecture', desc: 'Technology stack selection, project scaffolding, and environment setup' },
      { step: 'Development', desc: 'Responsive component build, CMS integration, and third-party API connections' },
      { step: 'Performance Pass', desc: 'Image optimization, lazy loading, caching, and Lighthouse audit' },
      { step: 'Launch', desc: 'Production deployment, DNS configuration, and uptime monitoring activation' },
    ],
  },
  {
    id: 'wordpress-development',
    category: 'Web Solutions',
    categoryId: 'web',
    icon: Globe,
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-indigo-50',
    lightBorder: 'border-indigo-100',
    title: 'WordPress Development',
    tagline: 'Custom WordPress built for performance, not page builders.',
    description:
      'Professional WordPress websites with fully custom themes, purpose-built plugins, and a content management experience that is genuinely intuitive — all without the performance penalties of drag-and-drop builders.',
    benefits: [
      'Custom theme built from scratch — no Elementor, no Divi, no page builder overhead',
      'Optimized for fast loading with Core Web Vitals performance in mind',
      'Custom post types and advanced fields for flexible, structured content management',
      'Security hardening from the start: limited login attempts, file hardening, audited plugins',
      'Full admin training and documentation so you own your content independently',
    ],
    process: [
      { step: 'Theme Architecture', desc: 'Custom theme scaffolding aligned with the approved design and WordPress best practices' },
      { step: 'Plugin Development', desc: 'Custom functionality built to spec — only what you need, nothing you don\'t' },
      { step: 'Content Migration', desc: 'Safe, structured migration of existing content with SEO redirect preservation' },
      { step: 'Hardening & Launch', desc: 'Performance tuning, security configuration, staging review, and production launch' },
    ],
  },
  {
    id: 'ecommerce',
    category: 'Web Solutions',
    categoryId: 'web',
    icon: ShoppingCart,
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
    lightBorder: 'border-cyan-100',
    title: 'E-Commerce Websites',
    tagline: 'Online stores engineered to convert browsers into buyers.',
    description:
      'Conversion-optimized e-commerce stores that make the buying journey smooth, trustworthy, and fast — from product discovery and filtering through to a checkout flow designed to reduce abandonment.',
    benefits: [
      'Streamlined checkout designed to minimize friction and cart abandonment',
      'Product catalogue with advanced filtering, search, and variant management',
      'Multiple secure payment gateway integrations tested end-to-end',
      'Inventory management, order tracking, and customer account areas',
      'Mobile-first shopping experience built for today\'s on-the-go shoppers',
    ],
    process: [
      { step: 'Store Architecture', desc: 'Product taxonomy, category structure, and full checkout flow design' },
      { step: 'Development', desc: 'Product pages, cart, checkout, account area, and wishlist build' },
      { step: 'Payment Integration', desc: 'Secure gateway connection, webhook setup, and transaction testing' },
      { step: 'QA & Launch', desc: 'End-to-end order flow testing, performance audit, and staged production launch' },
    ],
  },
  {
    id: 'landing-pages',
    category: 'Web Solutions',
    categoryId: 'web',
    icon: LayoutTemplate,
    color: 'from-blue-500 to-sky-400',
    bg: 'bg-blue-50',
    lightBorder: 'border-blue-100',
    title: 'Landing Pages',
    tagline: 'Single-goal pages built to convert every click.',
    description:
      'High-converting landing pages designed around one clear objective — whether that is capturing leads, driving sign-ups, selling a product, or promoting a campaign — built for maximum relevance and minimum friction.',
    benefits: [
      'Singular-focus design that removes distractions and directs attention to the conversion goal',
      'A/B test-ready structure with modular sections for continuous optimization',
      'Fast load times for stronger Quality Scores and better paid campaign ROI',
      'Mobile-optimized layout built for traffic from all sources and devices',
      'Analytics and conversion event tracking configured from day one',
    ],
    process: [
      { step: 'Goal Definition', desc: 'Clarify the primary conversion action, audience intent, and traffic source' },
      { step: 'Copy Framework', desc: 'Headline hierarchy, value proposition structure, objection handling, and social proof plan' },
      { step: 'Design & Build', desc: 'Visual design and responsive development with CTA prominence and trust signal placement' },
      { step: 'Tracking & Test', desc: 'Analytics goals, heatmap setup, and conversion event configuration for ongoing optimization' },
    ],
  },
  {
    id: 'website-redesign',
    category: 'Web Solutions',
    categoryId: 'web',
    icon: RefreshCw,
    color: 'from-blue-700 to-blue-500',
    bg: 'bg-blue-50',
    lightBorder: 'border-blue-100',
    title: 'Website Redesign',
    tagline: 'Modernize your site without losing your SEO foundation.',
    description:
      'Transform your existing website into a modern, high-performing asset — retaining and strengthening your SEO equity, improving the user experience, and aligning your digital presence with where your business is today.',
    benefits: [
      'Preserves existing search rankings through meticulous redirect mapping and SEO migration',
      'Modern visual identity that builds immediate trust and reduces bounce rate',
      'Improved Core Web Vitals and page speed compared to the original',
      'Clearer navigation and conversion pathways informed by analytics and user behavior data',
      'Content audit and restructuring to eliminate redundancy and improve clarity',
    ],
    process: [
      { step: 'Audit', desc: 'Technical SEO audit, UX review, analytics analysis, and content inventory' },
      { step: 'Redirect Mapping', desc: 'Comprehensive 301 redirect plan covering all URL changes to protect SEO equity' },
      { step: 'Design & Build', desc: 'New visual design and development applied to an improved, cleaned-up site structure' },
      { step: 'Staged Launch', desc: 'Careful rollout with monitoring for ranking stability, crawl errors, and performance' },
    ],
  },
  {
    id: 'website-maintenance',
    category: 'Web Solutions',
    categoryId: 'web',
    icon: Wrench,
    color: 'from-slate-600 to-blue-600',
    bg: 'bg-slate-50',
    lightBorder: 'border-slate-100',
    title: 'Website Maintenance',
    tagline: 'Proactive care so your site never becomes a liability.',
    description:
      'A managed maintenance service that keeps your website secure, up to date, fast, and reliable — so a neglected CMS or missed security patch never becomes a crisis or a ranked-penalty.',
    benefits: [
      'Regular CMS, theme, and plugin updates tested before deployment',
      'Daily or weekly backups with reliable, tested restoration procedures',
      'Continuous uptime monitoring with immediate alerts on downtime',
      'Monthly performance and security reports with clear metrics',
      'Priority-access support for bug fixes, content updates, and small changes',
    ],
    process: [
      { step: 'Onboarding', desc: 'Access setup, baseline security and performance audit, and backup system configuration' },
      { step: 'Scheduled Updates', desc: 'Regular CMS and plugin updates applied to a staging environment before going live' },
      { step: 'Monitoring', desc: 'Automated uptime checks, security scanning, and performance tracking running continuously' },
      { step: 'Monthly Report', desc: 'Concise summary of work completed, metrics, and any recommended improvements' },
    ],
  },
  // ── SEO & Growth ─────────────────────────────────────────────────────────
  {
    id: 'technical-seo',
    category: 'SEO & Growth',
    categoryId: 'seo',
    icon: Search,
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-cyan-50',
    lightBorder: 'border-cyan-100',
    title: 'Technical SEO',
    tagline: 'Build a search-engine-ready foundation that rankings grow on.',
    description:
      'Deep technical optimization that makes your website crawlable, indexable, and understood by search engines — addressing the under-the-hood issues that hold back organic performance regardless of how good your content is.',
    benefits: [
      'Improved crawlability and correct indexation across your full site architecture',
      'Core Web Vitals improvements that directly influence page experience rankings',
      'Schema markup implementation for rich search result appearances',
      'Internal linking architecture that efficiently distributes page authority',
      'Resolution of duplicate content, canonicalization, and keyword cannibalization issues',
    ],
    process: [
      { step: 'Technical Audit', desc: 'Full crawl, index coverage analysis, Core Web Vitals baseline, and structured data review' },
      { step: 'Issue Prioritization', desc: 'Issues ranked by estimated search impact and implementation complexity' },
      { step: 'Implementation', desc: 'Fixes applied directly or delivered as a developer-ready specification document' },
      { step: 'Monitoring', desc: 'Re-crawl verification, rank position tracking, and ongoing Core Web Vitals monitoring' },
    ],
  },
  {
    id: 'local-seo',
    category: 'SEO & Growth',
    categoryId: 'seo',
    icon: MapPin,
    color: 'from-sky-600 to-blue-600',
    bg: 'bg-sky-50',
    lightBorder: 'border-sky-100',
    title: 'Local SEO',
    tagline: 'Dominate search results in the markets that matter to you.',
    description:
      'Targeted SEO for businesses serving specific geographic areas — optimizing your Google Business Profile, local citations, and on-page signals to rank prominently in local search and Google Maps results.',
    benefits: [
      'Fully optimized Google Business Profile with category, content, and photo strategy',
      'Local keyword strategy based on genuine geographic search demand data',
      'NAP consistency audit and cleanup across all relevant citations and directories',
      'Service area pages with locally relevant, search-optimized content',
      'Review acquisition and response strategy to build local authority and trust signals',
    ],
    process: [
      { step: 'Local Audit', desc: 'GBP audit, citation gap analysis, and local competitor ranking review' },
      { step: 'Optimization', desc: 'GBP optimization, on-page local signal improvements, and citation cleanup' },
      { step: 'Content Strategy', desc: 'Service area page creation and locally relevant blog content planning' },
      { step: 'Ongoing Management', desc: 'Monthly GBP posts, review monitoring, citation maintenance, and ranking reports' },
    ],
  },
  // ── Digital Marketing ────────────────────────────────────────────────────
  {
    id: 'google-ads',
    category: 'Digital Marketing',
    categoryId: 'marketing',
    icon: MousePointerClick,
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    lightBorder: 'border-blue-100',
    title: 'Google Ads',
    tagline: 'Paid search built on data, not guesswork.',
    description:
      'Full-service Google Ads management focused on driving qualified traffic that converts — with complete transparency on budget allocation, bid strategy, and exactly what your investment is delivering.',
    benefits: [
      'Keyword research focused on buyer intent, not just search volume',
      'Ad copy testing framework to continuously improve click-through rates',
      'Conversion tracking for real business outcomes — not just clicks and impressions',
      'Ongoing negative keyword management to prevent budget waste on irrelevant traffic',
      'Transparent monthly reporting: spend, performance, and clear recommendations',
    ],
    process: [
      { step: 'Strategy & Setup', desc: 'Account structure, keyword research, audience targeting, and conversion tracking setup' },
      { step: 'Campaign Build', desc: 'Ad group creation, ad copy writing, landing page alignment, and bid strategy configuration' },
      { step: 'Launch & Monitor', desc: 'Initial performance monitoring, Quality Score optimization, and early bid adjustments' },
      { step: 'Monthly Optimization', desc: 'Performance review, A/B copy tests, negative keyword expansion, and budget reallocation' },
    ],
  },
  {
    id: 'social-media-marketing',
    category: 'Digital Marketing',
    categoryId: 'marketing',
    icon: Share2,
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
    lightBorder: 'border-sky-100',
    title: 'Social Media Marketing',
    tagline: 'Build a brand people follow and trust.',
    description:
      'Strategic social media management that builds genuine brand authority, grows an engaged audience, and complements your broader digital strategy — with paid social available to accelerate reach.',
    benefits: [
      'Platform-specific content strategy aligned with your brand voice and audience behavior',
      'Consistent, professionally crafted publishing schedule that builds audience trust',
      'Paid social campaigns targeted to reach your precise ideal customer profile',
      'Community management and authentic audience engagement across platforms',
      'Monthly analytics reporting with clear performance metrics and growth recommendations',
    ],
    process: [
      { step: 'Strategy', desc: 'Platform selection based on your audience, content pillar definition, and brand voice guidelines' },
      { step: 'Content Creation', desc: 'Visual asset production, copywriting, and scheduling calendar for the month ahead' },
      { step: 'Publishing & Engagement', desc: 'Consistent posting, comment monitoring, and community interaction' },
      { step: 'Reporting & Iteration', desc: 'Monthly analytics review, top-content analysis, and strategy adjustment for next period' },
    ],
  },
  // ── Performance & Security ───────────────────────────────────────────────
  {
    id: 'speed-optimization',
    category: 'Performance & Security',
    categoryId: 'performance',
    icon: Zap,
    color: 'from-blue-500 to-sky-400',
    bg: 'bg-blue-50',
    lightBorder: 'border-blue-100',
    title: 'Website Speed Optimization',
    tagline: 'Turn slow pages into a competitive advantage.',
    description:
      'Systematic, technical performance optimization that improves your Core Web Vitals scores, reduces real-world load times, and delivers a noticeably faster experience for every visitor on every connection.',
    benefits: [
      'Measurable improvement in Core Web Vitals: LCP, INP, and CLS scores',
      'Reduced page load times with direct positive impact on conversion rates',
      'Improved search ranking signals through better page experience performance',
      'Optimized asset delivery: compressed images, deferred scripts, streamlined CSS, and font loading',
      'Post-optimization monitoring to maintain gains and detect future regressions',
    ],
    process: [
      { step: 'Performance Audit', desc: 'Lighthouse audit, WebPageTest baseline, and real-user Core Web Vitals analysis' },
      { step: 'Diagnosis', desc: 'Identify root bottlenecks: render-blocking resources, oversized assets, server response times' },
      { step: 'Optimization', desc: 'Image compression, lazy loading, code splitting, caching headers, CDN configuration' },
      { step: 'Verification', desc: 'Post-implementation audit confirming improvements, monitoring setup for ongoing tracking' },
    ],
  },
  {
    id: 'website-security',
    category: 'Performance & Security',
    categoryId: 'performance',
    icon: ShieldCheck,
    color: 'from-blue-700 to-blue-500',
    bg: 'bg-blue-50',
    lightBorder: 'border-blue-100',
    title: 'Website Security',
    tagline: 'Protect your business, data, and customers online.',
    description:
      'Comprehensive security hardening, monitoring, and incident response for business websites — ensuring that a security vulnerability never becomes a public breach, a data loss event, or a search ranking penalty.',
    benefits: [
      'SSL/TLS implementation and certificate lifecycle management',
      'Malware detection, removal, and clean-state restoration procedures',
      'Web application firewall configuration and brute-force protection',
      'Secure authentication setup: strong password policies, 2FA, and access control review',
      'Regular security audits with a prioritized remediation plan delivered in plain language',
    ],
    process: [
      { step: 'Security Audit', desc: 'Vulnerability scan, plugin/dependency review, user access audit, and file permission check' },
      { step: 'Hardening', desc: 'Firewall rules, login protection, file integrity monitoring, and server hardening configuration' },
      { step: 'Continuous Monitoring', desc: 'Automated scanning, intrusion detection alerts, and uptime monitoring' },
      { step: 'Incident Response', desc: 'Defined response procedure for security events: isolation, cleanup, restoration, and disclosure' },
    ],
  },
];
