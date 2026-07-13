import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IndustriesHero from '@/components/industries/IndustriesHero';
import IndustriesGrid from '@/components/industries/IndustriesGrid';
import IndustriesCTA from '@/components/industries/IndustriesCTA';

export const metadata: Metadata = {
  title: 'Industries We Serve — Digital Solutions for Every Sector | DigitalHub',
  description:
    'DigitalHub delivers tailored web design, SEO, and digital marketing solutions for Healthcare, Education, Finance, Real Estate, Restaurants, Retail, Construction, Manufacturing, Travel, and Technology sectors.',
  keywords:
    'digital agency industries, healthcare web design, education website, finance digital marketing, real estate SEO, restaurant website, retail e-commerce, construction website, manufacturing web design, travel SEO, technology web design',
  openGraph: {
    title: 'Industries We Serve | DigitalHub',
    description:
      'Tailored digital solutions for 10+ industry sectors. We understand your market and build strategies that work for your specific audience and business goals.',
    type: 'website',
    locale: 'en_US',
    siteName: 'DigitalHub',
  },
};

export default function IndustriesPage() {
  return (
    <main>
      <Navbar />
      <IndustriesHero />
      <IndustriesGrid />
      <IndustriesCTA />
      <Footer />
    </main>
  );
}
