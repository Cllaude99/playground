import { ReactNode, ReactElement } from 'react';
import { useTabsContext } from './TabsContext';

interface TabsTriggerProps<T> {
  value: T;
  children: ReactNode;
  className?: string;
  activeIcon?: ReactElement;
  inactiveIcon?: ReactElement;
}

export function TabsTrigger<T>({
  value,
  children,
  className = '',
  activeIcon,
  inactiveIcon,
}: TabsTriggerProps<T>) {
  const { value: activeValue, onValueChange } = useTabsContext<T>();
  const isActive = activeValue === value;

  return (
    <button
      onClick={() => onValueChange(value)}
      className={`flex items-center gap-2 px-4 py-2 transition-all ${
        isActive
          ? 'text-primary border-b-2 border-primary font-medium'
          : 'text-muted-foreground hover:text-primary'
      } ${className}`}
    >
      {isActive ? activeIcon : inactiveIcon}
      {children}
    </button>
  );
}
