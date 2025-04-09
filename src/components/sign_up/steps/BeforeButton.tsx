import IconChevronBack from '@/assets/icons/IconChevronBack.svg?react';

interface BeforeButtonProps {
  onBefore: () => void;
}

export default function BeforeButton({ onBefore }: BeforeButtonProps) {
  return (
    <div className="-ml-2">
      <IconChevronBack className="size-10 cursor-pointer" onClick={onBefore} />
    </div>
  );
}
