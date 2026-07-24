import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cookie Policy | Anviaan',
  description: 'Learn how Anviaan uses cookies and similar tracking technologies on our website.',
};

export default function CookiePolicy() {
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
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#063A9A] mt-2">Cookie Policy</h1>
              <p className="text-slate-500 text-sm font-medium mt-3">Last updated: July 20, 2026</p>
            </div>

            <div className="prose prose-lg prose-blue max-w-none text-slate-700 leading-relaxed">
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">1. What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">2. How Anviaan Uses Cookies</h2>
              <p className="mb-4">When you use and access our website, we may place a number of cookie files in your web browser. We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>To enable certain functions of the website and analytics.</li>
                <li>To store your preferences and provide a seamless browsing experience.</li>
                <li>To track traffic data and understand user behavior to optimize our digital marketing strategies.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">3. Your Choices Regarding Cookies</h2>
              <p className="mb-4">
                If you&apos;d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">4. More Information</h2>
              <p className="mb-8">
                If you have any questions about our use of cookies, please contact us at{' '}
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