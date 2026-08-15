'use client';

import { useState } from 'react';
import { Send, Info } from 'lucide-react';

export function CommentSection() {
  const [comment, setComment] = useState('');

  return (
    <section className='mt-12 pt-8 border-t border-gray-200'>
      <h2 className='text-xl font-bold text-[#0f2557] mb-1'>এই খবর নিয়ে আপনার মতামত</h2>
      <p className='text-xs text-[#9e9e9e] mb-5 flex items-center gap-1'>
        <Info className='h-3 w-3' />
        মতামত প্রকাশের সময় সম্মানজনক ভাষা ব্যবহার করুন
      </p>

      <div className='flex gap-3'>
        <div className='flex-1 relative'>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='আপনার মতামত লিখুন...'
            rows={3}
            className='w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#333] placeholder:text-[#bdbdbd] focus:outline-none focus:border-[#0f2557]/40 focus:ring-2 focus:ring-[#0f2557]/10 transition-all'
          />
        </div>
        <button
          className='self-end w-10 h-10 rounded-xl bg-[#0f2557] flex items-center justify-center text-white hover:bg-[#0a1929] transition-colors disabled:opacity-40'
          disabled={!comment.trim()}
          onClick={() => setComment('')}
        >
          <Send className='h-4 w-4' />
        </button>
      </div>
    </section>
  );
}
