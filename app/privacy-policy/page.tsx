import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Anviaan',
  description: 'Read the privacy policy of Anviaan to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-900 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="border-b border-slate-800 pb-6">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Legal Framework</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-2">Privacy Policy</h1>
          <p className="text-slate-400 text-sm mt-2">Last updated: July 20, 2026</p>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            <p>
              Welcome to Anviaan (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (anviaan.com) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li><strong className="text-white">Identity Data:</strong> Includes first name, last name, or similar identifier.</li>
              <li><strong className="text-white">Contact Data:</strong> Includes email address and telephone numbers submitted via our contact forms or newsletter subscriptions.</li>
              <li><strong className="text-white">Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform on the devices you use to access this website.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>To provide and maintain our digital marketing and web development services.</li>
              <li>To notify you about changes to our services or policies.</li>
              <li>To provide customer support and respond to your inquiries.</li>
              <li>To gather analysis or valuable information so that we can improve our website and marketing campaigns.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at: <a href="mailto:inquiry@Anviaan.com" className="text-blue-400 hover:underline">inquiry@Anviaan.com</a>.
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}