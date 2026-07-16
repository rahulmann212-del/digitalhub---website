import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogContent from '@/components/blog/BlogContent';

export const metadata: Metadata = {
  title: 'The Anviaan Growth Lab | E-commerce Scaling, GEO & AEO Insights',
  description:
    'Master your digital growth with high-ticket scaling playbooks. From high-converting e-commerce architectures to aggressive Generative Engine Optimization (GEO) strategies.',
  keywords:
    'Anviaan growth lab, performance marketing playbooks, e-commerce scaling strategies, GEO strategies, AEO, Google Ads ROAS, conversion architecture, Anviaan digital insights',
  openGraph: {
    title: 'The Anviaan Growth Lab | Strategies for High-Stakes Brands',
    description:
      'Deep-dive playbooks on AEO, ROI-obsessed performance marketing, and high-conversion web architectures engineered for modern brands.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Anviaan',
  },
};

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <BlogContent />
      <Footer />
    </main>
  );
}