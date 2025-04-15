import { PropsWithChildren } from 'react';

export default function FloatingWidgetLayout({ children }: PropsWithChildren) {
  return (
    <div className="fixed bottom-20 right-32">
      <div className="relative">{children}</div>
    </div>
  );
}
