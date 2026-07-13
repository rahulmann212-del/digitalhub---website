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
  title: 'About DigitalHub — Our Story, Mission & Values',
  description:
    'Learn about DigitalHub — our story, mission, core values, and what makes us a trusted digital agency for startups and growing businesses worldwide.',
  keywords:
    'about DigitalHub, digital agency story, web development agency, our mission, core values, design philosophy',
  openGraph: {
    title: 'About DigitalHub — Our Story, Mission & Values',
    description:
      'Learn about DigitalHub — our story, mission, core values, and what makes us a trusted digital agency for startups and growing businesses.',
    type: 'website',
    locale: 'en_US',
    siteName: 'DigitalHub',
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
