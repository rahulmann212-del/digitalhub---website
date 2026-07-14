import FloatingWhatsApp from './FloatingWhatsApp';
import CallNowButton from './CallNowButton';
import StickyMobileCTA from './StickyMobileCTA';
import BackToTopButton from './BackToTopButton';
import CookieConsentBanner from './CookieConsentBanner';

export default function FloatingActions() {
  return (
    <>
      <FloatingWhatsApp />
      <CallNowButton />
      <StickyMobileCTA />
      <BackToTopButton />
      <CookieConsentBanner />
    </>
  );
}
