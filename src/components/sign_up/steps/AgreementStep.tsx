import Button from '../../ui/button/Button';
import StepMessage from '../StepMessage';

interface AgreementStepProps {
  onNext: () => void;
  updateSignUpData: (agreement: boolean) => void;
}

export default function AgreementStep({
  onNext,
  updateSignUpData,
}: AgreementStepProps) {
  const agreement_description = `만 14세 미만의 사용자는 법정대리인(보호자)의 동의하에 당근을 이용할 수 있어요. (정보통신망법 제 31조 의거)`;

  const handleAgreement = () => {
    updateSignUpData(true);
    onNext();
  };

  return (
    <>
      <StepMessage
        message={`만 14세 미만의 사용자는\n법정대리인 동의가 필요해요`}
      />
      <h3>{agreement_description}</h3>
      <Button onClick={handleAgreement} className="mt-auto">
        법정대리인 본인인증
      </Button>
    </>
  );
}
