import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogContent from '@/components/blog/BlogContent';

export const metadata: Metadata = {
  title: 'Rankovio Growth Blog | E-commerce Scaling, Ads & SEO Insights',
  description:
    'Master your digital growth with actionable insights. From high-converting e-commerce web development to aggressive Google & Meta Ads strategies—get the knowledge to scale your revenue.',
  keywords:
    'growth marketing blog, e-commerce scaling tips, SEO strategies for growth, Google Ads ROI, Meta Ads scaling, conversion rate optimization, Rankovio blog, digital growth insights',
  openGraph: {
    title: 'Rankovio Growth Blog | Strategies to Scale Your Business Online',
    description:
      'Practical, ROI-focused articles on marketing, e-commerce development, and SEO. Learn how to turn your website into a high-revenue machine.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Rankovio',
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