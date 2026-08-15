import type { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
      {children}
    </div>
  );
}
