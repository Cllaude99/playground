import { mergeClassNames } from '@/utils/mergeClassNames';

interface LayoutProps {
  fullScreen?: boolean;
  direction: 'row' | 'column';
  className?: string;
  children: React.ReactNode;
}

export default function Layout({
  fullScreen = false,
  direction,
  className,
  children,
}: LayoutProps) {
  return (
    <main
      className={mergeClassNames(
        `flex ${direction === 'column' ? 'flex-col' : 'flex-row'} 
        ${fullScreen ? 'w-full max-w-none' : 'w-auto max-w-[480px]'} 
        h-screen 
        mx-auto my-0`,
        className,
      )}
    >
      {children}
    </main>
  );
}
