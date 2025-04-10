import { Input } from '@/components/common/input/Input';
import Button from '@/components/common/button/Button';
import { useRef, useState } from 'react';
import StepMessage from '../StepMessage';

interface InitialData {
  name: string;
  nickname: string;
}

interface NameStepProps {
  initialData: InitialData;
  onNext: () => void;
  updateSignUpData: (name: string, nickname: string) => void;
}

export default function NameStep({
  initialData,
  onNext,
  updateSignUpData,
}: NameStepProps) {
  const [name, setName] = useState(initialData.name);
  const [nickname, setNickname] = useState(initialData.nickname);

  const nameRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<InitialData>({
    name: '',
    nickname: '',
  });

  const isValid = () => {
    const newErrors: InitialData = {
      name: '',
      nickname: '',
    };

    if (!name.trim()) newErrors.name = '이름을 입력해주세요';
    if (!nickname.trim()) newErrors.nickname = '별명을 입력해주세요';
    // 중복 별명 확인 로직 필요

    setErrors(newErrors);

    if (newErrors.name) {
      nameRef.current?.focus();
    } else if (newErrors.nickname) {
      nicknameRef.current?.focus();
    }

    return !newErrors.name.trim() && !newErrors.nickname.trim();
  };

  const handleInputChange =
    (key: keyof InitialData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (key === 'name') setName(value);
      if (key === 'nickname') setNickname(value);
      setErrors((prev) => ({ ...prev, [key]: '' }));
    };

  const handleSubmit = () => {
    if (isValid()) {
      updateSignUpData(name, nickname);
      onNext();
    }
  };

  return (
    <>
      <StepMessage message={`안녕하세요!\n당근에 오신 걸 환영해요!`} />
      <Input
        ref={nameRef}
        label="이름"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={handleInputChange('name')}
        errorMessage={errors.name}
      />
      <Input
        ref={nicknameRef}
        label="별명"
        placeholder="별명을 입력해주세요"
        value={nickname}
        onChange={handleInputChange('nickname')}
        errorMessage={errors.nickname}
        description="당근 앱 내에서 다른 사람들에게 보여지는 별명이에요."
      />
      <Button onClick={handleSubmit} className="mt-auto">
        다음
      </Button>
    </>
  );
}
