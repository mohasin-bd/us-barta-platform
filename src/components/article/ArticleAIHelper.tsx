'use client';

import { useState } from 'react';
import { Sparkles, MessageSquare, List, Compass, ChevronRight } from 'lucide-react';

const aiOptions = [
  { icon: MessageSquare, label: { bn: 'এই খবরটি সহজ বাংলায় বুঝুন', en: 'Understand this news in simple Bangla' }, desc: { bn: 'জটিল ভাষাকে সহজ করে বুঝুন', en: 'Simplify complex language' } },
  { icon: Compass, label: { bn: 'আমার ক্ষেত্রে এর প্রভাব কী?', en: 'How does this affect me?' }, desc: { bn: 'ব্যক্তিগত প্রভাব বিশ্লেষণ করুন', en: 'Analyze personal impact' } },
  { icon: List, label: { bn: 'গুরুত্বপূর্ণ বিষয়গুলো সংক্ষেপে দেখুন', en: 'See key points summary' }, desc: { bn: 'মূল পয়েন্টগুলো দ্রুত দেখুন', en: 'Quick key points overview' } },
  { icon: Sparkles, label: { bn: 'আমার জন্য কী করণীয়?', en: 'What should I do?' }, desc: { bn: 'ব্যক্তিগত পরবর্তী পদক্ষেপ', en: 'Personal next steps' } },
];

export function ArticleAIHelper() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className='my-10 rounded-2xl border border-[#0f2557]/15 bg-gradient-to-br from-[#f8f9ff] to-white p-5 sm:p-6'>
      <div className='flex items-center gap-2.5 mb-4'>
        <div className='w-9 h-9 rounded-xl bg-[#0f2557]/10 flex items-center justify-center'>
          <Sparkles className='h-4.5 w-4.5 text-[#0f2557]' />
        </div>
        <div>
          <h3 className='text-base font-bold text-[#0f2557]'>AI দিয়ে সহজ করে বুঝুন</h3>
          <p className='text-xs text-[#757575]'>US BARTA Intelligence</p>
        </div>
      </div>

      <div className='space-y-2'>
        {aiOptions.map((opt, i) => {
          const Icon = opt.icon;
          return (
            <button
              key={i}
              className={`w-full flex items-center gap-3.5 p-3.5 rounded-xl text-left transition-all duration-200 group ${
                activeIndex === i
                  ? 'bg-[#0f2557] text-white shadow-md'
                  : 'bg-white border border-gray-100 hover:border-[#0f2557]/20 hover:shadow-sm'
              }`}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                activeIndex === i ? 'bg-white/15' : 'bg-[#0f2557]/5'
              }`}
              >
                <Icon className={`h-4 w-4 ${activeIndex === i ? 'text-white' : 'text-[#0f2557]'}`} />
              </div>
              <div className='flex-1 min-w-0'>
                <p className={`text-sm font-semibold ${activeIndex === i ? 'text-white' : 'text-[#212121]'}`}>{opt.label.bn}</p>
                <p className={`text-xs mt-0.5 ${activeIndex === i ? 'text-white/70' : 'text-[#757575]'}`}>{opt.desc.bn}</p>
              </div>
              <ChevronRight className={`h-4 w-4 flex-shrink-0 transition-transform ${activeIndex === i ? 'text-white rotate-90' : 'text-gray-300 group-hover:text-[#0f2557]'}`} />
            </button>
          );
        })}
      </div>

      {activeIndex !== null && (
        <div className='mt-4 p-4 rounded-xl bg-white/80 border border-[#0f2557]/10'>
          <p className='text-sm text-[#757575] italic'>
            AI প্রসেসিং প্রোটোটাইপ — এই ফিচারটি শীঘ্রই চালু হবে।
          </p>
        </div>
      )}
    </div>
  );
}
