import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles } from '@/components/blog/blog-data';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Hash } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Naya component yahan import kiya gaya hai
import BlogShareButtons from '@/components/BlogShareButtons';

// Dynamic SEO Metadata Generator for each Playbook
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: 'Playbook Not Found | Anviaan',
    };
  }

  return {
    title: `${article.title} | Anviaan Growth Lab`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author.name],
    },
  };
}

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
      <Navbar />
      
      <div className="min-h-screen bg-slate-50 pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link 
            href="/blog" 
            className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            Back to all playbooks
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-bold uppercase tracking-wider text-xs">
                {article.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4"/> {article.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4"/> {article.readTime} min read</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-[1.15] tracking-tight">
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
            {/* Content Area */}
            <div 
              className="prose prose-lg prose-blue max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Social Share Section (Added Here) */}
            <div className="pt-8 pb-6 border-t border-slate-100">
              <BlogShareButtons title={article.title} slug={article.slug} />
            </div>
            
            {/* Tags Section */}
            <div className="pt-6 border-t border-slate-100">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 rounded-lg text-sm font-medium"
                  >
                    <Hash className="w-3.5 h-3.5 text-slate-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
          
        </article>
      </div>

      <Footer />
    </main>
  );
}