import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageContainer } from '@/components/layout/PageContainer';
import { ReadingProgress } from '@/components/article/ReadingProgress';
import { Breadcrumb } from '@/components/article/Breadcrumb';
import { ArticleHeader } from '@/components/article/ArticleHeader';
import { ArticleHero } from '@/components/article/ArticleHero';
import { ArticleBody } from '@/components/article/ArticleBody';
import { ArticleAIHelper } from '@/components/article/ArticleAIHelper';
import { ArticleSidebar } from '@/components/article/ArticleSidebar';
import { RelatedArticles } from '@/components/article/RelatedArticles';
import { CommentSection } from '@/components/article/CommentSection';
import { getArticlePageData } from '@/data/article-sample';
import { getDiscoveryHeading } from '@/data/categories';

const data = getArticlePageData();

export function generateMetadata(): Metadata {
  return {
    title: data.article.seo.title,
    description: data.article.seo.description,
    openGraph: {
      title: data.article.seo.title,
      description: data.article.seo.description,
      images: [data.article.seo.ogImage || data.article.heroImage],
      type: 'article',
    },
  };
}

export default function ArticlePage() {
  const { article, sidebarBusinesses, categoryDiscovery } = data;

  const breadcrumbs = [
    { label: { bn: 'হোম', en: 'Home' }, href: '/' },
    { label: article.categoryLabel, href: `/category/${article.category}` },
  ];

  const discoveryTitle = getDiscoveryHeading(article.category);

  return (
    <div className='min-h-screen flex flex-col'>
      <ReadingProgress />
      <Header />

      {/* Category icon strip is intentionally NOT shown on article pages */}

      <main className='flex-1'>
        <PageContainer>
          <Breadcrumb items={breadcrumbs} current={article.title.bn} />

          <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
            {/* ===== ARTICLE CONTENT ===== */}
            <article className='flex-1 min-w-0 max-w-[760px]'>
              <ArticleHeader article={article} />
              <ArticleHero article={article} />
              <ArticleBody sections={article.body} />
              <ArticleAIHelper />
            </article>

            {/* ===== SIDEBAR — desktop only ===== */}
            <div className='hidden lg:block w-[300px] flex-shrink-0 lg:sticky lg:top-[130px] lg:self-start'>
              <ArticleSidebar businesses={sidebarBusinesses} />
            </div>
          </div>

          {/* ===== SIDEBAR CONTENT (mobile/tablet — below article & AI) ===== */}
          <div className='lg:hidden mt-10 pt-8 border-t border-gray-200'>
            <ArticleSidebar businesses={sidebarBusinesses} />
          </div>

          {/* ===== BOTTOM DISCOVERY — broader category exploration ===== */}
          <RelatedArticles title={discoveryTitle} items={categoryDiscovery} />

          {/* ===== COMMENTS / ENGAGEMENT ===== */}
          <CommentSection />
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}