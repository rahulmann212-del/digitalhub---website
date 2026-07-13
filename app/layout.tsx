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
  title: 'DigitalHub — Premium Web Design, SEO & Digital Marketing Agency',
  description:
    'DigitalHub helps startups and businesses grow online with professional website development, SEO, Google Ads, and digital marketing that generates quality leads and long-term growth.',
  keywords:
    'web design agency, website development, SEO services, digital marketing, Google Ads, WordPress development, e-commerce development, DigitalHub',
  authors: [{ name: 'DigitalHub Agency' }],
  metadataBase: new URL('https://digitalhub.agency'),
  openGraph: {
    title: 'DigitalHub — Premium Web Design & Digital Marketing Agency',
    description:
      'We help startups and businesses establish a strong online presence through professional website development, SEO, and digital marketing.',
    type: 'website',
    locale: 'en_US',
    siteName: 'DigitalHub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigitalHub — Premium Digital Agency',
    description:
      'Professional website development, SEO, and digital marketing for growing businesses.',
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
