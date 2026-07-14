import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-2 text-sm text-blue-300/70 ${className}`}
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-blue-300 transition-colors"
        aria-label="Go to homepage"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => (
        <span key={item.href} className="flex items-center gap-2">
          <ChevronRight className="w-3.5 h-3.5 text-blue-400/40" />
          {index === items.length - 1 ? (
            <span className="text-blue-300 font-medium" aria-current="page">
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-blue-300 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
