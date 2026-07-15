import { notFound } from 'next/navigation';
import { articles } from '../../../components/blog/blog-data';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      {/* Ye raha aapka Navbar */}
      <Navbar />
      
      <div className="min-h-screen bg-slate-50 pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-6">
              <span className={`px-3 py-1 ${article.category === 'E-Commerce' ? 'bg-violet-100 text-violet-700' : 'bg-blue-100 text-blue-700'} rounded-full font-bold`}>
                {article.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4"/> {article.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4"/> {article.readTime} min read</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${article.author.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                {article.author.initials}
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">{article.author.name}</p>
                <p className="text-sm text-slate-500 font-medium">{article.author.role}</p>
              </div>
            </div>
          </header>

          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div 
              className="prose prose-lg prose-blue max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
          
        </article>
      </div>

      {/* Ye raha aapka Footer */}
      <Footer />
    </main>
  );
}