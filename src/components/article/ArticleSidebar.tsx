'use client';

import { MapPin, Info } from 'lucide-react';
import { MyUSBartaWidget } from '@/components/personalization/MyUSBartaWidget';
import { BusinessListingCard } from './BusinessListingCard';
import type { BusinessListing } from '@/types/article';

interface ArticleSidebarProps {
  businesses: BusinessListing[];
}

export function ArticleSidebar({ businesses = [] }: ArticleSidebarProps) {
  const organicListings = businesses.filter((b) => b.listingType === 'organic');
  const featuredListings = businesses.filter((b) => b.listingType === 'featured');

  return (
    <aside className='space-y-8'>
      {/* Contextual Service Recommendations */}
      <div>
        <div className='flex items-center gap-2 mb-1'>
          <h3 className='text-sm font-bold text-[#0f2557]'>
            আপনার জন্য প্রাসঙ্গিক সেবা
          </h3>
        </div>
        <p className='text-[11px] text-[#9e9e9e] mb-3 flex items-center gap-1'>
          <MapPin className='h-3 w-3' />
          আপনার অবস্থান ও এই খবরের ভিত্তিতে
        </p>
        <div className='space-y-3'>
          {organicListings.map((listing) => (
            <BusinessListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>

      {/* Featured / Sponsored Business */}
      {featuredListings.length > 0 && (
        <div>
          <div className='flex items-center gap-1.5 mb-3 pb-2 border-b-2 border-[#d32f2f]/30'>
            <h3 className='text-sm font-bold text-[#0f2557]'>
              Featured Business
            </h3>
            <Info className='h-3 w-3 text-[#9e9e9e]' />
          </div>
          <div className='space-y-3'>
            {featuredListings.map((listing) => (
              <BusinessListingCard key={listing.id} listing={listing} />
            ))}
          </div>
          <p className='mt-2 text-[10px] text-[#bdbdbd] text-center'>
            Sponsored — US BARTA-এ বিজ্ঞাপন দিন
          </p>
        </div>
      )}

      {/* My US BARTA — personalized updates */}
      <MyUSBartaWidget />
    </aside>
  );
}
