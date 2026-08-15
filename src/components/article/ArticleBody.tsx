'use client';

import { Lightbulb, AlertTriangle, ListChecks, ArrowRight } from 'lucide-react';
import type { ArticleBodySection } from '@/types/article';

interface ArticleBodyProps {
  sections: ArticleBodySection[];
}

export function ArticleBody({ sections }: ArticleBodyProps) {
  return (
    <div id='article-body' className='article-body'>
      {sections.map((section, i) => (
        <SectionRenderer key={i} section={section} />
      ))}
    </div>
  );
}

function SectionRenderer({ section }: { section: ArticleBodySection }) {
  switch (section.type) {
    case 'heading':
      return <SectionHeading title={section.title || ''} />;
    case 'paragraph':
      return <ArticleParagraph content={section.content} />;
    case 'bullet-list':
      return <BulletList items={section.items || []} />;
    case 'highlight-box':
      return <HighlightBox title={section.title} content={section.content} />;
    case 'structured-list':
      return <StructuredList items={section.structuredItems || []} />;
    case 'disclaimer':
      return <Disclaimer content={section.content} />;
    case 'practical-steps':
      return <PracticalSteps items={section.items || []} />;
    default:
      return null;
  }
}

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className='text-xl sm:text-[22px] font-bold text-[#0f2557] mt-10 mb-4 leading-snug'>
      {title}
    </h2>
  );
}

function ArticleParagraph({ content }: { content: string }) {
  return (
    <p className='text-[15px] sm:text-base text-[#333] leading-[1.85] mb-5 font-[300]'>
      {content}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className='mb-6 space-y-2.5 pl-1'>
      {items.map((item, i) => (
        <li key={i} className='flex gap-3 text-[15px] sm:text-base text-[#333] leading-[1.8]'>
          <span className='w-1.5 h-1.5 rounded-full bg-[#d32f2f] flex-shrink-0 mt-[10px]' />
          <span className='font-[300]'>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function HighlightBox({ title, content }: { title?: string; content: string }) {
  return (
    <div className='my-8 rounded-xl border-2 border-[#f57c00]/30 bg-[#fff8e1] p-5 sm:p-6'>
      {title && (
        <div className='flex items-center gap-2 mb-3'>
          <Lightbulb className='h-5 w-5 text-[#f57c00]' />
          <h3 className='text-base font-bold text-[#e65100]'>{title}</h3>
        </div>
      )}
      <p className='text-[15px] text-[#4e342e] leading-[1.8] font-[300]'>
        {content}
      </p>
    </div>
  );
}

function StructuredList({ items }: { items: { label: string; description: string }[] }) {
  return (
    <div className='mb-6 space-y-3'>
      {items.map((item, i) => (
        <div key={i} className='bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow'>
          <h4 className='text-sm font-semibold text-[#0f2557] mb-1'>{item.label}</h4>
          <p className='text-sm text-[#616161] leading-relaxed font-[300]'>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function Disclaimer({ content }: { content: string }) {
  return (
    <div className='my-8 rounded-xl border border-[#d32f2f]/25 bg-[#fef2f2] p-4 sm:p-5'>
      <div className='flex items-start gap-2.5'>
        <AlertTriangle className='h-5 w-5 text-[#d32f2f] flex-shrink-0 mt-0.5' />
        <div>
          <p className='text-xs font-bold text-[#d32f2f] mb-1'>সতর্কতা</p>
          <p className='text-sm text-[#b71c1c] leading-relaxed'>{content}</p>
        </div>
      </div>
    </div>
  );
}

function PracticalSteps({ items }: { items: string[] }) {
  return (
    <ol className='mb-6 space-y-3 pl-1'>
      {items.map((item, i) => (
        <li key={i} className='flex gap-3 text-[15px] sm:text-base text-[#333] leading-[1.8]'>
          <span className='w-6 h-6 rounded-full bg-[#0f2557] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-[3px]'>
            {i + 1}
          </span>
          <span className='font-[300]'>{item}</span>
        </li>
      ))}
    </ol>
  );
}