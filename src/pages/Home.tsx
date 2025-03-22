import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Icon from '@/assets/icons/IconAboutInstagram.svg?react';

export default function Home() {
  const handleClick = () => {
    toast('Event has been created.');
  };
  return (
    <>
      <h1>Home</h1>
      <Button onClick={handleClick}>click me</Button>
      <Icon />
    </>
  );
}
