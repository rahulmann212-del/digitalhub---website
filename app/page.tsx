import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

// Lazy load below-the-fold sections using dynamic import for blazing-fast mobile performance
const ServicesSection = dynamic(() => import('@/components/ServicesSection'));
const WhyChooseSection = dynamic(() => import('@/components/WhyChooseSection'));
const ProcessSection = dynamic(() => import('@/components/ProcessSection'));
const TechnologySection = dynamic(() => import('@/components/TechnologySection'));
const PortfolioSection = dynamic(() => import('@/components/PortfolioSection'));
const BlogSection = dynamic(() => import('@/components/BlogSection'));
const CTASection = dynamic(() => import('@/components/CTASection'));

export default function HomePage() {
  // SEO Schema Data Object
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Anviaan",
    "url": "https://www.anviaan.com",
    "logo": "https://www.anviaan.com/ANVIAAN.png",
    "description": "Anviaan is a premier Digital Marketing and Web Development Company helping businesses grow faster through smarter digital experiences and scalable e-commerce solutions.",
    "founder": {
      "@type": "Person",
      "name": "Vijay Mishra"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8318724647",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/anviaan",
      "https://www.instagram.com/anviaan.co/",
      "https://www.facebook.com/profile.php?id=61592047228193",
      "https://x.com/anviaanhq",
      "https://www.youtube.com/@anviaanhq"
    ]
  };

  return (
    <>
      {/* Schema injected directly into the HTML head by Next.js */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <TechnologySection />
        <PortfolioSection />
        <BlogSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}