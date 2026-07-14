import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import CategoryNav from '@/components/services/CategoryNav';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesComparison from '@/components/services/ServicesComparison';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata: Metadata = {
  title: 'Growth Services: SEO, Ads & High-Conversion Web Dev | Rankovio',
  description:
    'Scale your business with Rankovio’s result-driven services. Expert Google & Meta Ads, performance-based SEO, and high-conversion e-commerce web development to turn your traffic into profit.',
  keywords:
    'growth marketing services, high-conversion web development, e-commerce development agency, Google Ads ROI management, SEO services for scaling, lead generation agency, Rankovio digital services',
  openGraph: {
    title: 'Rankovio Growth Services | Turn Your Website Into a Revenue Machine',
    description:
      'Stop settling for "just a website." Rankovio provides the complete growth suite—from aggressive marketing strategy to high-performance development—to help you scale revenue.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Rankovio',
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <CategoryNav />
      {/* 
        Note: Ensure your ServicesGrid and ServicesComparison components 
        also reflect this shift from 'Design' to 'Conversion/Revenue'.
      */}
      <ServicesGrid />
      <ServicesComparison />
      <ServicesCTA />
      <Footer />
    </main>
  );
}