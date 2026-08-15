'use client';

import { useEffect, useState } from 'react';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const articleEl = document.getElementById('article-body');
      if (!articleEl) return;
      const rect = articleEl.getBoundingClientRect();
      const total = articleEl.scrollHeight;
      const viewport = window.innerHeight;
      const scrolled = -rect.top;
      const pct = Math.min(Math.max((scrolled / (total - viewport)) * 100, 0), 100);
      setProgress(pct);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent'>
      <div
        className='h-full bg-[#d32f2f] transition-[width] duration-150 ease-out'
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
