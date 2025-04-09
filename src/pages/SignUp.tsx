import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { useFunnel } from '@/hooks/useFunnel';
import NameStep from '@/components/sign_up/steps/NameStep';
import LocationStep from '@/components/sign_up/steps/LocationStep';
import BirthdayStep from '@/components/sign_up/steps/BirthDayStep';
import AgreementStep from '@/components/sign_up/steps/AgreementStep';
import ConfirmStep from '@/components/sign_up/steps/ConfirmStep';
import { useState, useRef } from 'react';
import BeforeButton from '@/components/sign_up/steps/BeforeButton';
import { useSyncFunnelStepWithQuery } from '@/hooks/sign_up/useSyncFunnelStepWithQuery';
import { isUnder14 } from '@/components/sign_up/utils/isUnder14';
import SignUpLayout from '@/components/sign_up/SignUpLayout';

export const SignUpStep = {
  name: 'name',
  location: 'location',
  birthday: 'birthday',
  agreement: 'agreement',
  confirm: 'confirm',
} as const;

export interface SignUpStepData {
  name: string;
  nickname: string;
  location: string;
  birthdate: string;
  gender: string;
  agreement: boolean;
  confirm: boolean;
}

type SignUpStepType = (typeof SignUpStep)[keyof typeof SignUpStep];
const SignUpSteps = Object.values(SignUpStep);

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const returnPathRef = useRef(location.state?.from || '/');
  const [, setSearchParams] = useSearchParams();
  const { Funnel, step, setStep } = useFunnel<SignUpStepType>(SignUpStep.name);
  const [signUpData, setSignUpData] = useState<SignUpStepData>({
    name: '',
    nickname: '',
    location: '',
    birthdate: '',
    gender: '',
    agreement: false,
    confirm: false,
  });

  const onNext = (newStep: SignUpStepType) => {
    setStep(newStep);
    setSearchParams({ step: newStep });
  };

  const onBefore = () => {
    const isFirstStep = SignUpSteps.indexOf(step) === 0;
    if (isFirstStep) {
      navigate(returnPathRef.current, { replace: true });
    } else if (step === SignUpStep.confirm) {
      const userIsUnder14 = isUnder14(signUpData.birthdate);
      onNext(userIsUnder14 ? SignUpStep.agreement : SignUpStep.birthday);
    } else {
      onNext(SignUpSteps[SignUpSteps.indexOf(step) - 1]);
    }
  };

  // 쿼리 파라미터의 스텝과 Funnel의 스텝을 동기화
  useSyncFunnelStepWithQuery<SignUpStepType>(
    step,
    setStep,
    SignUpSteps,
    SignUpStep.name,
  );

  return (
    <SignUpLayout>
      <BeforeButton onBefore={onBefore} />
      <Funnel>
        <Funnel.Step step={SignUpStep.name}>
          <NameStep
            initialData={{
              name: signUpData.name,
              nickname: signUpData.nickname,
            }}
            onNext={() => onNext(SignUpStep.location)}
            updateSignUpData={(name, nickname) =>
              setSignUpData({ ...signUpData, name, nickname })
            }
          />
        </Funnel.Step>
        <Funnel.Step step={SignUpStep.location}>
          <LocationStep
            initialData={{
              location: signUpData.location,
            }}
            onNext={() => onNext(SignUpStep.birthday)}
            updateSignUpData={(location) =>
              setSignUpData({ ...signUpData, location })
            }
          />
        </Funnel.Step>
        <Funnel.Step step={SignUpStep.birthday}>
          <BirthdayStep
            initialData={{
              birthdate: signUpData.birthdate,
              gender: signUpData.gender,
            }}
            onNext={(isUserUnder14) => {
              onNext(isUserUnder14 ? SignUpStep.agreement : SignUpStep.confirm);
            }}
            updateSignUpData={(birthdate, gender) =>
              setSignUpData({ ...signUpData, birthdate, gender })
            }
          />
        </Funnel.Step>
        <Funnel.Step step={SignUpStep.agreement}>
          <AgreementStep
            onNext={() => onNext(SignUpStep.confirm)}
            updateSignUpData={(agreement) =>
              setSignUpData({ ...signUpData, agreement })
            }
          />
        </Funnel.Step>
        <Funnel.Step step={SignUpStep.confirm}>
          <ConfirmStep signUpData={signUpData} />
        </Funnel.Step>
      </Funnel>
    </SignUpLayout>
  );
}
