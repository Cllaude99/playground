import HomeLayout from '@/components/domain/home/HomeLayout';
import IconFloatingOpen from '@/assets/icons/IconFloatingOpen.svg?react';
import IconFloatingClose from '@/assets/icons/IconFloatingClose.svg?react';

export default function Home() {
  return (
    <HomeLayout>
      <h3>Hello</h3>
      <IconFloatingOpen />
      <IconFloatingClose />
    </HomeLayout>
  );
}
