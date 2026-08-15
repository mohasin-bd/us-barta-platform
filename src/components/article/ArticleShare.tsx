'use client';

import { useState } from 'react';
import { Facebook, MessageCircle, Link2, Check } from 'lucide-react';

export function ArticleShare() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback — noop
    }
  };

  return (
    <div className='flex items-center gap-1.5'>
      <button
        className='w-8 h-8 rounded-lg bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity'
        aria-label='Share on Facebook'
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank', 'width=600,height=400')}
      >
        <Facebook className='h-3.5 w-3.5 text-white' />
      </button>
      <button
        className='w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center hover:opacity-80 transition-opacity'
        aria-label='Share on WhatsApp'
        onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`, '_blank')}
      >
        <MessageCircle className='h-3.5 w-3.5 text-white' />
      </button>
      <button
        className='w-8 h-8 rounded-lg bg-[#0084FF] flex items-center justify-center hover:opacity-80 transition-opacity'
        aria-label='Share on Messenger'
        onClick={() => window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(window.location.href)}&app_id=0`, '_blank', 'width=600,height=400')}
      >
        <svg className='h-3.5 w-3.5 text-white' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2C6.477 2 2 6.145 2 11.243c0 2.907 1.2 5.498 3.12 7.33V22l3.24-1.78c1.15.32 2.38.5 3.64.5 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm5.97 12.478l-2.625 3.904-2.97-3.472-2.94 2.94 4.26 4.97 3.87-5.75z'/></svg>
      </button>
      <button
        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${copied ? 'bg-[#388e3c]' : 'bg-gray-100 hover:bg-gray-200'}`}
        aria-label='Copy link'
        onClick={handleCopy}
      >
        {copied ? (
          <Check className='h-3.5 w-3.5 text-white' />
        ) : (
          <Link2 className='h-3.5 w-3.5 text-[#424242]' />
        )}
      </button>
    </div>
  );
}
