'use client';

import { Twitter, Linkedin, Facebook, Share2 } from 'lucide-react';

export default function BlogShareButtons({ title, slug }: { title: string, slug: string }) {
  const url = `https://www.anviaan.com/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: title, url: url });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Blog link copied to clipboard!');
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-bold text-slate-700 mr-2">Share this playbook:</span>
      
      {/* LinkedIn */}
      <a 
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full bg-slate-50 text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all duration-300 border border-slate-200 shadow-sm"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4 fill-current" />
      </a>

      {/* Twitter / X */}
      <a 
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full bg-slate-50 text-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300 border border-slate-200 shadow-sm"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4 fill-current" />
      </a>

      {/* Facebook */}
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full bg-slate-50 text-[#1877f2] hover:bg-[#1877f2] hover:text-white transition-all duration-300 border border-slate-200 shadow-sm"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4 fill-current" />
      </a>

      {/* Copy Link / Native Share */}
      <button 
        onClick={handleNativeShare}
        className="flex items-center gap-2 px-4 py-2 ml-1 bg-[#FF6600]/10 text-[#FF6600] hover:bg-[#FF6600] hover:text-white rounded-full text-xs font-bold transition-all duration-300"
      >
        <Share2 className="w-3.5 h-3.5" />
        Copy Link
      </button>
    </div>
  );
}