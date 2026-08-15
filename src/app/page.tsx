import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/hero/HeroSection';
import { CategoryQuickLinks } from '@/components/navigation/CategoryQuickLinks';
import { PageContainer } from '@/components/layout/PageContainer';
import { Footer } from '@/components/layout/Footer';
import { HomePageContent } from '@/components/layout/HomePageContent';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <HeroSection />
      <CategoryQuickLinks />
      <main className='flex-1'>
        <PageContainer>
          <HomePageContent />
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
