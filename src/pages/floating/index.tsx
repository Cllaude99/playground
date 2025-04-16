import { useRef } from 'react';
import FloatingButton from '@/components/domain/floating/FloatingButton';
import FloatingPanel from '@/components/domain/floating/FloatingPanel';
import FloatingWidgetLayout from '@/components/domain/floating/FloatingWidgetLayout';
import useToggle from '@/hooks/useToggle';
import useClickOutside from '@/hooks/useClickOutside';

export default function FloatingWidget() {
  const floatingRef = useRef<HTMLDivElement>(null);
  const {
    value: isOpen,
    toggleValue: toggleOpen,
    setValue: setIsOpen,
  } = useToggle(false);

  useClickOutside(floatingRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <FloatingWidgetLayout containerRef={floatingRef}>
      {isOpen && <FloatingPanel />}
      <FloatingButton isOpen={isOpen} onClick={toggleOpen} />
    </FloatingWidgetLayout>
  );
}
