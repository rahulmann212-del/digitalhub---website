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
  tags: string[];
}

export const categories: Category[] = [
  { id: 'web-design',       name: 'Web Design',       slug: 'web-design',       icon: LayoutTemplate, color: 'from-blue-500 to-blue-700',     bg: 'bg-blue-50',   count: 4 },
  { id: 'development',      name: 'Development',      slug: 'development',      icon: Code2,         color: 'from-sky-500 to-blue-500',       bg: 'bg-sky-50',    count: 4 },
  { id: 'seo',              name: 'SEO',              slug: 'seo',              icon: Search,        color: 'from-cyan-500 to-blue-500',     bg: 'bg-cyan-50',   count: 3 },
  { id: 'ecommerce',        name: 'E-Commerce',       slug: 'ecommerce',        icon: ShoppingCart, color: 'from-violet-500 to-purple-600', bg: 'bg-violet-50', count: 2 },
  { id: 'performance',      name: 'Performance',     slug: 'performance',      icon: Gauge,         color: 'from-amber-500 to-orange-500',  bg: 'bg-amber-50',  count: 2 },
  { id: 'security',         name: 'Security',         slug: 'security',         icon: ShieldCheck,   color: 'from-emerald-500 to-teal-600',  bg: 'bg-emerald-50', count: 1 },
  { id: 'marketing',        name: 'Digital Marketing', slug: 'marketing',        icon: Share2,       color: 'from-rose-500 to-pink-600',     bg: 'bg-rose-50',   count: 3 },
];

export const authors: Record<string, Author> = {
  digitalhub: { name: 'DigitalHub Team', role: 'Editorial', initials: 'DH', color: 'from-blue-600 to-blue-500' },
  design:     { name: 'Studio Editorial', role: 'Design Desk', initials: 'SD', color: 'from-sky-500 to-blue-500' },
  dev:        { name: 'Engineering Desk', role: 'Engineering', initials: 'ED', color: 'from-indigo-500 to-blue-600' },
  growth:     { name: 'Growth Desk',      role: 'Growth',     initials: 'GD', color: 'from-emerald-500 to-teal-600' },
};

export const articles: Article[] = [
  {
    id: '1',
    slug: 'core-web-vitals-2025-guide',
    title: 'Core Web Vitals in 2025: A Practical Guide for Business Websites',
    excerpt:
      'Google\'s Core Web Vitals directly influence your search rankings and your visitors\' experience. Here is what each metric means, why it matters, and the concrete steps you can take to improve your scores this year.',
    content:
      'Core Web Vitals are three specific factors that Google considers essential to a webpage\'s overall user experience: Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift. In 2025, these metrics remain a confirmed ranking factor, meaning that a slow or janky website does not just frustrate users — it actively harms your visibility in search results.\n\nLargest Contentful Paint (LCP) measures loading performance. A good LCP score is under 2.5 seconds for 75% of page loads. The most common causes of poor LCP are slow server response times, render-blocking JavaScript and CSS, and oversized hero images. Practical fixes include optimising your images (use modern formats like WebP, serve appropriately sized images, and lazy-load below-the-fold assets), upgrading your hosting or using a CDN, and deferring non-critical JavaScript.\n\nInteraction to Next Paint (INP) replaced First Input Delay in 2024 and measures interactivity. A good INP is under 200 milliseconds. INP assesses how quickly your page responds to user input — clicks, taps, and key presses. Long JavaScript tasks, heavy third-party scripts, and unoptimised event handlers are the usual culprits. Breaking long tasks into smaller chunks, reducing JavaScript execution time, and using web workers for heavy computation all help.\n\nCumulative Layout Shift (CLS) measures visual stability. A good CLS is under 0.1. Nothing frustrates a visitor more than a page that jumps as it loads — buttons that move, text that shifts, images that push content down. Always set width and height dimensions on images and videos, reserve space for ads and embeds, and avoid inserting content above existing content.\n\nThe business case for Core Web Vitals is straightforward: better scores mean better rankings, lower bounce rates, and higher conversion rates. Start by measuring your current performance in Google Search Console, PageSpeed Insights, or Lighthouse, then prioritise fixes based on impact and effort.',
    category: 'Performance',
    categoryId: 'performance',
    author: authors.dev,
    date: '2025-01-12',
    readTime: 8,
    featured: true,
    popular: true,
    cover: { from: '#2563eb', to: '#0ea5e9' },
    icon: Gauge,
    tags: ['Core Web Vitals', 'Page Speed', 'SEO', 'LCP', 'INP', 'CLS'],
  },
  {
    id: '2',
    slug: 'wordpress-vs-headless-cms-2025',
    title: 'WordPress vs. Headless CMS: Which Should You Choose in 2025?',
    excerpt:
      'WordPress powers over 40% of the web, but headless CMS architectures are gaining ground fast. We break down the real trade-offs — performance, cost, developer experience, and content management — to help you decide.',
    content:
      'WordPress remains the most popular content management system in the world, and for good reason. It is free, open-source, has a massive ecosystem of plugins and themes, and is genuinely usable by non-technical content editors. For most small-to-medium business websites, WordPress is a sensible default.\n\nA headless CMS separates your content repository (the back end) from your presentation layer (the front end). Content is delivered via an API, and your front end is built with a modern framework like Next.js, Astro, or Nuxt. This separation gives developers complete control over the presentation layer, which typically results in significantly better performance.\n\nThe trade-offs are real. Headless architectures are more complex to set up, require developer involvement for even small layout changes, and cost more to build. WordPress, by contrast, lets non-technical staff build and modify pages with page builders — though this convenience often comes at a significant performance cost.\n\nChoose WordPress if: you need a content team to manage the site independently, your budget is limited, you rely on specific WordPress plugins, or you want the fastest path to launch. Choose headless if: performance is critical (e-commerce, media-heavy, or competitive SEO), you have developer resources, you need content delivered to multiple channels (web, mobile, email), or you want a future-proof architecture.\n\nThere is no universally correct answer. The right choice depends on your team, budget, performance requirements, and long-term plans.',
    category: 'Development',
    categoryId: 'development',
    author: authors.dev,
    date: '2025-01-08',
    readTime: 7,
    featured: false,
    popular: true,
    cover: { from: '#0ea5e9', to: '#2563eb' },
    icon: Code2,
    tags: ['WordPress', 'Headless CMS', 'Next.js', 'Architecture'],
  },
  {
    id: '3',
    slug: 'local-seo-checklist-2025',
    title: 'The Complete Local SEO Checklist for 2025',
    excerpt:
      'Local SEO is how customers in your area find you. From Google Business Profile optimisation to citation management, this is the practical checklist we use to help local businesses rank in their service area.',
    content:
      'Local SEO is the practice of optimising your online presence to attract more business from relevant local searches. These searches happen on Google and other search engines, and they are some of the highest-intent queries a business can capture — people searching "near me" or with a location qualifier are usually ready to buy.\n\nStart with your Google Business Profile. Claim it, verify it, and complete every field: accurate business name, address, phone number, hours, categories, services, and photos. Post regularly — Google rewards active profiles. Respond to every review, positive or negative, within 24 hours.\n\nNAP consistency is non-negotiable. Your business Name, Address, and Phone number must be identical across your website, Google Business Profile, and every directory listing. Even small variations (St. vs Street, +44 vs 0044) confuse search engines and dilute your local signal.\n\nBuild location-specific landing pages for each service area. A plumber in Manchester should have dedicated pages for "Plumber in Salford", "Plumber in Stockport", and so on — each with unique, useful content about serving that area, not thin duplicate pages.\n\nAcquire reviews consistently. Ask satisfied customers to leave a Google review. Respond to every single one. Reviews are a top local ranking factor and a powerful conversion signal for prospective customers.\n\nFinally, earn local links. Sponsor local events, partner with complementary local businesses, and get listed in local directories and chambers of commerce. Local relevance is built one relationship at a time.',
    category: 'SEO',
    categoryId: 'seo',
    author: authors.growth,
    date: '2025-01-05',
    readTime: 9,
    featured: false,
    popular: true,
    cover: { from: '#0891b2', to: '#2563eb' },
    icon: Search,
    tags: ['Local SEO', 'Google Business Profile', 'Citations', 'Reviews'],
  },
  {
    id: '4',
    slug: 'conversion-centered-design-principles',
    title: '7 Conversion-Centred Design Principles Every Business Website Needs',
    excerpt:
      'A beautiful website that does not convert is an expensive brochure. These seven design principles help turn visitors into enquiries, sign-ups, and sales — without resorting to dark patterns.',
    content:
      'Conversion-centred design is the practice of designing web pages with a single, clear goal in mind: getting the visitor to take a specific action. It is not about manipulation — it is about clarity, reducing friction, and making the next step obvious.\n\n1. One primary call to action per page. Every page should have one clear, dominant action you want the visitor to take. Secondary actions can exist, but they should not compete visually. A confused visitor does nothing.\n\n2. Use visual hierarchy to guide attention. Headings, colour, size, and whitespace all direct the eye. The most important elements — your value proposition, your CTA — should be the most visually prominent.\n\n3. Reduce form fields to the minimum. Every additional field reduces conversion. Ask only for what you absolutely need to follow up. You can collect more information later in the relationship.\n\n4. Use social proof strategically. Testimonials, client names, certifications, and review counts reduce perceived risk. Place them near your call to action, not buried at the bottom of the page.\n\n5. Make your value proposition instantly clear. A visitor should understand what you do and who you do it for within three seconds of landing. If they have to think, they will leave.\n\n6. Remove friction from the conversion path. Every click, every field, every page load is friction. Audit your conversion flow and eliminate steps that do not add value to the visitor.\n\n7. Design for mobile first. The majority of your visitors are on mobile devices. If your mobile experience is an afterthought, your conversion rate will reflect that.',
    category: 'Web Design',
    categoryId: 'web-design',
    author: authors.design,
    date: '2024-12-28',
    readTime: 6,
    featured: false,
    popular: true,
    cover: { from: '#4f46e5', to: '#2563eb' },
    icon: LayoutTemplate,
    tags: ['Conversion', 'UX', 'Design', 'CRO'],
  },
  {
    id: '5',
    slug: 'google-ads-budget-allocation-strategy',
    title: 'How to Allocate Your Google Ads Budget Across Campaign Types',
    excerpt:
      'Throwing budget at Google Ads without a strategy is the fastest way to waste marketing spend. Here is a framework for distributing your budget across Search, Display, Performance Max, and Remarketing.',
    content:
      'Google Ads offers several campaign types, each serving a different stage of the customer journey. Allocating your budget across them strategically is the difference between profitable paid search and expensive failure.\n\nSearch campaigns capture high-intent queries — people actively searching for what you offer. These should typically receive the largest share of your budget (50–70%) because they drive the most direct conversions. Start here, get profitable, then expand.\n\nPerformance Max uses Google\'s machine learning to serve ads across all Google inventory. It can work well for e-commerce, but it is opaque — you have limited control over where your ads appear. Allocate 15–25% once your Search campaigns are profitable, and monitor placement reports carefully.\n\nDisplay campaigns build awareness and support remarketing. They are cheap but low-intent. Allocate 5–10% and use them primarily for remarketing to people who have already visited your site.\n\nRemarketing campaigns re-engage past visitors. They are typically your highest-ROI campaigns because the audience already knows you. Allocate 10–15% and use dynamic remarketing for e-commerce or tailored messaging for service businesses.\n\nReview your allocation monthly. Move budget from underperforming campaigns to those delivering the best cost per acquisition. Never "set and forget" — Google Ads requires ongoing optimisation to remain profitable.',
    category: 'Digital Marketing',
    categoryId: 'marketing',
    author: authors.growth,
    date: '2024-12-22',
    readTime: 7,
    featured: false,
    popular: false,
    cover: { from: '#e11d48', to: '#db2777' },
    icon: TrendingUp,
    tags: ['Google Ads', 'PPC', 'Budget', 'Performance Max'],
  },
  {
    id: '6',
    slug: 'image-optimization-techniques-web',
    title: 'Image Optimisation Techniques That Actually Improve Page Speed',
    excerpt:
      'Images are the heaviest assets on most websites. These optimisation techniques — from modern formats to responsive loading — can cut your page weight in half without visible quality loss.',
    content:
      'Images account for over 50% of the average web page\'s total weight. Optimising them is the single highest-impact performance improvement most websites can make, and it directly improves Core Web Vitals scores.\n\nUse modern image formats. WebP and AVIF provide 25–50% better compression than JPEG and PNG with no visible quality loss. All modern browsers support WebP; AVIF is supported by Chrome, Firefox, and Safari. Serve modern formats with JPEG fallbacks using the <picture> element.\n\nServe responsive images. Use the srcset attribute to serve different image sizes based on the visitor\'s device. A mobile user should not download a 2000px hero image designed for desktop. Define multiple sizes and let the browser choose.\n\nLazy-load below-the-fold images. The loading="lazy" attribute tells the browser to defer loading images until they are about to enter the viewport. This dramatically reduces initial page load time and bandwidth.\n\nCompress images properly. Use tools like Squoosh, ImageOptim, or Sharp to compress images before upload. Aim for visual indistinguishability at the smallest file size. For photographs, quality 75–80 is usually indistinguishable from 100.\n\nAlways set width and height attributes. This allows the browser to reserve space for the image before it loads, preventing Cumulative Layout Shift — a key Core Web Vitals metric.\n\nUse a CDN. A content delivery network serves images from a server geographically close to the visitor, reducing latency. Most CDNs also offer on-the-fly resizing and format conversion.',
    category: 'Performance',
    categoryId: 'performance',
    author: authors.dev,
    date: '2024-12-15',
    readTime: 6,
    featured: false,
    popular: false,
    cover: { from: '#f59e0b', to: '#ea580c' },
    icon: Zap,
    tags: ['Images', 'WebP', 'Performance', 'Core Web Vitals'],
  },
  {
    id: '7',
    slug: 'website-redesign-without-losing-seo',
    title: 'How to Redesign Your Website Without Losing Your SEO Rankings',
    excerpt:
      'A website redesign can wipe out years of search visibility overnight — or it can preserve and grow your rankings. The difference is in the planning. Here is the redirect mapping process we use.',
    content:
      'Redesigning a website is one of the riskiest projects a business can undertake for its SEO. URLs change, content moves, internal links shift, and page structure evolves. Without careful planning, a redesign can undo years of organic search investment in a single afternoon.\n\nStart with a full URL inventory. Crawl your existing site and export every URL. This is your baseline. You need to know exactly what you have before you change anything.\n\nMap every old URL to a new one. For each URL on your existing site, decide where its content will live on the new site. Most pages will map cleanly to a new equivalent. Some will be merged. Some will be removed. Document every decision in a redirect spreadsheet.\n\nImplement 301 redirects for every changed URL. A 301 redirect tells search engines that a page has permanently moved, passing the majority of its ranking authority to the new URL. Every URL that changes needs a 301 redirect to its new destination. No exceptions.\n\nPreserve your content and on-page SEO elements. Keep your title tags, meta descriptions, H1s, and primary content where possible. If you are rewriting content, ensure the new version covers the same topics and keywords. Do not delete high-ranking pages without careful consideration.\n\nMaintain your internal linking structure. Internal links distribute authority throughout your site. When you redesign, ensure important pages are still linked from prominent locations — main navigation, footer, and contextual links from other pages.\n\nAfter launch, monitor Google Search Console closely for the first two weeks. Watch for crawl errors, indexing issues, and ranking fluctuations. Some fluctuation is normal; significant drops require immediate investigation.',
    category: 'SEO',
    categoryId: 'seo',
    author: authors.growth,
    date: '2024-12-10',
    readTime: 8,
    featured: false,
    popular: false,
    cover: { from: '#0891b2', to: '#0d9488' },
    icon: Search,
    tags: ['Redesign', 'Redirects', 'SEO Migration', '301'],
  },
  {
    id: '8',
    slug: 'ecommerce-checkout-optimization-guide',
    title: 'E-Commerce Checkout Optimisation: Reducing Cart Abandonment',
    excerpt:
      'The average e-commerce cart abandonment rate is around 70%. That is a lot of lost revenue. These checkout optimisation strategies help you recover a meaningful share of those abandoned carts.',
    content:
      'Cart abandonment is the single biggest leak in most e-commerce funnels. The average abandonment rate sits around 70%, meaning seven out of ten people who add an item to their cart leave without buying. Recovering even a fraction of these represents significant revenue.\n\nOffer guest checkout. Forcing account creation is one of the top reasons people abandon carts. Let people buy as a guest, then offer account creation after the purchase is complete — when they are already committed.\n\nMinimise form fields. Ask only for what is strictly necessary to fulfil the order. Auto-fill where possible: use the billing address as the default shipping address, use postcode lookup to auto-complete address fields, and store payment methods for returning customers.\n\nBe transparent about costs early. Unexpected shipping costs at the final step are the number one reason for abandonment. Show shipping costs on the product page or in the cart, not at the final payment step. Offer free shipping thresholds where economically viable.\n\nProvide multiple payment options. Different customers trust different payment methods. Offer card payments, digital wallets (Apple Pay, Google Pay), and buy-now-pay-later options where appropriate. Each additional payment method reduces friction for a segment of your audience.\n\nSend abandoned cart emails. When a logged-in user abandons a cart, send a reminder email within a few hours. A simple, friendly reminder can recover 10–15% of abandoned carts. Include a direct link back to their cart.\n\nOptimise for mobile. The majority of e-commerce traffic is now mobile. If your mobile checkout is clunky, your abandonment rate will reflect that. Test your checkout on a real mobile device, on a real mobile network.',
    category: 'E-Commerce',
    categoryId: 'ecommerce',
    author: authors.design,
    date: '2024-12-05',
    readTime: 7,
    featured: false,
    popular: false,
    cover: { from: '#8b5cf6', to: '#9333ea' },
    icon: ShoppingCart,
    tags: ['E-Commerce', 'Checkout', 'CRO', 'Cart Abandonment'],
  },
  {
    id: '9',
    slug: 'website-accessibility-wcag-business-guide',
    title: 'Website Accessibility: A Practical WCAG Guide for Business Owners',
    excerpt:
      'Accessibility is not just about compliance — it is about reaching more customers and building a better website for everyone. This guide covers the WCAG principles that matter most for business sites.',
    content:
      'Web accessibility means designing and developing websites that people with disabilities can use. It is a legal requirement in many jurisdictions, an ethical imperative, and — importantly — it makes your website better for everyone.\n\nThe Web Content Accessibility Guidelines (WCAG) are the international standard. WCAG 2.1 is the current recommendation, organised around four principles: content must be Perceivable, Operable, Understandable, and Robust.\n\nPerceivable means users can perceive the information. Provide alt text for images so screen readers can describe them. Use sufficient colour contrast — at least 4.5:1 for normal text. Do not rely on colour alone to convey information; use text labels and icons too.\n\nOperable means users can navigate and interact. Every interactive element must be usable with a keyboard alone — not everyone can use a mouse. Ensure focus states are visible. Give links descriptive text, not "click here". Provide a way to skip to main content.\n\nUnderstandable means content and interface are clear. Use plain language. Make forms logical: labels above inputs, clear error messages, and instructions where needed. Avoid auto-playing media and unexpected page changes.\n\nRobust means content works with assistive technologies. Use semantic HTML — proper headings, lists, landmarks. Ensure your site works with screen readers like NVDA and VoiceOver.\n\nStart with an accessibility audit. Automated tools like Lighthouse and axe DevTools catch many issues. Manual testing with a screen reader catches the rest. Prioritise fixes by impact and effort. Accessibility is an ongoing practice, not a one-time project.',
    category: 'Web Design',
    categoryId: 'web-design',
    author: authors.design,
    date: '2024-11-28',
    readTime: 9,
    featured: false,
    popular: false,
    cover: { from: '#2563eb', to: '#4f46e5' },
    icon: LayoutTemplate,
    tags: ['Accessibility', 'WCAG', 'a11y', 'Inclusive Design'],
  },
  {
    id: '10',
    slug: 'technical-seo-audit-checklist',
    title: 'The Technical SEO Audit Checklist We Run on Every New Project',
    excerpt:
      'Before we write a single line of content, we run a technical SEO audit. Here is the exact checklist we use to identify the issues holding back organic performance on a new client website.',
    content:
      'A technical SEO audit is the foundation of any organic growth strategy. It identifies the structural and technical issues preventing search engines from crawling, indexing, and ranking your content effectively. Here is the checklist we run on every new project.\n\nCrawlability. Can search engines crawl your site? Check robots.txt for accidental blocks. Review your XML sitemap — is it submitted to Google Search Console, and does it only contain canonical URLs? Use a crawler like Screaming Frog to find orphan pages and broken links.\n\nIndexation. Are the right pages indexed? Use the site: operator and Search Console\'s Coverage report to compare indexed vs. submitted pages. Identify and fix noindex tags on pages you want indexed. Resolve canonicalisation issues — each page should have a self-referencing canonical.\n\nSite architecture. Is your site logically organised? Check your URL structure — is it clean and descriptive? Review your internal linking — are important pages linked from prominent locations? Ensure your navigation is crawlable (not JavaScript-dependent) and shallow.\n\nOn-page elements. Are your title tags and meta descriptions unique and compelling? Are H1s present and descriptive? Are images alt-tagged? Is schema markup implemented for rich results?\n\nPerformance. How fast does your site load? Run Lighthouse and PageSpeed Insights. Check Core Web Vitals in Search Console. Identify render-blocking resources, oversized images, and slow server response times.\n\nMobile-friendliness. Is your site usable on mobile? Use Google\'s Mobile-Friendly Test. Check that tap targets are appropriately sized, font is readable without zooming, and there is no horizontal scrolling.\n\nSecurity. Is your site served over HTTPS? Are there mixed-content warnings? Is your SSL certificate valid? Security is a confirmed ranking signal.\n\nDocument every issue, prioritise by impact and effort, and create a roadmap. Technical SEO is not glamorous, but it is the foundation everything else is built on.',
    category: 'SEO',
    categoryId: 'seo',
    author: authors.growth,
    date: '2024-11-20',
    readTime: 10,
    featured: false,
    popular: false,
    cover: { from: '#0d9488', to: '#0891b2' },
    icon: Search,
    tags: ['Technical SEO', 'Audit', 'Crawlability', 'Indexation'],
  },
  {
    id: '11',
    slug: 'social-media-content-strategy-2025',
    title: 'Building a Social Media Content Strategy That Actually Drives Traffic',
    excerpt:
      'Posting for the sake of posting is not a strategy. Here is how to build a social media content plan that supports your business goals, builds audience trust, and drives measurable traffic.',
    content:
      'Most businesses approach social media backwards: they start with the platforms and the posting schedule, then wonder why nothing happens. A content strategy works the other way — starting with your business goals and working backward to the content.\n\nStart with your goals. What do you want social media to achieve? Brand awareness, website traffic, lead generation, customer retention? Each goal requires a different content mix and platform focus. Be specific — "more followers" is not a goal.\n\nChoose your platforms deliberately. You do not need to be everywhere. Where does your audience spend their time? B2B audiences are on LinkedIn. Visual brands thrive on Instagram. Community-building happens on Facebook groups. Choose one or two platforms and do them well.\n\nDefine your content pillars. These are the recurring themes your content revolves around — typically three to five. A digital agency might have pillars like "client work", "industry insights", "behind-the-scenes", and "educational tips". Every post should map to a pillar.\n\nPlan your content calendar. Batch your content creation — shoot photos in one session, write captions in another, schedule in a third. Use a scheduling tool to maintain consistency. Consistency beats frequency; posting twice a week every week beats posting daily for a month then disappearing.\n\nMeasure what matters. Followers and likes are vanity metrics. Track website clicks, lead form submissions, and — most importantly — revenue attributed to social. Use UTM parameters to track social traffic in Google Analytics.\n\nEngage genuinely. Social media is not a broadcast channel. Respond to comments, participate in conversations, and build relationships. The businesses that win on social media treat it as a two-way channel, not a billboard.',
    category: 'Digital Marketing',
    categoryId: 'marketing',
    author: authors.growth,
    date: '2024-11-14',
    readTime: 8,
    featured: false,
    popular: false,
    cover: { from: '#e11d48', to: '#f43f5e' },
    icon: Share2,
    tags: ['Social Media', 'Content Strategy', 'Marketing'],
  },
  {
    id: '12',
    slug: 'responsive-design-best-practices-2025',
    title: 'Responsive Design Best Practices That Stand the Test of Time',
    excerpt:
      'Responsive design is no longer optional — it is the baseline. These best practices help you build websites that work beautifully across every device, from the smallest phone to the largest desktop.',
    content:
      'Responsive design ensures your website adapts gracefully to every screen size. With mobile traffic now exceeding desktop for most websites, responsive design is not a feature — it is a fundamental requirement.\n\nDesign mobile-first. Start with the smallest screen and work up. This forces you to prioritise content and keeps your mobile experience focused. Use min-width media queries to add complexity for larger screens, rather than stripping it away for smaller ones.\n\nUse a fluid grid. Layouts should be based on relative units (percentages, fr units) rather than fixed pixels. CSS Grid and Flexbox make fluid layouts straightforward. Your content should reflow naturally as the viewport changes.\n\nMake typography responsive. Body text should be at least 16px on mobile. Use relative units (rem) so text scales with user preferences. Set line-height to 1.5 or higher for readability. Breakpoints should adjust font sizes, not just layout.\n\nOptimise touch targets. Buttons and links should be at least 44x44 pixels — the minimum size for comfortable touch interaction. Space interactive elements adequately to prevent accidental taps. Hover states are irrelevant on touch devices; ensure all functionality is accessible without hovering.\n\nTest on real devices. Emulators and responsive design modes are useful, but they do not capture the real mobile experience. Test on actual phones and tablets, on actual mobile networks. You will find issues that no simulator reveals.\n\nPerformance is part of responsive design. A responsive site that loads slowly on mobile is still a broken experience. Optimise images, minimise JavaScript, and prioritise above-the-fold content. Responsive design and performance go hand in hand.',
    category: 'Web Design',
    categoryId: 'web-design',
    author: authors.design,
    date: '2024-11-08',
    readTime: 6,
    featured: false,
    popular: false,
    cover: { from: '#0ea5e9', to: '#2563eb' },
    icon: Smartphone,
    tags: ['Responsive Design', 'Mobile', 'CSS Grid', 'Flexbox'],
  },
];

export const postsPerPage = 6;
