import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import WhyWeStarted from '@/components/about/WhyWeStarted';
import HowWeWork from '@/components/about/HowWeWork';
import DesignPhilosophy from '@/components/about/DesignPhilosophy';
import AboutDevelopmentProcess from '@/components/about/AboutDevelopmentProcess';
import AboutTechStack from '@/components/about/AboutTechStack';
import WhyClientsChoose from '@/components/about/WhyClientsChoose';
import FAQSection from '@/components/about/FAQSection';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'About Rankovio | Scaling Brands Through Data-Driven Marketing & Dev',
  description:
    'Meet Rankovio — the growth partners for e-commerce brands. We combine high-ROI marketing with high-conversion development to scale your revenue. See how we drive results.',
  keywords:
    'about Rankovio, growth marketing agency, e-commerce scaling, ROI-driven marketing, web development for e-commerce, digital transformation partner',
  openGraph: {
    title: 'About Rankovio — Your Partner in Explosive Brand Growth',
    description:
      'We don’t just build websites; we build revenue engines. Learn how Rankovio helps e-commerce brands scale with data-backed marketing and expert development.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Rankovio',
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <WhyWeStarted />
      {/* Note: In components, keep the focus on "Growth Scaling" rather than just "Design" */}
      <HowWeWork />
      <DesignPhilosophy /> 
      <AboutDevelopmentProcess />
      <AboutTechStack />
      <WhyClientsChoose />
      <FAQSection />
      <AboutCTA />
      <Footer />
    </main>
  );
}