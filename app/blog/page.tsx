import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogContent from '@/components/blog/BlogContent';

export const metadata: Metadata = {
  title: 'Blog — Web Design, SEO & Digital Marketing Insights | DigitalHub',
  description:
    'Practical, no-nonsense articles on web design, development, SEO, e-commerce, performance, and digital marketing — written for business owners who want to make smarter decisions about their online presence.',
  keywords:
    'web design blog, SEO blog, digital marketing insights, web development articles, e-commerce tips, Core Web Vitals, local SEO, Google Ads, conversion optimization, website accessibility',
  openGraph: {
    title: 'Blog — Web Design, SEO & Digital Marketing Insights | DigitalHub',
    description:
      'Practical articles on web design, development, SEO, and digital marketing for business owners. Updated weekly with actionable insights.',
    type: 'website',
    locale: 'en_US',
    siteName: 'DigitalHub',
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
