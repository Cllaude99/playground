import { useState, useRef } from 'react';
import { Input } from '../../../ui/input/Input';
import Button from '../../../ui/button/Button';
import StepMessage from '../StepMessage';
import { isUnder14 } from '@/components/domain/sign_up/utils/isUnder14';
import { isValidBirthdateFormat } from '@/components/domain/sign_up/utils/isValidBirthdateFormat';
import { formatBirthdate } from '@/components/domain/sign_up/utils/formatBirthdate';

interface InitialData {
  birthdate: string;
  gender: string;
}

interface BirthDayStepProps {
  initialData: InitialData;
  onNext: (isUnder14: boolean) => void;
  updateSignUpData: (birthdate: string, gender: string) => void;
}

interface GenderOption {
  label: string;
  value: string;
}

const genderOptions = [
  { label: '남성', value: 'M' },
  { label: '여성', value: 'F' },
  { label: '기타', value: 'O' },
];

export default function BirthDayStep({
  initialData,
  onNext,
  updateSignUpData,
}: BirthDayStepProps) {
  const [birthdate, setBirthdate] = useState(initialData.birthdate);
  const [gender, setGender] = useState(initialData.gender);
  const [errors, setErrors] = useState({ birthdate: '', gender: '' });

  const birthdateRef = useRef<HTMLInputElement>(null);

  const isValid = () => {
    const newErrors = { birthdate: '', gender: '' };

    if (!birthdate.trim()) {
      newErrors.birthdate = '생년월일을 입력해주세요';
    } else if (!isValidBirthdateFormat(birthdate)) {
      newErrors.birthdate = 'YYYY/MM/DD 형식으로 입력해주세요';
    }

    if (!gender.trim()) {
      newErrors.gender = '성별을 선택해주세요';
    }

    setErrors(newErrors);

    if (newErrors.birthdate) {
      birthdateRef.current?.focus();
    }

    return !newErrors.birthdate.trim() && !newErrors.gender.trim();
  };

  const handleSubmit = () => {
    if (isValid()) {
      updateSignUpData(birthdate, gender);
      const isUserUnder14 = isUnder14(birthdate);
      onNext(isUserUnder14);
    }
  };

  return (
    <>
      <StepMessage message={`생년월일과 성별을\n입력해주세요`} />
      <Input
        ref={birthdateRef}
        label="생년월일"
        placeholder="YYYY/MM/DD"
        value={birthdate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const formatted = formatBirthdate(e.target.value);
          setBirthdate(formatted);
          setErrors((prev) => ({ ...prev, birthdate: '' }));
        }}
        errorMessage={errors.birthdate}
      />
      <GenderRadioGroup
        options={genderOptions}
        selectedValue={gender}
        onChange={(value) => {
          setGender(value);
          setErrors((prev) => ({ ...prev, gender: '' }));
        }}
        error={errors.gender}
      />
      <Button onClick={handleSubmit} className="mt-auto">
        다음
      </Button>
    </>
  );

  function GenderRadioGroup({
    options,
    selectedValue,
    onChange,
    error,
  }: {
    options: GenderOption[];
    selectedValue: string;
    onChange: (value: string) => void;
    error?: string;
  }) {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-sm">성별</label>
        <div className="flex flex-col gap-2">
          {options.map(({ label, value }) => (
            <label
              key={value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="gender"
                value={value}
                checked={selectedValue === value}
                onChange={() => onChange(value)}
                className={`
                  appearance-none size-5 rounded-full border-2 border-gray-300
                  checked:border-orange-500 checked:bg-white
                  relative
                  before:content-['']
                  before:absolute
                  before:top-1/2 before:left-1/2
                  before:w-2 before:h-2
                  before:-translate-x-1/2 before:-translate-y-1/2
                  before:rounded-full before:bg-orange-500
                  before:scale-0
                  checked:before:scale-100
                  transition-all
                `}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
}
