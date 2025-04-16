import { ReactElement, ReactNode, useState } from 'react';

interface TabsProps {
  direction: 'row' | 'column';
  children: ReactNode;
  className?: string;
}

interface TabsListProps {
  direction: 'row' | 'column';
  className?: string;
  children: ReactNode;
}

interface TabsTriggerProps<T> {
  value: T;
  children: ReactNode;
  className?: string;
  activeIcon?: ReactElement;
  inactiveIcon?: ReactElement;
}

interface TabsContentWrapperProps {
  children: ReactNode;
}

interface TabsContentProps<T> {
  value: T;
  children: ReactNode;
}

export function useTab<T>(initialTab: T) {
  const [activeTab, setActiveTab] = useState<T>(initialTab);

  function Tabs({ children, className, direction }: TabsProps) {
    return (
      <div
        className={`flex h-full ${direction === 'row' ? 'flex-row' : 'flex-col'} ${className}`}
      >
        {children}
      </div>
    );
  }

  function List({ direction, children, className }: TabsListProps) {
    return (
      <div
        className={`flex flex-shrink-0 ${direction === 'row' ? 'flex-row justify-between' : 'flex-col'} ${className}`}
      >
        {children}
      </div>
    );
  }

  function Trigger({
    value,
    children,
    className,
    activeIcon,
    inactiveIcon,
  }: TabsTriggerProps<T>) {
    const isActive = activeTab === value;

    return (
      <button
        onClick={() => setActiveTab(value)}
        className={`flex flex-col items-center gap-2 transition-all ${
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

  function ContentWrapper({ children }: TabsContentWrapperProps) {
    return <div className="flex-1 overflow-y-auto">{children}</div>;
  }

  function Content({ value, children }: TabsContentProps<T>) {
    if (activeTab !== value) return null;
    return <>{children}</>;
  }

  Tabs.List = List;
  Tabs.Trigger = Trigger;
  Tabs.Content = Content;
  Tabs.ContentWrapper = ContentWrapper;

  return {
    Tabs,
  };
}
