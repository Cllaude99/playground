import { SignUpStepData } from '@/pages/SignUp';
import Button from '../../../ui/button/Button';
import StepMessage from '../StepMessage';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../../ui/input/Input';
import { getAgeFromBirthdate } from '@/components/domain/sign_up/utils/getAgeFromBirthdate';
import { isUnder14 } from '@/components/domain/sign_up/utils/isUnder14';

interface ConfirmStepProps {
  signUpData: SignUpStepData;
}

export default function ConfirmStep({ signUpData }: ConfirmStepProps) {
  const getGender = (gender: string) => {
    if (gender === 'M') return '남성';
    if (gender === 'F') return '여성';
    return '기타';
  };

  const navigate = useNavigate();

  return (
    <>
      <StepMessage message={`입력한 내용을 확인해주세요`} />
      <Input inputType="readOnly" label="이름" defaultValue={signUpData.name} />
      <Input
        inputType="readOnly"
        label="지역"
        defaultValue={signUpData.location}
      />
      <Input
        inputType="readOnly"
        label="생년월일"
        defaultValue={signUpData.birthdate}
      />
      <Input
        label="만나이"
        defaultValue={`${getAgeFromBirthdate(signUpData.birthdate)}세`}
        inputType="readOnly"
      />
      {isUnder14(signUpData.birthdate) && (
        <Input
          label="법정대리인 동의 여부"
          defaultValue={signUpData.agreement ? '동의' : '미동의'}
          inputType="readOnly"
        />
      )}
      <Input
        inputType="readOnly"
        label="성별"
        defaultValue={getGender(signUpData.gender)}
      />
      <Button onClick={() => navigate('/sign_up/complete')} className="mt-auto">
        가입하기
      </Button>
    </>
  );
}
