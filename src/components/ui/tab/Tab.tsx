import {
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
} from 'react';

interface TabsContextType<T> {
  value: T;
  onValueChange: (val: T) => void;
}

export function createTabs<T>(initialTab: T) {
  const TabsContext = createContext<TabsContextType<T>>({
    value: initialTab,
    onValueChange: () => {},
  });

  function useTabsContext() {
    return useContext(TabsContext);
  }

  function Root({
    value,
    onValueChange,
    defaultValue,
    children,
  }: {
    value?: T;
    onValueChange?: (val: T) => void;
    defaultValue?: T;
    children: ReactNode;
  }) {
    const isControlled = value !== undefined && onValueChange !== undefined;
    const [internalValue, setInternalValue] = useState<T>(
      defaultValue ?? initialTab,
    );

    const currentValue = isControlled ? value : internalValue;
    const setValue = isControlled ? onValueChange : setInternalValue;

    return (
      <TabsContext.Provider
        value={{ value: currentValue, onValueChange: setValue }}
      >
        <>{children}</>
      </TabsContext.Provider>
    );
  }

  function List({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) {
    return <div className={className}>{children}</div>;
  }

  function Trigger({
    value,
    children,
    className = '',
    activeIcon,
    inactiveIcon,
  }: {
    value: T;
    children: ReactNode;
    className?: string;
    activeIcon?: ReactElement;
    inactiveIcon?: ReactElement;
  }) {
    const { value: activeValue, onValueChange } = useTabsContext();
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

  function Content({ value, children }: { value: T; children: ReactNode }) {
    const { value: activeValue } = useTabsContext();
    if (activeValue !== value) return null;
    return <div>{children}</div>;
  }

  return {
    Root,
    List,
    Trigger,
    Content,
  };
}
