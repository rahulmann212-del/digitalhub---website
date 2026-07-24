import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Anviaan',
  description: 'Read the privacy policy of Anviaan to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main>
      {/* Header Add Kiya */}
      <Navbar />
      
      <div className="min-h-screen bg-slate-50 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* White Card Container */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100">
            
            <div className="border-b border-slate-100 pb-6 mb-8">
              <span className="text-[#FF6600] text-sm font-bold uppercase tracking-wider">Legal Framework</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#063A9A] mt-2">Privacy Policy</h1>
              <p className="text-slate-500 text-sm font-medium mt-3">Last updated: July 20, 2026</p>
            </div>

            <div className="prose prose-lg prose-blue max-w-none text-slate-700 leading-relaxed">
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Anviaan (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (anviaan.com) and tell you about your privacy rights and how the law protects you.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">2. Information We Collect</h2>
              <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong className="text-gray-900">Identity Data:</strong> Includes first name, last name, or similar identifier.</li>
                <li><strong className="text-gray-900">Contact Data:</strong> Includes email address and telephone numbers submitted via our contact forms or newsletter subscriptions.</li>
                <li><strong className="text-gray-900">Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform on the devices you use to access this website.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">3. How We Use Your Information</h2>
              <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>To provide and maintain our digital marketing and web development services.</li>
                <li>To notify you about changes to our services or policies.</li>
                <li>To provide customer support and respond to your inquiries.</li>
                <li>To gather analysis or valuable information so that we can improve our website and marketing campaigns.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">4. Contact Us</h2>
              <p className="mb-8">
                If you have any questions about this privacy policy, please contact us at:{' '}
                <a href="mailto:info@anviaan.com" className="text-[#063A9A] font-bold hover:text-[#FF6600] transition-colors underline">
                  info@anviaan.com
                </a>.
              </p>

              <div className="pt-8 border-t border-slate-100">
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#063A9A] hover:text-[#FF6600] transition-colors">
                  &larr; Back to Home
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer Add Kiya */}
      <Footer />
    </main>
  );
}