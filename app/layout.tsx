import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Rankovio | Growth Marketing & E-commerce Agency',
  description:
    'Rankovio specializes in performance marketing, D2C brand scaling, advanced SEO, and high-converting e-commerce development to drive exponential revenue growth.',
  keywords:
    'growth marketing agency, e-commerce development, performance marketing, D2C brand scaling, multi-vendor marketplaces, SEO services, Rankovio',
  authors: [{ name: 'Rankovio Agency' }],
  metadataBase: new URL('https://rankovio.com'), // Yahan baad mein aap apna actual domain laga sakte hain
  openGraph: {
    title: 'Rankovio | Growth Marketing & E-commerce Agency',
    description:
      'Scale your brand and dominate e-commerce with Rankovio. We provide data-driven marketing and high-performance development solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Rankovio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rankovio | Growth Marketing & E-commerce Agency',
    description:
      'Data-driven performance marketing and e-commerce development to scale your brand.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-plus-jakarta antialiased">{children}</body>
    </html>
  );
}