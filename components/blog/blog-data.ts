import type { LucideIcon } from 'lucide-react';
import {
  Code2, Search, ShoppingCart, Gauge, ShieldCheck, Share2, LayoutTemplate,
  Globe, Smartphone, PenTool, Mail, FileText, TrendingUp, Zap,
} from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  count: number;
}

export interface Author {
  name: string;
  role: string;
  initials: string;
  color: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryId: string;
  author: Author;
  date: string;
  readTime: number;
  featured: boolean;
  popular: boolean;
  cover: { from: string; to: string };
  icon: LucideIcon;
  image?: string;
  tags: string[];
}

export const categories: Category[] = [
  { id: 'web-design',       name: 'UX Architecture',      slug: 'ux-architecture',      icon: LayoutTemplate, color: 'from-[#063A9A] to-blue-700',    bg: 'bg-blue-50',    count: 4 },
  { id: 'development',      name: 'Development',          slug: 'development',          icon: Code2,         color: 'from-[#FF6600] to-orange-500',  bg: 'bg-orange-50',  count: 4 },
  { id: 'seo',              name: 'AEO & SEO',            slug: 'aeo-seo',              icon: Search,        color: 'from-blue-700 to-[#063A9A]',    bg: 'bg-blue-50',    count: 3 },
  { id: 'ecommerce',        name: 'E-Commerce',           slug: 'ecommerce',            icon: ShoppingCart,  color: 'from-orange-500 to-[#FF6600]',  bg: 'bg-orange-50',  count: 2 },
  { id: 'performance',      name: 'Performance',          slug: 'performance',          icon: Gauge,         color: 'from-[#063A9A] to-blue-800',    bg: 'bg-blue-50',    count: 2 },
  { id: 'security',         name: 'Security',             slug: 'security',             icon: ShieldCheck,   color: 'from-slate-700 to-slate-900',   bg: 'bg-slate-50',   count: 1 },
  { id: 'marketing',        name: 'Performance Marketing',slug: 'performance-marketing',icon: Share2,        color: 'from-[#FF6600] to-orange-600',  bg: 'bg-orange-50',  count: 3 },
];

export const authors: Record<string, Author> = {
  Anviaan:   { name: 'Anviaan Strategists', role: 'Lead Strategy', initials: 'AS', color: 'from-[#063A9A] to-blue-700' },
  design:   { name: 'UX Architecture',    role: 'Design Lab',    initials: 'UX', color: 'from-[#FF6600] to-orange-500' },
  dev:      { name: 'Engineering Desk',   role: 'Architecture',  initials: 'ED', color: 'from-[#063A9A] to-blue-800' },
  growth:   { name: 'Performance Desk',   role: 'Growth Lab',    initials: 'PD', color: 'from-orange-500 to-[#FF6600]' },
};

export const articles: Article[] = [
  // --- NEW BLOG ADDED HERE ---
  {
    id: '13',
    slug: 'getting-found-on-google-beyond-rankings',
    title: 'Why Getting Found on Google Is No Longer Just About Rankings',
    excerpt: 'Not long ago, digital marketing followed a fairly predictable playbook. Today, the search experience feels very different. Discover why digital visibility goes far beyond traditional SEO.',
    content: 'Not long ago, digital marketing followed a fairly predictable playbook. Build a website, optimize a few pages for search engines, publish blog articles, and gradually improve your rankings. The higher your website appeared in search results, the better your chances of attracting new customers.\n\nThat strategy worked for years because people relied on search engines differently.\n\nToday, the search experience feels very different. Before clicking on a website, users often find answers directly on the results page. Business profiles, customer reviews, AI-generated summaries, maps, featured snippets, and frequently asked questions now appear before many organic listings. In many cases, users make a decision without visiting a single website.\n\nFor businesses, this isn\'t the end of SEO. It\'s the beginning of a broader conversation about digital visibility.\n\n<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800">Search Has Changed, and So Has Customer Behaviour</h2>\nThink about the last time you searched for a local business.\n\nMaybe you were looking for an interior designer, a dental clinic, or a nearby café. Chances are you didn\'t immediately open the first website you saw. You probably looked at Google reviews, browsed a few photos, checked business hours, compared ratings, and only then decided whether the business was worth contacting.\n\nThis behaviour has become increasingly common for <a href="https://www.anviaan.com/industries" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">businesses across industries</a>.\n\nCustomers no longer judge a business based on a single webpage. They evaluate the entire digital experience. Every interaction, from a Google Business Profile to an Instagram page, contributes to the impression your business leaves behind.\n\nThat\'s why businesses need to think beyond rankings alone.\n\n<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800">A Website Still Matters, But It Is No Longer the Whole Story</h2>\nSome business owners interpret these changes as a sign that websites are becoming less important. In reality, the opposite is true.\n\nA professional website remains the centre of your digital presence. It gives you complete control over your brand, your messaging, and the customer journey. What has changed is the role that website plays.\n\nInstead of being the first place customers discover your business, it has become the place where they validate their decision. By the time someone visits your website, they may already know your reputation, have read customer reviews, and compared you with competitors.\n\nYour website is no longer responsible for creating the first impression. It is responsible for reinforcing it.\n\n<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800">Visibility Without Trust Doesn\'t Create Customers</h2>\nOne of the biggest misconceptions in digital marketing is that visibility automatically leads to growth.\n\nIt doesn\'t.\n\nA business can appear at the top of search results and still lose potential customers if its website looks outdated, its reviews are inconsistent, or its online presence feels incomplete.\n\nTrust has quietly become one of the strongest ranking factors in the minds of customers.\n\nPeople notice the details. They compare businesses. They read reviews. They explore portfolios. They look for signs that a company is active, credible, and professional before making contact.\n\n<a href="https://www.anviaan.com/services" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Search engine optimization</a> today is less about convincing algorithms and more about earning confidence from real people.\n\n<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800">Content Should Help Before It Sells</h2>\nMany companies still approach content marketing as an opportunity to promote their services. Every article becomes another sales pitch, and every social media post focuses on what the business offers.\n\nThe problem is that customers rarely search for businesses first. They search for answers.\n\nSomeone planning to redesign their home is more likely to ask, "How much does interior design cost?" than search for the name of a design studio. A small business owner is more likely to search, "Why isn\'t my website generating leads?" than "Best digital agency near me."\n\nBusinesses that consistently answer these questions position themselves as trusted advisors rather than service providers. Over time, that trust becomes far more valuable than any single advertisement.\n\n<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800">Your Digital Presence Is an Ecosystem, Not a Collection of Platforms</h2>\nOne of the most common mistakes businesses make is treating every digital channel as a separate project.\n\nThe website is managed by one team.\nSocial media is handled by another.\nGoogle Business Profile is updated only occasionally.\n\nThe result is an inconsistent experience for potential customers.\n\nStrong brands create consistency across every touchpoint. Their website, social media profiles, customer reviews, business listings, and content all communicate the same message. That consistency builds familiarity, and familiarity often leads to trust.\n\nInstead of asking whether your website or your social media is more important, ask whether they work together to support the same business objective.\n\n<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800">Local Businesses Have a Bigger Opportunity Than They Think</h2>\nFor local service providers, these changes create an opportunity rather than a challenge.\n\nWhether you\'re an architect, interior designer, doctor, restaurant owner, or law firm, customers are actively comparing businesses before making a decision. They want to see genuine reviews, recent projects, accurate contact information, and evidence that your business is active.\n\nBusinesses that invest in maintaining a complete digital presence often stand out, even in competitive markets. It isn\'t always the company with the largest advertising budget that wins. More often, it\'s the one that makes customers feel confident enough to take the next step.\n\n<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800">Looking Ahead</h2>\nDigital marketing will continue to evolve. Search engines will introduce new features, customer expectations will change, and new platforms will emerge. Chasing every trend is rarely a sustainable strategy.\n\nBuilding credibility, however, never goes out of style.\n\nBusinesses that invest in useful content, maintain a professional website, respond to customer feedback, and create a consistent online experience are better positioned for long-term success than those focused only on short-term rankings.\n\nThe tools may change, but the principle remains the same. People choose businesses they trust.\n\n<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800">Final Thoughts</h2>\nThe conversation around digital marketing is shifting from "How do we rank higher?" to "How do we become the business people trust when they find us?"\n\nThat\'s an important shift because sustainable growth has never been about attracting the highest number of visitors. It\'s about creating meaningful experiences that encourage the right people to engage with your business.\n\n<a href="https://www.anviaan.com/about" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">About Anviaan</a>: we believe successful digital marketing begins with understanding how people make decisions, not just how search engines rank websites. A strong digital presence is built through thoughtful strategy, valuable content, and consistent execution. Businesses that invest in these fundamentals today will be far better prepared for the opportunities that tomorrow\'s digital landscape brings.<br><br><strong>Ready to elevate your digital presence?</strong> <a href="https://www.anviaan.com/contact" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Contact us</a> today for a personalized consultation.',
    category: 'AEO & SEO',
    categoryId: 'seo',
    author: authors.Anviaan,
    date: '2026-07-21',
    readTime: 5,
    featured: true, 
    popular: true,
    cover: { from: '#063A9A', to: '#1e40af' },
    icon: Search,
    image: '/zeroclicksearch.jpg', 
    tags: ['AEO', 'Local SEO', 'Trust', 'Customer Behaviour', 'Digital Presence'],
  },
  // --- OLD ARTICLES BELOW ---
  {
    id: '1',
    slug: 'scale-ecommerce-sales-d2c-strategy-2026',
    title: 'How to Scale E-Commerce Sales and Protect Profit Margins in 2026',
    excerpt: 'Driving traffic is only half the battle. Discover the proven strategies to increase your e-commerce conversion rates, reduce RTO costs, and build a highly profitable D2C brand this year.',
    content: 'As part of <a href="https://www.anviaan.com/about" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">our approach</a>, we have seen many D2C brands focus entirely on acquiring new traffic, but true scalability lies in maximizing the value of every visitor while protecting your bottom line. In 2026, running a successful e-commerce business or multi-vendor marketplace requires a comprehensive <a href="https://www.anviaan.com/services" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">online growth strategy</a> and strict operational efficiency.\n\n <img src="/ecommerce-sales.jpg" alt="E-commerce Sales Strategy" style="width: 100%; border-radius: 12px; margin: 24px 0;" /> \n\nHere are the core strategies to dramatically increase your e-commerce sales and safeguard your profit margins:\n\n<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800">1. Aggressively Manage Return-to-Origin (RTO) Costs</h2>\nHigh sales volumes mean nothing if your return-to-origin (RTO) rates are eating into your profit margins. For <a href="https://www.anviaan.com/industries" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">industries we serve</a>, markets heavily reliant on Cash on Delivery (COD) can find failed deliveries crippling to a scaling brand. Implement rigorous address verification, incentivize prepaid orders with slight discounts, and use automated WhatsApp confirmations before dispatching items. Controlling RTO is the fastest way to instantly boost your net profitability without spending an extra dollar on ads.\n\n<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800">2. Leverage Short-Form Video Content</h2>\nStatic images are no longer enough to close a sale. Integrate short-form video campaigns and dynamic promotional visual concepts directly into your product pages and social media funnels. Showing the product in action through fast-paced, high-quality video drastically reduces buyer hesitation and builds instant trust. Structured video sequences act as a 24/7 salesperson for your brand.\n\n<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800">3. Streamline the Checkout Experience</h2>\nFriction is the enemy of conversion. The average e-commerce cart abandonment rate sits dangerously close to 70%. Implement one-click checkouts, offer multiple digital wallet options, and remove unnecessary form fields. If a customer has to think during the checkout process, you have already lost them.\n\n<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800">4. Optimize for High-Intent Search Queries</h2>\nStop bidding on broad, expensive keywords. Focus your SEO and Google Ads budget on high-intent, long-tail keywords where the customer is already in the buying phase. Pair this with retargeting campaigns that show personalized dynamic product ads to users who abandoned their carts.\n\nScaling an e-commerce brand requires a deep understanding of both high-conversion web development and ROI-focused marketing. If your current traffic isn\'t converting into revenue, it might be time for a growth audit.<br><br><a href="https://www.anviaan.com/contact" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Talk to our experts</a> today to safeguard your profit margins.',
    category: 'E-Commerce',
    categoryId: 'ecommerce',
    author: authors.Anviaan,
    date: '2026-07-15',
    readTime: 6,
    featured: false, 
    popular: true,
    cover: { from: '#063A9A', to: '#1d4ed8' },
    icon: ShoppingCart,
    image: '/ecommerce-sales.jpg', 
    tags: ['E-Commerce', 'D2C Scaling', 'Conversion Rate', 'RTO Management', 'Video Marketing'],
  },
  {
    id: '2',
    slug: 'wordpress-vs-headless-cms-2025',
    title: 'WordPress vs. Headless Architecture: Scaling for 2026',
    excerpt: 'WordPress powers over 40% of the web, but headless CMS architectures are gaining ground fast for high-traffic brands. We break down the real trade-offs — performance, AEO scaling, and developer experience.',
    content: 'WordPress remains the most popular content management system in the world, and for good reason. It is free, open-source, has a massive ecosystem of plugins and themes, and is genuinely usable by non-technical content editors. For most small-to-medium business websites, WordPress is a sensible default.\n\nA headless CMS separates your content repository (the back end) from your presentation layer (the front end). Content is delivered via an API, and your front end is built with a modern framework like Next.js, Astro, or Nuxt. This separation gives developers complete control over the presentation layer, which typically results in significantly better performance.\n\nThe trade-offs are real. Headless architectures are more complex to set up, require professional <a href="https://www.anviaan.com/services" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">website development services</a> for even small layout changes, and cost more to build. WordPress, by contrast, lets non-technical staff build and modify pages with page builders — though this convenience often comes at a significant performance cost.\n\nChoose WordPress if: you need a content team to manage the site independently, your budget is limited, you rely on specific WordPress plugins, or you want the fastest path to launch. Choose headless if: performance is critical for <a href="https://www.anviaan.com/industries" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">businesses across industries</a> like e-commerce, media-heavy, or competitive SEO, you have developer resources, you need content delivered to multiple channels (web, mobile, email), or you want a future-proof architecture.\n\nThere is no universally correct answer. To learn more about <a href="https://www.anviaan.com/about" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">our digital experts</a> and how we can help, remember that the right choice depends on your team, budget, performance requirements, and long-term plans.<br><br><a href="https://www.anviaan.com/contact" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Schedule a consultation</a> to plan your architecture.',
    category: 'Development',
    categoryId: 'development',
    author: authors.dev,
    date: '2025-01-08',
    readTime: 7,
    featured: false,
    popular: true,
    cover: { from: '#FF6600', to: '#ea580c' },
    icon: Code2,
    image: '/wordpress-vs-headless.jpg',
    tags: ['WordPress', 'Headless CMS', 'Next.js', 'Architecture'],
  },
  {
    id: '3',
    slug: 'aeo-local-seo-checklist-2026',
    title: 'AEO & Local Search: Dominating High-Intent Queries in 2026',
    excerpt: 'Local SEO and AI-Engine Optimization (AEO) are how modern customers find you. From Generative Search positioning to citation management, this is the playbook we use to scale local service brands.',
    content: 'Local <a href="https://www.anviaan.com/services" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Search engine optimization</a> is the practice of optimising your online presence to attract <a href="https://www.anviaan.com/industries" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">businesses across industries</a> from relevant local searches. These searches happen on Google, AI models, and other search engines, and they are some of the highest-intent queries a business can capture — people searching "near me" or with a location qualifier are usually ready to buy.\n\nStart with your Google Business Profile. Claim it, verify it, and complete every field: accurate business name, address, phone number, hours, categories, services, and photos. Post regularly — Google rewards active profiles. Respond to every review, positive or negative, within 24 hours.\n\nNAP consistency is non-negotiable. Your business Name, Address, and Phone number must be identical across your website, Google Business Profile, and every directory listing. Even small variations (St. vs Street, +44 vs 0044) confuse search engines and dilute your local signal.\n\nBuild location-specific landing pages for each service area. A plumber in Manchester should have dedicated pages for "Plumber in Salford", "Plumber in Stockport", and so on — each with unique, useful content about serving that area, not thin duplicate pages.\n\nAcquire reviews consistently. Ask satisfied customers to leave a Google review. Respond to every single one. Reviews are a top local ranking factor and a powerful conversion signal for prospective customers.\n\nFinally, earn local links. Sponsor local events, partner with complementary local businesses, and get listed in local directories and chambers of commerce. This is <a href="https://www.anviaan.com/about" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">our approach</a>: local relevance is built one relationship at a time.<br><br>Ready to dominate local search? <a href="https://www.anviaan.com/contact" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Get in touch</a> with us.',
    category: 'AEO & SEO',
    categoryId: 'seo',
    author: authors.growth,
    date: '2025-01-05',
    readTime: 9,
    featured: false,
    popular: true,
    cover: { from: '#063A9A', to: '#1e40af' },
    icon: Search,
    tags: ['Local SEO', 'AEO', 'Google Business Profile', 'Reviews'],
  },
  {
    id: '4',
    slug: 'conversion-centered-design-principles',
    title: '7 Conversion-Centred Architecture Principles Every Brand Needs',
    excerpt: 'A beautiful website that does not convert is an expensive brochure. These seven UX principles help turn visitors into high-ticket enquiries and sales — without resorting to dark patterns.',
    content: 'Conversion-centred design is the practice of providing <a href="https://www.anviaan.com/services" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">website development services</a> with a single, clear goal in mind: getting the visitor to take a specific action. For <a href="https://www.anviaan.com/about" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">our team</a>, it is not about manipulation — it is about clarity, reducing friction, and making the next step obvious for <a href="https://www.anviaan.com/industries" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">industry specific digital solutions</a>.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">1. One primary call to action per page.</h3>\nEvery page should have one clear, dominant action you want the visitor to take. Secondary actions can exist, but they should not compete visually. A confused visitor does nothing.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">2. Use visual hierarchy to guide attention.</h3>\nHeadings, colour, size, and whitespace all direct the eye. The most important elements — your value proposition, your CTA — should be the most visually prominent.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">3. Reduce form fields to the minimum.</h3>\nEvery additional field reduces conversion. Ask only for what you absolutely need to follow up. You can collect more information later in the relationship.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">4. Use social proof strategically.</h3>\nTestimonials, client names, certifications, and review counts reduce perceived risk. Place them near your call to action, not buried at the bottom of the page.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">5. Make your value proposition instantly clear.</h3>\nA visitor should understand what you do and who you do it for within three seconds of landing. If they have to think, they will leave.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">6. Remove friction from the conversion path.</h3>\nEvery click, every field, every page load is friction. Audit your conversion flow and eliminate steps that do not add value to the visitor.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">7. Design for mobile first.</h3>\nThe majority of your visitors are on mobile devices. If your mobile experience is an afterthought, your conversion rate will reflect that.<br><br>Want to improve your conversion rates? <a href="https://www.anviaan.com/contact" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Request a free consultation</a>.',
    category: 'UX Architecture',
    categoryId: 'web-design',
    author: authors.design,
    date: '2024-12-28',
    readTime: 6,
    featured: false,
    popular: true,
    cover: { from: '#FF6600', to: '#f97316' },
    icon: LayoutTemplate,
    tags: ['Conversion', 'UX Architecture', 'Design', 'CRO'],
  },
  {
    id: '5',
    slug: 'google-ads-budget-allocation-strategy',
    title: 'ROAS-Obsessed Budget Allocation for Google Ads & PMax',
    excerpt: 'Throwing budget at Google Ads without a strict ROAS strategy is the fastest way to burn capital. Here is the Anviaan framework for distributing spend across Search, Display, and Performance Max.',
    content: 'As part of our <a href="https://www.anviaan.com/services" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">digital marketing services</a>, Google Ads offers several campaign types, each serving a different stage of the customer journey. Allocating your budget across them strategically is the difference between profitable paid search and expensive failure.\n\nSearch campaigns capture high-intent queries — people actively searching for what you offer. These should typically receive the largest share of your budget (50–70%) because they drive the most direct conversions. Start here, get profitable, then expand.\n\nPerformance Max uses Google\'s machine learning to serve ads across all Google inventory. It can work well for e-commerce, but it is opaque — you have limited control over where your ads appear. Allocate 15–25% once your Search campaigns are profitable, and monitor placement reports carefully.\n\nDisplay campaigns build awareness and support remarketing. They are cheap but low-intent. Allocate 5–10% and use them primarily for remarketing to people who have already visited your site.\n\nRemarketing campaigns re-engage past visitors. They are typically your highest-ROI campaigns because the audience already knows you. Allocate 10–15% and use dynamic remarketing for e-commerce or tailored messaging for <a href="https://www.anviaan.com/industries" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">digital solutions for different industries</a>.\n\nHere is <a href="https://www.anviaan.com/about" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">our approach</a>: Review your allocation monthly. Move budget from underperforming campaigns to those delivering the best cost per acquisition. Never "set and forget" — Google Ads requires ongoing optimisation to remain profitable.<br><br>Ready to optimize your ad spend? <a href="https://www.anviaan.com/contact" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Talk to our experts</a>.',
    category: 'Performance Marketing',
    categoryId: 'marketing',
    author: authors.growth,
    date: '2024-12-22',
    readTime: 7,
    featured: false,
    popular: false,
    cover: { from: '#063A9A', to: '#1d4ed8' },
    icon: TrendingUp,
    tags: ['Google Ads', 'ROAS', 'PPC', 'Performance Max'],
  },
  {
    id: '6',
    slug: 'image-optimization-techniques-web',
    title: 'Image Optimisation Techniques That Actually Improve Page Speed',
    excerpt: 'Images are the heaviest assets on most websites. These optimisation techniques — from modern formats to responsive loading — can cut your page weight in half without visible quality loss.',
    content: 'Images account for over 50% of the average web page\'s total weight. Implementing <a href="https://www.anviaan.com/services" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Technical SEO solutions</a> and optimising them is the single highest-impact performance improvement most <a href="https://www.anviaan.com/industries" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">businesses across industries</a> can make, and it directly improves Core Web Vitals scores.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Use modern image formats.</h3>\nWebP and AVIF provide 25–50% better compression than JPEG and PNG with no visible quality loss. All modern browsers support WebP; AVIF is supported by Chrome, Firefox, and Safari. Serve modern formats with JPEG fallbacks using the <picture> element.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Serve responsive images.</h3>\nUse the srcset attribute to serve different image sizes based on the visitor\'s device. A mobile user should not download a 2000px hero image designed for desktop. Define multiple sizes and let the browser choose.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Lazy-load below-the-fold images.</h3>\nThe loading="lazy" attribute tells the browser to defer loading images until they are about to enter the viewport. This dramatically reduces initial page load time and bandwidth.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Compress images properly.</h3>\nUse tools like Squoosh, ImageOptim, or Sharp to compress images before upload. Aim for visual indistinguishability at the smallest file size. For photographs, quality 75–80 is usually indistinguishable from 100.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Always set width and height attributes.</h3>\nThis allows the browser to reserve space for the image before it loads, preventing Cumulative Layout Shift — a key Core Web Vitals metric.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Use a CDN.</h3>\nRecommended by <a href="https://www.anviaan.com/about" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">our digital experts</a>, a content delivery network serves images from a server geographically close to the visitor, reducing latency. Most CDNs also offer on-the-fly resizing and format conversion.<br><br>Struggling with page speed? <a href="https://www.anviaan.com/contact" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Contact us</a> for a technical review.',
    category: 'Performance',
    categoryId: 'performance',
    author: authors.dev,
    date: '2024-12-15',
    readTime: 6,
    featured: false,
    popular: false,
    cover: { from: '#FF6600', to: '#ea580c' },
    icon: Zap,
    tags: ['Images', 'WebP', 'Performance', 'Core Web Vitals'],
  },
  {
    id: '7',
    slug: 'website-redesign-without-losing-seo',
    title: 'How to Redesign Your Website Without Losing Your Search Rankings',
    excerpt: 'A website redesign can wipe out years of search visibility overnight — or it can preserve and grow your rankings. The difference is in the planning. Here is the redirect mapping process we use.',
    content: 'Redesigning a website is one of the riskiest projects any of the <a href="https://www.anviaan.com/industries" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">industries we serve</a> can undertake for its <a href="https://www.anviaan.com/services" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">SEO services</a>. URLs change, content moves, internal links shift, and page structure evolves. Without careful planning, a redesign can undo years of organic search investment in a single afternoon.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Start with a full URL inventory.</h3>\nCrawl your existing site and export every URL. This is your baseline. You need to know exactly what you have before you change anything.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Map every old URL to a new one.</h3>\nFor each URL on your existing site, decide where its content will live on the new site. Most pages will map cleanly to a new equivalent. Some will be merged. Some will be removed. Document every decision in a redirect spreadsheet.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Implement 301 redirects for every changed URL.</h3>\nA 301 redirect tells search engines that a page has permanently moved, passing the majority of its ranking authority to the new URL. Every URL that changes needs a 301 redirect to its new destination. No exceptions.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Preserve your content and on-page SEO elements.</h3>\nKeep your title tags, meta descriptions, H1s, and primary content where possible. If you are rewriting content, ensure the new version covers the same topics and keywords. Do not delete high-ranking pages without careful consideration.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Maintain your internal linking structure.</h3>\nInternal links distribute authority throughout your site. When you redesign, ensure important pages are still linked from prominent locations — main navigation, footer, and contextual links from other pages.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">After launch, monitor Google Search Console closely.</h3>\nHere is <a href="https://www.anviaan.com/about" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">our approach</a> to redirect mapping: Watch for crawl errors, indexing issues, and ranking fluctuations for the first two weeks. Some fluctuation is normal; significant drops require immediate investigation.<br><br>Planning a site migration? <a href="https://www.anviaan.com/contact" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Schedule a consultation</a> to protect your traffic.',
    category: 'AEO & SEO',
    categoryId: 'seo',
    author: authors.growth,
    date: '2024-12-10',
    readTime: 8,
    featured: false,
    popular: false,
    cover: { from: '#063A9A', to: '#2563eb' },
    icon: Search,
    tags: ['Redesign', 'Redirects', 'SEO Migration', '301'],
  },
  {
    id: '8',
    slug: 'ecommerce-checkout-optimization-guide',
    title: 'E-Commerce Checkout Optimisation: Reducing Cart Abandonment',
    excerpt: 'The average e-commerce cart abandonment rate is around 70%. That is a lot of lost revenue. These checkout optimisation strategies help you recover a meaningful share of those abandoned carts.',
    content: 'Cart abandonment is the single biggest leak in most e-commerce funnels. Implementing an <a href="https://www.anviaan.com/services" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">online growth strategy</a> is vital. The average abandonment rate sits around 70%, meaning seven out of ten people who add an item to their cart leave without buying. Recovering even a fraction of these represents significant revenue.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Offer guest checkout.</h3>\nForcing account creation is one of the top reasons people abandon carts. Let people buy as a guest, then offer account creation after the purchase is complete — when they are already committed.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Minimise form fields.</h3>\nAsk only for what is strictly necessary to fulfil the order. Auto-fill where possible: use the billing address as the default shipping address, use postcode lookup to auto-complete address fields, and store payment methods for returning customers.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Be transparent about costs early.</h3>\nUnexpected shipping costs at the final step are the number one reason for abandonment. Show shipping costs on the product page or in the cart, not at the final payment step. Offer free shipping thresholds where economically viable.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Provide multiple payment options.</h3>\nDifferent customers trust different payment methods. Offer card payments, digital wallets (Apple Pay, Google Pay), and buy-now-pay-later options where appropriate. Each additional payment method reduces friction for a segment of your audience in <a href="https://www.anviaan.com/industries" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">industry specific digital solutions</a>.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Send abandoned cart emails.</h3>\nWhen a logged-in user abandons a cart, send a reminder email within a few hours. A simple, friendly reminder can recover 10–15% of abandoned carts. Include a direct link back to their cart.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Optimise for mobile.</h3>\nDeveloped by <a href="https://www.anviaan.com/about" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">our team</a>, these checkout optimisation strategies show that the majority of e-commerce traffic is now mobile. If your mobile checkout is clunky, your abandonment rate will reflect that. Test your checkout on a real mobile device, on a real mobile network.<br><br>Losing sales at checkout? <a href="https://www.anviaan.com/contact" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Get in touch</a> to optimize your funnel.',
    category: 'E-Commerce',
    categoryId: 'ecommerce',
    author: authors.design,
    date: '2024-12-05',
    readTime: 7,
    featured: false,
    popular: false,
    cover: { from: '#FF6600', to: '#f97316' },
    icon: ShoppingCart,
    tags: ['E-Commerce', 'Checkout', 'CRO', 'Cart Abandonment'],
  },
  {
    id: '9',
    slug: 'website-accessibility-wcag-business-guide',
    title: 'Website Accessibility: A Practical WCAG Guide for Business Owners',
    excerpt: 'Accessibility is not just about compliance — it is about reaching more customers and building a better digital architecture for everyone. This guide covers the principles that matter most.',
    content: 'Web accessibility means providing <a href="https://www.anviaan.com/services" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">website development services</a> and websites that people with disabilities can use. It is a legal requirement in many jurisdictions, an ethical imperative, and — importantly — it makes your website better for everyone, reaching more <a href="https://www.anviaan.com/industries" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">businesses across industries</a>.\n\nThe Web Content Accessibility Guidelines (WCAG) are the international standard. WCAG 2.1 is the current recommendation, organised around four principles: content must be Perceivable, Operable, Understandable, and Robust.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Perceivable</h3>\nUsers can perceive the information. Provide alt text for images so screen readers can describe them. Use sufficient colour contrast — at least 4.5:1 for normal text. Do not rely on colour alone to convey information; use text labels and icons too.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Operable</h3>\nUsers can navigate and interact. Every interactive element must be usable with a keyboard alone — not everyone can use a mouse. Ensure focus states are visible. Give links descriptive text, not "click here". Provide a way to skip to main content.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Understandable</h3>\nContent and interface are clear. Use plain language. Make forms logical: labels above inputs, clear error messages, and instructions where needed. Avoid auto-playing media and unexpected page changes.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Robust</h3>\nContent works with assistive technologies. Use semantic HTML — proper headings, lists, landmarks. Ensure your site works with screen readers like NVDA and VoiceOver.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Start with an accessibility audit.</h3>\nFor <a href="https://www.anviaan.com/about" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">who we are</a>, accessibility is an ongoing practice. Automated tools like Lighthouse and axe DevTools catch many issues. Manual testing with a screen reader catches the rest. Prioritise fixes by impact and effort. Accessibility is not a one-time project.<br><br>Ensure your site is compliant. <a href="https://www.anviaan.com/contact" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Request a free consultation</a> for an audit.',
    category: 'UX Architecture',
    categoryId: 'web-design',
    author: authors.design,
    date: '2024-11-28',
    readTime: 9,
    featured: false,
    popular: false,
    cover: { from: '#063A9A', to: '#1e3a8a' },
    icon: LayoutTemplate,
    tags: ['Accessibility', 'WCAG', 'a11y', 'Inclusive Design'],
  },
  {
    id: '10',
    slug: 'technical-seo-audit-checklist',
    title: 'The Technical SEO Audit Playbook We Run on High-Stakes Projects',
    excerpt: 'Before we engineer a single piece of content, we run a deep technical architecture audit. Here is the exact playbook we use to identify the issues holding back organic scaling.',
    content: 'A technical SEO audit provides <a href="https://www.anviaan.com/services" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Technical SEO solutions</a> and forms the foundation of any organic growth strategy. It identifies the structural and technical issues preventing search engines from crawling, indexing, and ranking your content effectively. Here is <a href="https://www.anviaan.com/about" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">our approach</a> for every new project across the <a href="https://www.anviaan.com/industries" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">industries we serve</a>.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Crawlability</h3>\nCan search engines crawl your site? Check robots.txt for accidental blocks. Review your XML sitemap — is it submitted to Google Search Console, and does it only contain canonical URLs? Use a crawler like Screaming Frog to find orphan pages and broken links.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Indexation</h3>\nAre the right pages indexed? Use the site: operator and Search Console\'s Coverage report to compare indexed vs. submitted pages. Identify and fix noindex tags on pages you want indexed. Resolve canonicalisation issues — each page should have a self-referencing canonical.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Site architecture</h3>\nIs your site logically organised? Check your URL structure — is it clean and descriptive? Review your internal linking — are important pages linked from prominent locations? Ensure your navigation is crawlable (not JavaScript-dependent) and shallow.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">On-page elements</h3>\nAre your title tags and meta descriptions unique and compelling? Are H1s present and descriptive? Are images alt-tagged? Is schema markup implemented for rich results?\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Performance</h3>\nHow fast does your site load? Run Lighthouse and PageSpeed Insights. Check Core Web Vitals in Search Console. Identify render-blocking resources, oversized images, and slow server response times.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Mobile-friendliness</h3>\nIs your site usable on mobile? Use Google\'s Mobile-Friendly Test. Check that tap targets are appropriately sized, font is readable without zooming, and there is no horizontal scrolling.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Security</h3>\nIs your site served over HTTPS? Are there mixed-content warnings? Is your SSL certificate valid? Security is a confirmed ranking signal.\n\nDocument every issue, prioritise by impact and effort, and create a roadmap. Technical SEO is not glamorous, but it is the foundation everything else is built on.<br><br>Is your architecture holding you back? <a href="https://www.anviaan.com/contact" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Talk to our experts</a> for an audit.',
    category: 'AEO & SEO',
    categoryId: 'seo',
    author: authors.growth,
    date: '2024-11-20',
    readTime: 10,
    featured: false,
    popular: false,
    cover: { from: '#FF6600', to: '#ea580c' },
    icon: Search,
    tags: ['Technical SEO', 'Audit', 'Crawlability', 'Architecture'],
  },
  {
    id: '11',
    slug: 'social-media-content-strategy-2025',
    title: 'Performance-Driven Content: Scaling Social for High-Ticket Brands',
    excerpt: 'Posting for the sake of posting is not a strategy. Here is how to engineer a performance marketing content plan that builds authority, drives ROAS, and captures high-value traffic.',
    content: 'According to <a href="https://www.anviaan.com/about" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">who we are</a> at Anviaan, most businesses approach social media backwards: they start with the platforms and the posting schedule, then wonder why nothing happens. A <a href="https://www.anviaan.com/services" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">digital marketing services</a> content plan works the other way — starting with your business goals and working backward to the content.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Start with your goals.</h3>\nWhat do you want social media to achieve? Brand awareness, website traffic, lead generation, customer retention? Each goal requires a different content mix and platform focus. Be specific — "more followers" is not a goal.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Choose your platforms deliberately.</h3>\nYou do not need to be everywhere. Where does your audience spend their time? B2B audiences and <a href="https://www.anviaan.com/industries" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">digital solutions for different industries</a> thrive on LinkedIn. Visual brands thrive on Instagram. Community-building happens on Facebook groups. Choose one or two platforms and do them well.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Define your content pillars.</h3>\nThese are the recurring themes your content revolves around — typically three to five. A digital agency might have pillars like "client work", "industry insights", "behind-the-scenes", and "educational tips". Every post should map to a pillar.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Plan your content calendar.</h3>\nBatch your content creation — shoot photos in one session, write captions in another, schedule in a third. Use a scheduling tool to maintain consistency. Consistency beats frequency; posting twice a week every week beats posting daily for a month then disappearing.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Measure what matters.</h3>\nFollowers and likes are vanity metrics. Track website clicks, lead form submissions, and — most importantly — revenue attributed to social. Use UTM parameters to track social traffic in Google Analytics.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Engage genuinely.</h3>\nSocial media is not a broadcast channel. Respond to comments, participate in conversations, and build relationships. The businesses that win on social media treat it as a two-way channel, not a billboard.<br><br>Ready to scale your reach? <a href="https://www.anviaan.com/contact" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Contact us</a> today.',
    category: 'Performance Marketing',
    categoryId: 'marketing',
    author: authors.growth,
    date: '2024-11-14',
    readTime: 8,
    featured: false,
    popular: false,
    cover: { from: '#063A9A', to: '#1d4ed8' },
    icon: Share2,
    tags: ['Social Media', 'Content Strategy', 'ROAS', 'Performance'],
  },
  {
    id: '12',
    slug: 'responsive-design-best-practices-2025',
    title: 'Responsive Architecture Best Practices That Stand the Test of Time',
    excerpt: 'Responsive design is no longer optional — it is the baseline. These best practices help you build fluid digital architectures that convert beautifully across every device.',
    content: 'Responsive design ensures your fluid <a href="https://www.anviaan.com/services" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">website development services</a> adapt gracefully to every screen size. With mobile traffic now exceeding desktop for most <a href="https://www.anviaan.com/industries" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">businesses across industries</a>, responsive design is not a feature — it is a fundamental requirement.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Design mobile-first.</h3>\nStart with the smallest screen and work up. This forces you to prioritise content and keeps your mobile experience focused. Use min-width media queries to add complexity for larger screens, rather than stripping it away for smaller ones.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Use a fluid grid.</h3>\nLayouts should be based on relative units (percentages, fr units) rather than fixed pixels. CSS Grid and Flexbox make fluid layouts straightforward. Your content should reflow naturally as the viewport changes.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Make typography responsive.</h3>\nBody text should be at least 16px on mobile. Use relative units (rem) so text scales with user preferences. Set line-height to 1.5 or higher for readability. Breakpoints should adjust font sizes, not just layout.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Optimise touch targets.</h3>\nButtons and links should be at least 44x44 pixels — the minimum size for comfortable touch interaction. Space interactive elements adequately to prevent accidental taps. Hover states are irrelevant on touch devices; ensure all functionality is accessible without hovering.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Test on real devices.</h3>\nEmulators and responsive design modes are useful, but they do not capture the real mobile experience. Test on actual phones and tablets, on actual mobile networks. You will find issues that no simulator reveals.\n\n<h3 class="text-xl font-bold mt-8 mb-3 text-gray-800">Performance is part of responsive design.</h3>\nTested by <a href="https://www.anviaan.com/about" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">our digital experts</a>, these best practices help you see that a responsive site that loads slowly on mobile is still a broken experience. Optimise images, minimise JavaScript, and prioritise above-the-fold content. Responsive design and performance go hand in hand.<br><br>Is your mobile UX fully optimized? <a href="https://www.anviaan.com/contact" class="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">Schedule a consultation</a>.',
    category: 'UX Architecture',
    categoryId: 'web-design',
    author: authors.design,
    date: '2024-11-08',
    readTime: 6,
    featured: false,
    popular: false,
    cover: { from: '#FF6600', to: '#ea580c' },
    icon: Smartphone,
    tags: ['Responsive Design', 'Mobile', 'CSS Grid', 'UX Architecture'],
  },
];

export const postsPerPage = 6;