import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingHero from '@/components/pricing/PricingHero';
import SolutionsGrid from '@/components/pricing/SolutionsGrid';
import PricingComparison from '@/components/pricing/PricingComparison';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import PricingCTA from '@/components/pricing/PricingCTA';

export const metadata: Metadata = {
  title: 'Pricing — Custom Digital Growth Solutions | Rankovio',
  description:
    'Explore Rankovio\'s custom SEO and digital marketing growth solutions — SEO Growth, Local Business Growth, Performance Marketing, and Complete Digital Growth. Request a custom proposal tailored to your business goals.',
  keywords:
    'SEO pricing, digital marketing pricing, SEO services cost, local SEO packages, Google Ads management pricing, custom digital marketing proposal, growth strategy consultation',
  openGraph: {
    title: 'Pricing — Custom Digital Growth Solutions | Rankovio',
    description:
      'Custom SEO and digital marketing strategies built around your business goals. No one-size-fits-all packages — only tailored growth solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Rankovio',
  },
};

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <PricingHero />
      <SolutionsGrid />
      <PricingComparison />
      <PricingFAQ />
      <PricingCTA />
      <Footer />
    </main>
  );
}
