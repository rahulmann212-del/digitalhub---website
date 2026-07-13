import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import CategoryNav from '@/components/services/CategoryNav';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesComparison from '@/components/services/ServicesComparison';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata: Metadata = {
  title: 'Services — Website Design, SEO & Digital Marketing | DigitalHub',
  description:
    'Explore all 13 services offered by DigitalHub: website design, development, WordPress, e-commerce, landing pages, SEO, Google Ads, social media, speed optimization, and website security.',
  keywords:
    'website design services, web development, WordPress development, e-commerce websites, SEO services, Google Ads management, social media marketing, website speed optimization, website security, digital agency services',
  openGraph: {
    title: 'Services — Website Design, SEO & Digital Marketing | DigitalHub',
    description:
      'From website design and development to SEO and paid advertising — DigitalHub offers the complete suite of digital services your business needs to grow online.',
    type: 'website',
    locale: 'en_US',
    siteName: 'DigitalHub',
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <CategoryNav />
      <ServicesGrid />
      <ServicesComparison />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
