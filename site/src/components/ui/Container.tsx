import type { ReactNode } from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl';

const widths: Record<Size, string> = {
  sm: 'max-w-2xl',
  md: 'max-w-3xl',
  lg: 'max-w-4xl',
  xl: 'max-w-7xl',
};

interface ContainerProps {
  children: ReactNode;
  size?: Size;
  className?: string;
}

export default function Container({ children, size = 'xl', className = '' }: ContainerProps) {
  return (
    <div className={`${widths[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
