'use client';

import { UserCircle } from 'lucide-react';
import type { Article } from '@/types/article';

interface AuthorInfoProps {
  article: Article;
}

export function AuthorInfo({ article }: AuthorInfoProps) {
  const { author } = article;

  return (
    <div className='flex items-center gap-2.5'>
      <div className='w-9 h-9 rounded-full bg-[#0f2557]/10 flex items-center justify-center flex-shrink-0'>
        {author.avatar ? (
          <img src={author.avatar} alt={author.name} className='w-full h-full rounded-full object-cover' />
        ) : (
          <UserCircle className='h-5 w-5 text-[#0f2557]' />
        )}
      </div>
      <div>
        <p className='text-sm font-semibold text-[#212121] leading-tight'>{author.name}</p>
        {author.title && (
          <p className='text-xs text-[#757575]'>{author.title}</p>
        )}
      </div>
    </div>
  );
}
