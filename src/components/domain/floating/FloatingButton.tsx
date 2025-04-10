import IconFloatingOpen from '@/assets/icons/IconFloatingOpen.svg?react';
import IconFloatingClose from '@/assets/icons/IconFloatingClose.svg?react';

interface FloatingButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function FloatingButton({
  isOpen,
  onClick,
}: FloatingButtonProps) {
  return (
    <button onClick={onClick}>
      {isOpen ? <IconFloatingClose /> : <IconFloatingOpen />}
    </button>
  );
}
