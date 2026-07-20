import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | Anviaan',
  description: 'Learn how Anviaan uses cookies and similar tracking technologies on our website.',
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-slate-900 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="border-b border-slate-800 pb-6">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Legal Framework</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-2">Cookie Policy</h1>
          <p className="text-slate-400 text-sm mt-2">Last updated: July 20, 2026</p>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. What Are Cookies?</h2>
            <p>
              Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. How Anviaan Uses Cookies</h2>
            <p>When you use and access our website, we may place a number of cookie files in your web browser. We use cookies for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>To enable certain functions of the website and analytics.</li>
              <li>To store your preferences and provide a seamless browsing experience.</li>
              <li>To track traffic data and understand user behavior to optimize our digital marketing strategies.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Your Choices Regarding Cookies</h2>
            <p>
              If you&apos;d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. More Information</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at <a href="mailto:info@Anviaan.com" className="text-blue-400 hover:underline">info@anviaan.com</a>.
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