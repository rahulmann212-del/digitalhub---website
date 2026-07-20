import './globals.css'; // Agar ye line dobara error de, toh isko hata kar import '@/app/globals.css'; likh dena
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';

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
  metadataBase: new URL('https://www.anviaan.com'),
  title: 'Anviaan | Premier Digital Marketing & Web Development Agency',
  description: 'Anviaan helps businesses scale with data-driven performance marketing, advanced SEO, and high-converting web development solutions tailored for growth.',
  keywords: [
    'Digital Marketing Agency',
    'Web Development Company',
    'Performance Marketing',
    'SEO Services',
    'E-commerce Solutions',
    'Business Growth',
    'Anviaan'
  ],
  authors: [{ name: 'Anviaan Agency' }],
  icons: {
    icon: '/icon.png',
  },
  // Google Search Console Verification Added Here
  verification: {
    google: '3cByKEPpKaGQftVkK4gU8or_YSbgGFLdAT5ZKJ4_NEw',
  },
  // OpenGraph (OG) Tags for WhatsApp, LinkedIn, Facebook preview
  openGraph: {
    title: 'Anviaan | Premier Digital Marketing & Web Development Agency',
    description: 'Anviaan helps businesses scale with data-driven performance marketing, advanced SEO, and high-converting web development solutions tailored for growth.',
    url: 'https://www.anviaan.com',
    siteName: 'Anviaan',
    images: [
      {
        url: '/icon.png', // remove if banner shift here 1200x630 pixels ka bada banner bhi laga sakte hain
        width: 800,
        height: 600,
        alt: 'Anviaan Agency Preview',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  // Twitter Card Tags for X (Twitter) preview
  twitter: {
    card: 'summary_large_image',
    title: 'Anviaan | Premier Digital Marketing & Web Development Agency',
    description: 'Anviaan helps businesses scale with data-driven performance marketing, advanced SEO, and high-converting web development solutions tailored for growth.',
    images: ['/icon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        {/* Google Analytics (GA4) Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-FE8JZG7LMS"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FE8JZG7LMS');
            `,
          }}
        />
      </head>
      <body className="font-plus-jakarta antialiased">{children}</body>
    </html>
  );
}