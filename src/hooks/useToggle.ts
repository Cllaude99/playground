import { useState } from 'react';

export default function useToggle(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue((prev) => !prev);

  return { value, toggleValue };
}
