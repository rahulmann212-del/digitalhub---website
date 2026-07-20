import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | Anviaan',
  description: 'Read the terms and conditions governing the use of Anviaan website and services.',
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-slate-900 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="border-b border-slate-800 pb-6">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Legal Framework</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-2">Terms and Conditions</h1>
          <p className="text-slate-400 text-sm mt-2">Last updated: July 20, 2026</p>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Anviaan website (anviaan.com), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, Anviaan and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Services & Limitations</h2>
            <p>
              Anviaan provides digital marketing, performance marketing, SEO, and web development services. Results may vary based on market conditions, search engine algorithm updates, and business models. We do not guarantee fixed search engine rankings or instant overnight revenue surges.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Limitation of Liability</h2>
            <p>
              In no event shall Anviaan, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Contact Information</h2>
            <p>
              For any questions regarding these Terms, reach out to us at <a href="mailto:info@anviaan.com" className="text-blue-400 hover:underline">info@anviaan.com</a>.
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