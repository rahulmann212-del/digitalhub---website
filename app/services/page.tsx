import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import CategoryNav from '@/components/services/CategoryNav';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesComparison from '@/components/services/ServicesComparison';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata: Metadata = {
  title: 'Performance Marketing, Next-Gen SEO & Web Solutions | Aviaan',
  description:
    'Scale your brand with Aviaan. We specialize in ROI-driven Performance Marketing, Next-Gen AI Search (AEO & GEO), and high-conversion E-commerce development to turn traffic into profit.',
  keywords:
    'Aviaan digital services, performance marketing agency, answer engine optimization AEO, generative engine optimization GEO, AI search visibility, high-conversion e-commerce development, Google Ads ROI, short-form video marketing, D2C growth agency',
  openGraph: {
    title: 'Aviaan Growth Services | Scale Your Revenue with Data-Driven Marketing',
    description:
      'Stop settling for outdated strategies. Aviaan provides a complete growth suite—from next-gen AI search visibility (AEO/GEO) to high-performance e-commerce development.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Aviaan',
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <CategoryNav />
      {/* 
        ServicesGrid will now automatically pull the updated 3-category structure
        from your services-data.ts file.
      */}
      <ServicesGrid />
      <ServicesComparison />
      <ServicesCTA />
      <Footer />
    </main>
  );
}