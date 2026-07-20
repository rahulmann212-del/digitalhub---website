import './globals.css'; // Agar ye line dobara error de, toh isko hata kar import '@/app/globals.css'; likh dena
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
    icon: '/icon.png', // Dhyan rahe, aapki image ka naam "icon.png" hi hona chahiye
  },
  openGraph: {
    title: 'Anviaan | Premier Digital Marketing & Web Development Agency',
    description: 'Anviaan helps businesses scale with data-driven performance marketing, advanced SEO, and high-converting web development solutions tailored for growth.',
    type: 'website',
    locale: 'en_IN', // India target audience ke liye US ki jagah IN kar diya hai
    siteName: 'Anviaan',
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