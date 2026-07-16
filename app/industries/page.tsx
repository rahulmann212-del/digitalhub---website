import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IndustriesHero from '@/components/industries/IndustriesHero';
import IndustriesGrid from '@/components/industries/IndustriesGrid';
import IndustriesCTA from '@/components/industries/IndustriesCTA';

export const metadata: Metadata = {
  title: 'High-Ticket Growth Marketing for E-commerce, Tech & B2B | Anviaan',
  description:
    'Anviaan engineers bespoke digital architectures, AI search visibility (AEO/GEO), and ROI-driven performance marketing for E-commerce, Health & Beauty, SaaS, and B2B Enterprise brands.',
  keywords:
    'Anviaan industries, e-commerce growth marketing, health and beauty digital marketing, SaaS AEO strategies, generative engine optimization, B2B enterprise SEO, high-ticket marketing agency, next-gen search visibility',
  openGraph: {
    title: 'Industries We Scale — Precision Growth by Anviaan',
    description:
      'We do not do generic templates. Get specialized digital architectures and performance marketing strategies engineered for high-growth sectors.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Anviaan',
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