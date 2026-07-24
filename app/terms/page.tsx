import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms and Conditions | Anviaan',
  description: 'Read the terms and conditions governing the use of Anviaan website and services.',
};

export default function TermsAndConditions() {
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
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#063A9A] mt-2">Terms and Conditions</h1>
              <p className="text-slate-500 text-sm font-medium mt-3">Last updated: July 20, 2026</p>
            </div>

            <div className="prose prose-lg prose-blue max-w-none text-slate-700 leading-relaxed">
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">1. Agreement to Terms</h2>
              <p className="mb-4">
                By accessing or using the Anviaan website (anviaan.com), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">2. Intellectual Property Rights</h2>
              <p className="mb-4">
                Other than the content you own, under these Terms, Anviaan and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">3. Services & Limitations</h2>
              <p className="mb-4">
                Anviaan provides digital marketing, performance marketing, SEO, and web development services. Results may vary based on market conditions, search engine algorithm updates, and business models. We do not guarantee fixed search engine rankings or instant overnight revenue surges.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">4. Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall Anviaan, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">5. Contact Information</h2>
              <p className="mb-8">
                For any questions regarding these Terms, reach out to us at{' '}
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