import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useSyncFunnelStepWithQuery<T extends string>(
  currentStep: T,
  setStep: (step: T) => void,
  stepList: T[],
  defaultStep: T,
) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const stepParam = searchParams.get('step') as T;

    if (!stepParam) {
      setSearchParams({ step: defaultStep }, { replace: true });
      return;
    }

    // step이 유효하지 않으면 기본 스텝으로 설정
    const matchedStep =
      stepList.find((step) => step.toLowerCase() === stepParam.toLowerCase()) ??
      defaultStep;

    // 스텝 가드 필요 (로컬 저장소 사용 or 서버요청을 통해 확인)

    if (currentStep !== matchedStep) {
      setStep(matchedStep);
      setSearchParams({ step: matchedStep }, { replace: true });
    }
  }, [
    searchParams,
    setSearchParams,
    currentStep,
    setStep,
    stepList,
    defaultStep,
  ]);
}
