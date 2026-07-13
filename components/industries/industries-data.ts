import type { LucideIcon } from 'lucide-react';
import {
  HeartPulse,
  GraduationCap,
  Landmark,
  Building2,
  UtensilsCrossed,
  ShoppingBag,
  HardHat,
  Factory,
  Plane,
  Cpu,
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
    id: 'healthcare',
    name: 'Healthcare',
    tagline: 'Building patient trust through a professional digital presence.',
    description:
      'Healthcare providers face high patient expectations online. A professional, reassuring website is often the first point of contact between a practice and a prospective patient — and first impressions directly influence whether they book or leave.',
    icon: HeartPulse,
    color: 'from-rose-500 to-pink-600',
    headerFrom: '#f43f5e',
    headerTo: '#db2777',
    challengeAccent: 'bg-rose-50 border-rose-100 text-rose-700',
    solutionAccent: 'bg-blue-50 border-blue-100 text-blue-700',
    benefitAccent: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    challenges: [
      'Building immediate patient trust with a professional, credible online presence',
      'Communicating services, specialties, and credentials clearly to new patients',
      'Converting website visitors into appointment bookings without friction',
      'Appearing in local search results for specialty and location queries',
    ],
    solutions: [
      'Trust-forward design using clean aesthetics, credential display, and patient-centric copy',
      'Structured service pages that answer patient questions in calm, accessible language',
      'Online appointment booking integration with calendar and notification systems',
      'Local SEO strategy targeting specialty + location keyword combinations',
    ],
    benefits: [
      'More qualified patient enquiries arriving through organic search',
      'Reduced front-desk call volume via self-service online booking',
      'A stronger first impression that builds confidence before the first appointment',
      'Improved visibility in "near me" searches for your specific specialties',
    ],
  },
  {
    id: 'education',
    name: 'Education',
    tagline: 'Converting prospective students into enrolled ones.',
    description:
      'Educational institutions must communicate effectively to multiple audiences simultaneously — prospective students, current students, parents, and staff — while driving enrollment conversions and maintaining an accessible, authoritative presence.',
    icon: GraduationCap,
    color: 'from-blue-600 to-indigo-600',
    headerFrom: '#2563eb',
    headerTo: '#4f46e5',
    challengeAccent: 'bg-blue-50 border-blue-100 text-blue-700',
    solutionAccent: 'bg-indigo-50 border-indigo-100 text-indigo-700',
    benefitAccent: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    challenges: [
      'Communicating value to multiple audiences: students, parents, and administrators',
      'Converting website visitors into enrollment enquiries and applications',
      'Presenting course and program information in a clear, navigable structure',
      'Meeting accessibility standards required by educational institutions',
    ],
    solutions: [
      'Audience-segmented navigation and distinct content pathways for each user type',
      'Conversion-optimised enrollment pages with compelling calls to action and clear process',
      'Structured program directory with filtering, search, and detailed course pages',
      'WCAG 2.1 compliant development with full screen reader and keyboard navigation support',
    ],
    benefits: [
      'Higher enrollment enquiry conversion from prospective student website traffic',
      'Reduced administrative Q&A load through comprehensive self-service content',
      'Improved accessibility compliance and reach across all abilities',
      'Institutional credibility that supports recruitment and funding positioning',
    ],
  },
  {
    id: 'finance',
    name: 'Finance',
    tagline: 'Credibility and lead generation for financial services.',
    description:
      'Financial services businesses operate in a high-trust, high-stakes environment where website credibility directly impacts whether prospects take the next step. Compliance-conscious content, professional design, and a clear lead funnel are essential.',
    icon: Landmark,
    color: 'from-emerald-600 to-teal-700',
    headerFrom: '#059669',
    headerTo: '#0f766e',
    challengeAccent: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    solutionAccent: 'bg-blue-50 border-blue-100 text-blue-700',
    benefitAccent: 'bg-teal-50 border-teal-100 text-teal-700',
    challenges: [
      'Establishing immediate trust and authority in a scrutinised, regulated industry',
      'Explaining complex financial products in language clients can understand and act on',
      'Generating qualified organic leads for planning, investment, or lending services',
      'Presenting credentials, regulations, and risk disclosures without undermining UX',
    ],
    solutions: [
      'Trust-led design with professional aesthetics, credential placement, and security signals',
      'Plain-language service pages that educate prospects without overwhelming them',
      'SEO strategy targeting financial information and transactional search queries',
      'Carefully structured contact flows designed to attract high-quality enquiries',
    ],
    benefits: [
      'Stronger credibility and first impression for prospective clients and partners',
      'More qualified organic leads from relevant financial search terms',
      'Reduced prospect drop-off from complex, jargon-heavy service pages',
      'A digital presence that reflects the professionalism of your firm',
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    tagline: 'More direct leads, less reliance on listing portals.',
    description:
      'Real estate agents and firms face intense local competition and growing dependency on third-party listing portals. A strategic digital presence captures buyer and seller leads directly while building the brand credibility that drives referrals.',
    icon: Building2,
    color: 'from-amber-500 to-orange-600',
    headerFrom: '#f59e0b',
    headerTo: '#ea580c',
    challengeAccent: 'bg-amber-50 border-amber-100 text-amber-700',
    solutionAccent: 'bg-blue-50 border-blue-100 text-blue-700',
    benefitAccent: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    challenges: [
      'Differentiating your brand in a highly competitive, commoditised local market',
      'Capturing leads from property search traffic before visitors go to portal sites',
      'Showcasing listings, sold properties, and market expertise compellingly',
      'Providing a mobile-optimised experience for clients browsing on the go',
    ],
    solutions: [
      'Distinctive brand-led design that clearly positions you above generic agent websites',
      'Lead capture strategy with inquiry forms on property pages and area guide content',
      'Portfolio pages for sold properties, testimonials, and local market data content',
      'Mobile-first responsive development for seamless property browsing on all devices',
    ],
    benefits: [
      'More direct enquiries captured before users bounce to listing aggregators',
      'Stronger brand differentiation that builds referral trust and perceived value',
      'Improved local search visibility for neighbourhood and property keyword searches',
      'A professional presence that justifies your commission and wins vendor confidence',
    ],
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    tagline: 'More reservations and orders, fewer third-party commissions.',
    description:
      'Restaurants rely on local discoverability, appetite-stimulating presentation, and friction-free booking or ordering. A strong digital presence reduces dependence on commission-heavy aggregators and drives more direct, higher-margin revenue.',
    icon: UtensilsCrossed,
    color: 'from-orange-500 to-red-500',
    headerFrom: '#f97316',
    headerTo: '#ef4444',
    challengeAccent: 'bg-orange-50 border-orange-100 text-orange-700',
    solutionAccent: 'bg-blue-50 border-blue-100 text-blue-700',
    benefitAccent: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    challenges: [
      'Poor Google Business Profile presence losing foot traffic and table bookings',
      'Outdated or poorly designed menus undermining appetite appeal and brand perception',
      'No direct online reservation or ordering system creating unnecessary friction',
      'Low search visibility for cuisine type, occasion, and "near me" queries',
    ],
    solutions: [
      'Google Business Profile optimisation with menu integration, photos, and post cadence',
      'Visually led digital menu designed to reflect food quality and brand identity',
      'Direct reservation and online ordering integration reducing third-party dependency',
      'Local SEO strategy targeting cuisine, location, and occasion-based search intent',
    ],
    benefits: [
      'More direct reservations and orders, reducing commissions paid to aggregator platforms',
      'Stronger local search visibility driving consistent foot traffic and delivery orders',
      'A digital presence that reflects the quality and character of your food and hospitality',
      'Reduced platform dependency and improved margin on every direct booking',
    ],
  },
  {
    id: 'retail',
    name: 'Retail',
    tagline: 'E-commerce that converts browsers into loyal buyers.',
    description:
      'Retail businesses face high competition from large platforms on both discovery and purchasing experience. A high-performing, conversion-focused e-commerce presence is essential for capturing sales and building customer relationships that last.',
    icon: ShoppingBag,
    color: 'from-violet-500 to-purple-600',
    headerFrom: '#8b5cf6',
    headerTo: '#9333ea',
    challengeAccent: 'bg-violet-50 border-violet-100 text-violet-700',
    solutionAccent: 'bg-blue-50 border-blue-100 text-blue-700',
    benefitAccent: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    challenges: [
      'Competing with large e-commerce platforms on product discoverability and UX quality',
      'High cart abandonment rates from friction-heavy or trust-deficient checkout flows',
      'Managing product catalogues, variants, and inventory at scale without complexity',
      'Converting mobile shoppers who represent the growing majority of retail traffic',
    ],
    solutions: [
      'Custom e-commerce builds optimised for product discovery, filtering, and visual merchandising',
      'Conversion-focused checkout flow designed to reduce steps, friction, and abandonment',
      'Scalable catalogue architecture with variant, inventory, and promotion management',
      'Mobile-first shopping experience built for thumb-friendly navigation and fast loading',
    ],
    benefits: [
      'Higher conversion rate from product page views to completed, paid orders',
      'Reduced cart abandonment with a streamlined, trustworthy checkout experience',
      'A branded shop environment that builds loyalty alongside sales revenue',
      'Improved visibility in product-specific organic and paid search results',
    ],
  },
  {
    id: 'construction',
    name: 'Construction',
    tagline: 'A portfolio that wins contracts before you make a call.',
    description:
      'Construction and trade businesses win through demonstrated quality — but an outdated website fails to communicate that quality to prospective clients. A professional digital presence actively generates enquiries and positions you above competitors.',
    icon: HardHat,
    color: 'from-yellow-500 to-amber-600',
    headerFrom: '#eab308',
    headerTo: '#d97706',
    challengeAccent: 'bg-yellow-50 border-yellow-100 text-yellow-700',
    solutionAccent: 'bg-blue-50 border-blue-100 text-blue-700',
    benefitAccent: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    challenges: [
      'Showcasing completed projects in a way that wins trust and generates new enquiries',
      'Generating qualified quote requests from local commercial and residential searches',
      'Standing out from competitors relying on generic, template-based websites',
      'Communicating specialisms, accreditations, and safety standards credibly',
    ],
    solutions: [
      'Project portfolio design with case study pages covering scope, approach, and result',
      'Local SEO and targeted Google Ads for location + service type search combinations',
      'Custom brand-led design that reflects the professionalism of your physical work',
      'Service pages structured to communicate specialisms and relevant certifications clearly',
    ],
    benefits: [
      'More qualified quote requests from homeowners and commercial procurement teams',
      'A portfolio that actively sells by showing the standard and scale of your work',
      'Better local search visibility for specific construction and trade keyword searches',
      'A professional presence that sets higher perceived value for your services',
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'Digital infrastructure that supports complex B2B sales.',
    description:
      'Manufacturing businesses serve B2B buyers with long decision cycles and specific technical requirements. A well-structured digital presence helps procurement teams evaluate your capability, find your specifications, and take the first step toward a conversation.',
    icon: Factory,
    color: 'from-slate-600 to-slate-800',
    headerFrom: '#475569',
    headerTo: '#1e293b',
    challengeAccent: 'bg-slate-50 border-slate-200 text-slate-700',
    solutionAccent: 'bg-blue-50 border-blue-100 text-blue-700',
    benefitAccent: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    challenges: [
      'Presenting technical product specifications clearly to both specialist and non-specialist buyers',
      'Generating B2B enquiries from companies actively sourcing new suppliers or partners',
      'Supporting long buying cycles with content that nurtures decision-makers over time',
      'Overcoming outdated websites that do not reflect operational quality or capability',
    ],
    solutions: [
      'Technical product pages with structured specifications, downloadable datasheets, and comparison',
      'B2B SEO strategy targeting industry-specific procurement and supplier sourcing search terms',
      'Content assets: capability statements, case studies, and technical guides for the decision cycle',
      'Modern corporate web design that signals manufacturing quality and operational scale',
    ],
    benefits: [
      'More qualified B2B enquiries from procurement teams and sourcing professionals',
      'Better representation of your capability to domestic and international buyers',
      'Sales enablement content that shortens the evaluation phase of the buying process',
      'A digital presence that reflects the precision and scale of your manufacturing operation',
    ],
  },
  {
    id: 'travel',
    name: 'Travel',
    tagline: 'More direct bookings, fewer OTA commissions.',
    description:
      'Travel businesses compete against large OTAs for the same booking traffic while managing seasonal demand and high-expectation travellers. A well-designed, search-optimised direct booking experience reduces commission costs and builds lasting brand loyalty.',
    icon: Plane,
    color: 'from-sky-500 to-cyan-600',
    headerFrom: '#0ea5e9',
    headerTo: '#0891b2',
    challengeAccent: 'bg-sky-50 border-sky-100 text-sky-700',
    solutionAccent: 'bg-blue-50 border-blue-100 text-blue-700',
    benefitAccent: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    challenges: [
      'Large OTAs capturing direct booking traffic and charging significant commission fees',
      'Seasonal demand peaks requiring agile campaign and content management',
      'Converting destination browsing behaviour into confirmed, direct bookings',
      'Building traveller trust for significant financial and logistical commitments',
    ],
    solutions: [
      'Direct booking functionality with a smooth, confidence-building reservation flow',
      'SEO content strategy targeting destination, activity, and trip-type searches year-round',
      'Google Ads campaigns targeting high-intent travel queries with strong conversion focus',
      'Trust-building design: rich visual storytelling, transparent policies, and reassuring UX',
    ],
    benefits: [
      'More direct bookings, reducing commission costs paid to OTAs and aggregators',
      'Year-round organic traffic from destination content that compounds over time',
      'Stronger brand trust that supports premium pricing over generic alternatives',
      'Better paid advertising ROI through purpose-built, conversion-optimised landing pages',
    ],
  },
  {
    id: 'technology',
    name: 'Technology',
    tagline: 'Product-led growth starts with clear, convincing communication.',
    description:
      'Technology companies — particularly SaaS and product-led businesses — operate in markets with high design expectations and sophisticated buyers. Clear value proposition communication, optimised conversion flows, and technical SEO are competitive necessities.',
    icon: Cpu,
    color: 'from-blue-600 to-blue-800',
    headerFrom: '#2563eb',
    headerTo: '#1e40af',
    challengeAccent: 'bg-blue-50 border-blue-100 text-blue-700',
    solutionAccent: 'bg-indigo-50 border-indigo-100 text-indigo-700',
    benefitAccent: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    challenges: [
      'Communicating complex technical products simply to both technical and non-technical buyers',
      'Optimising conversion flows for free trials, demos, and SaaS sign-ups',
      'Meeting the elevated design and UX expectations of a tech-savvy audience',
      'Building organic visibility through technical content that attracts qualified buyers',
    ],
    solutions: [
      'Clear value proposition design with use-case pages accessible to both buyer types',
      'Conversion-optimised trial and demo flows with minimal friction and strong CTAs',
      'Premium UI/UX design that signals product quality and establishes instant credibility',
      'Technical SEO and content marketing targeting problem-aware and solution-aware queries',
    ],
    benefits: [
      'Higher trial and demo conversion rates from existing website traffic',
      'Clearer product communication that reduces time-to-close in the sales cycle',
      'A digital experience that reflects the quality and sophistication of your product',
      'Growing organic traffic from technical content that attracts qualified pipeline',
    ],
  },
];
