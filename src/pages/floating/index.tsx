import FloatingButton from '@/components/domain/floating/FloatingButton';
import FloatingPanel from '@/components/domain/floating/FloatingPanel';
import FloatingWidgetLayout from '@/components/domain/floating/FloatingWidgetLayout';
import useToggle from '@/hooks/useToggle';

export default function FloatingWidget() {
  const { value: isOpen, toggleValue: toggleOpen } = useToggle(false);

  return (
    <FloatingWidgetLayout>
      {isOpen && <FloatingPanel />}
      <FloatingButton isOpen={isOpen} onClick={toggleOpen} />
    </FloatingWidgetLayout>
  );
}
