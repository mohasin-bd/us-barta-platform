'use client';

import { mockNews } from '@/data/news';
import { mockImmigration } from '@/data/immigration';
import { mockEducation } from '@/data/education';
import { mockHealth } from '@/data/health';
import { mockIslamic } from '@/data/islamic';
import { mockCommunity } from '@/data/community';
import { mockJobs } from '@/data/jobs';
import { mockEvents } from '@/data/events';
import { mockBusinesses } from '@/data/businesses';
import { mockEntertainment } from '@/data/entertainment';

import { NewsSection } from '@/components/news/NewsSection';
import { SectionHeader } from '@/components/common/SectionHeader';
import { GuideCard } from '@/components/content/GuideCard';
import { EducationCard } from '@/components/education/EducationCard';
import { HealthCard } from '@/components/health/HealthCard';
import { IslamicCard } from '@/components/islamic/IslamicCard';
import { CommunityCard } from '@/components/community/CommunityCard';
import { JobCard } from '@/components/jobs/JobCard';
import { EventCard } from '@/components/events/EventCard';
import { BusinessCard } from '@/components/businesses/BusinessCard';
import { EntertainmentSection } from '@/components/entertainment/EntertainmentSection';

import { MyUSBartaWidget } from '@/components/personalization/MyUSBartaWidget';
import { WeatherWidget } from '@/components/weather/WeatherWidget';
import { SocialConnectWidget } from '@/components/sidebar/SocialConnectWidget';
import { NewsletterWidget } from '@/components/sidebar/NewsletterWidget';
import { PromoBanner } from '@/components/sidebar/PromoBanner';

import { t } from '@/lib/i18n/translations';

export function HomePageContent() {
  return (
    <div className='py-6'>
      <div className='flex flex-col lg:flex-row gap-6'>
        {/* ========== MAIN CONTENT (~70%) ========== */}
        <div className='flex-1 min-w-0 space-y-8'>

          {/* S1: Today's Important News */}
          <section id='todays-news'>
            <SectionHeader title={t.sections.todaysNews} seeAllHref='/category/news' seeAllLabel={t.nav.seeAll} />
            <NewsSection items={mockNews} />
          </section>

          {/* S2: Immigration Updates */}
          <section>
            <SectionHeader title={t.sections.immigration} seeAllHref='/category/immigration' seeAllLabel={t.nav.seeAll} />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {mockImmigration.map((item) => (
                <GuideCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* S3: Education + Health */}
          <section>
            <SectionHeader title={t.sections.educationHealth} />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {mockEducation.slice(0, 2).map((item) => (
                <EducationCard key={item.id} item={item} />
              ))}
              {mockHealth.slice(0, 2).map((item) => (
                <HealthCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* S4: Islamic Life + Community */}
          <section>
            <SectionHeader title={t.sections.islamicCommunity} />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {mockIslamic.slice(0, 2).map((item) => (
                <IslamicCard key={item.id} item={item} />
              ))}
              {mockCommunity.slice(0, 2).map((item) => (
                <CommunityCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* S5: Jobs + Events */}
          <section>
            <SectionHeader title={t.sections.jobsEvents} />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className='space-y-3'>
                {mockJobs.slice(0, 3).map((item) => (
                  <JobCard key={item.id} item={item} />
                ))}
              </div>
              <div className='space-y-3'>
                {mockEvents.slice(0, 3).map((item) => (
                  <EventCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>

          {/* S6: Entertainment */}
          <section>
            <SectionHeader title={t.sections.entertainment} seeAllHref='/category/entertainment' seeAllLabel={t.nav.seeAll} />
            <EntertainmentSection items={mockEntertainment} />
          </section>

          {/* S7: Business Directory */}
          <section>
            <SectionHeader title={t.sections.businessDirectory} seeAllHref='/directory' seeAllLabel={t.nav.seeAll} />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {mockBusinesses.slice(0, 3).map((item) => (
                <BusinessCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </div>

        {/* ========== SIDEBAR (~30%) ========== */}
        <aside id='my-us-barta' className='w-full lg:w-[320px] lg:flex-shrink-0 space-y-5 lg:sticky lg:top-[120px] lg:self-start'>
          <MyUSBartaWidget />
          <WeatherWidget />
          <SocialConnectWidget />
          <NewsletterWidget />
          <PromoBanner />
        </aside>
      </div>
    </div>
  );
}
