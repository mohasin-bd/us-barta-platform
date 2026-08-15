'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { Newspaper } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallbackClassName?: string;
}

/**
 * Reusable image component that gracefully falls back to a branded US BARTA
 * placeholder when the source image fails to load. Prevents broken-image icons.
 */
export function SafeImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = '',
  fallbackClassName = '',
  sizes,
  priority = false,
}: SafeImageProps) {
  const [error, setError] = useState(false);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  // Branded fallback — looks intentional, not like a technical error
  if (error) {
    const containerClass = fill
      ? `absolute inset-0 ${fallbackClassName}`
      : `${className}`;

    return (
      <div
        className={`${containerClass} bg-gradient-to-br from-[#0f2557] to-[#0a1929] flex items-center justify-center overflow-hidden`}
        role='img'
        aria-label={alt}
      >
        <div className='flex flex-col items-center gap-1.5 opacity-25'>
          <Newspaper className='h-8 w-8 text-white' />
          <span className='text-[10px] font-bold text-white tracking-wider uppercase'>US BARTA</span>
        </div>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
        onError={handleError}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 400}
      height={height || 250}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={handleError}
    />
  );
}
