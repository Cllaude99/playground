import { PropsWithChildren, forwardRef } from 'react';

interface FloatingWidgetLayoutProps extends PropsWithChildren {
  containerRef: React.RefObject<HTMLDivElement>;
}

const FloatingWidgetLayout = forwardRef<
  HTMLDivElement,
  FloatingWidgetLayoutProps
>(({ children, containerRef }) => {
  return (
    <div className="fixed bottom-20 right-32">
      <div ref={containerRef} className="relative">
        {children}
      </div>
    </div>
  );
});

FloatingWidgetLayout.displayName = 'FloatingWidgetLayout';

export default FloatingWidgetLayout;
