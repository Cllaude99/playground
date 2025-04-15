import { ReactNode } from 'react';
import { useTabsContext } from './TabsContext';

interface TabsContentProps<T> {
  value: T;
  children: ReactNode;
}

export function TabsContent<T>({ value, children }: TabsContentProps<T>) {
  const { value: activeValue } = useTabsContext<T>();
  if (activeValue !== value) return null;
  return <div>{children}</div>;
}
