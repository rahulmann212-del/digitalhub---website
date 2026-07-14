import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IndustriesHero from '@/components/industries/IndustriesHero';
import IndustriesGrid from '@/components/industries/IndustriesGrid';
import IndustriesCTA from '@/components/industries/IndustriesCTA';

export const metadata: Metadata = {
  title: 'Rankovio Industries | Expert Growth Marketing & Dev for Your Sector',
  description:
    'From E-commerce and Retail to Healthcare and Finance — Rankovio delivers industry-specific marketing strategies and high-conversion web development designed to scale your revenue.',
  keywords:
    'growth marketing for industries, e-commerce web development, healthcare SEO, retail marketing strategies, finance digital growth, construction web design, industry-specific marketing agency, Rankovio industries',
  openGraph: {
    title: 'Industries We Serve — Expert Growth Strategies by Rankovio',
    description:
      'We don’t believe in one-size-fits-all. Get customized marketing and development solutions tailored to your specific industry’s growth metrics.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Rankovio',
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