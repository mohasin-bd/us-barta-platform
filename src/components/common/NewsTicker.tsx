'use client';

import { useRef, useEffect, useState } from 'react';

const HEADLINES = [
  'নিউইয়র্কে বাংলাদেশি কমিউনিটির নতুন উদ্যোগ: স্বাস্থ্য সচেতনতা অভিযান',
  'যুক্তরাষ্ট্রের নতুন ইমিগ্রেশন আপডেট: ভিসা প্রক্রিয়ায় পরিবর্তন',
  'জ্যাকসন হাইটসে নতুন চাকরির সুযোগ: ৫০+ পদ খালি',
  'বাংলাদেশি শিক্ষার্থীদের জন্য ফেলোশিপের নতুন তথ্য',
];

const TICKER_TEXT = HEADLINES.join(' \u2022 ');

export function NewsTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.scrollWidth / 2;
      // ~60px per second as a comfortable reading speed
      setDuration(Math.max(width / 60, 10));
    }
  }, []);

  return (
    <div className="flex items-center gap-2.5 w-full overflow-hidden">
      {/* Badge */}
      <span className="flex-shrink-0 bg-[#d32f2f] text-white text-[10px] font-bold px-2 py-0.5 rounded">
        সর্বশেষ
      </span>

      {/* Ticker container */}
      <div className="flex-1 overflow-hidden relative group">
        <div
          ref={trackRef}
          className="flex whitespace-nowrap"
          style={{
            animation: `ticker-scroll ${duration}s linear infinite`,
          }}
        >
          {/* First copy */}
          <span className="text-sm text-gray-600 px-2">
            {TICKER_TEXT}
          </span>
          {/* Second copy for seamless loop */}
          <span className="text-sm text-gray-600 px-2">
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
