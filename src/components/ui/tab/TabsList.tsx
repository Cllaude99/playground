import { ReactNode } from 'react';

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export function TabsList({ children, className }: TabsListProps) {
  return <div className={className}>{children}</div>;
}
