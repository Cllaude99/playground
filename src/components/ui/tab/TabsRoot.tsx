import { useState, ReactNode } from 'react';
import { TabsContext } from './TabsContext';

interface TabsRootProps<T> {
  value?: T;
  onValueChange?: (val: T) => void;
  defaultValue?: T;
  children: ReactNode;
  initialTab: T;
}

export function TabsRoot<T>({
  value,
  onValueChange,
  defaultValue,
  children,
  initialTab,
}: TabsRootProps<T>) {
  const isControlled = value !== undefined && onValueChange !== undefined;
  const [internalValue, setInternalValue] = useState<T>(
    defaultValue ?? initialTab,
  );

  const currentValue = isControlled ? value : internalValue;
  const setValue = isControlled ? onValueChange : setInternalValue;

  return (
    <TabsContext.Provider
      value={{
        value: currentValue,
        onValueChange: setValue as (val: unknown) => void,
      }}
    >
      <>{children}</>
    </TabsContext.Provider>
  );
}
