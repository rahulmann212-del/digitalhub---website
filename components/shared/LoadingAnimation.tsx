'use client';

import { TrendingUp } from 'lucide-react';

interface LoadingAnimationProps {
  label?: string;
  fullScreen?: boolean;
}

export default function LoadingAnimation({ label = 'Loading...', fullScreen = false }: LoadingAnimationProps) {
  const container = fullScreen
    ? 'fixed inset-0 z-[100] flex items-center justify-center bg-white'
    : 'flex items-center justify-center py-20';

  return (
    <div className={container} role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 border-4 border-blue-100 rounded-2xl" />
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-2xl animate-spin" style={{ animationDuration: '0.8s' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-blue-600" strokeWidth={2.5} />
          </div>
        </div>
        <p className="text-sm font-medium text-slate-500">{label}</p>
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}
