import { createContext, useContext } from 'react';

interface TabsContextType<T> {
  value: T;
  onValueChange: (val: T) => void;
}

export const TabsContext = createContext<TabsContextType<unknown>>({
  value: undefined,
  onValueChange: () => {},
});

export function useTabsContext<T>() {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error('useTabsContext must be used within a TabsRoot');
  }
  return context as TabsContextType<T>;
}
