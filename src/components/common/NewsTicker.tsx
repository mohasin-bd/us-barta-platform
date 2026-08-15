'use client';

import { useRef, useEffect, useState } from 'react';

const HEADLINES = [
  'যুক্তরাষ্ট্রের নতুন ইমিগ্রেশন আপডেট',
  'জ্যাকসন হাইটসে নতুন চাকরির সুযোগ',
  'বাংলাদেশি শিক্ষার্থীদের জন্য নতুন তথ্য',
  'নিউইয়র্ক বাংলাদেশি কমিউনিটির নতুন উদ্যোগ',
];

const SEPARATOR = ' • ';
const TICKER_TEXT = HEADLINES.join(SEPARATOR);

export function NewsTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.scrollWidth / 2;
      setDuration(Math.max(width / 60, 10));
    }
  }, []);

  return (
    <div className='flex items-center w-full overflow-hidden bg-[#fef2f2] rounded-md px-1'>
      {/* Badge */}
      <span className='flex-shrink-0 bg-[#d32f2f] text-white text-[10px] font-bold px-2.5 py-1 rounded-sm'>
        সর্বশেষ
      </span>

      {/* Ticker container */}
      <div className='flex-1 overflow-hidden relative group py-1.5'>
        <div
          ref={trackRef}
          className='flex whitespace-nowrap'
          style={{
            animation: `ticker-scroll ${duration}s linear infinite`,
          }}
        >
          {/* First copy */}
          <span className='text-[13px] text-[#374151] font-medium px-2'>
            {TICKER_TEXT}
          </span>
          {/* Second copy for seamless loop */}
          <span className='text-[13px] text-[#374151] font-medium px-2'>
            {TICKER_TEXT}
          </span>
        </div>

        <style>{`
          @keyframes ticker-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .group:hover div {
            animation-play-state: paused !important;
          }
        `}</style>
      </div>
    </div>
  );
}
