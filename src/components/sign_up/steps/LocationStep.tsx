import { useState } from 'react';
import Button from '@/components/common/button/Button';
import StepMessage from '../StepMessage';
import IconCheck from '@/assets/icons/IconCheck.svg?react';

interface InitialData {
  location: string;
}

interface LocationStepProps {
  initialData: InitialData;
  onNext: () => void;
  updateSignUpData: (location: string) => void;
}

const dummyLocations = [
  '서울 용산구 이태원동',
  '서울 종로구 청운효자동',
  '서울 송파구 잠실동',
  '서울 동작구 상도동',
  '서울 동대문구 회기동',
  '서울 성동구 성수동1가',
  '서울 성북구 안암동',
  '서울 은평구 불광동',
  '서울 관악구 봉천동',
  '서울 강서구 화곡동',
  '서울 양천구 목동',
  '서울 강동구 천호동',
  '서울 노원구 상계동',
  '서울 중랑구 면목동',
  '서울 서대문구 연희동',
  '서울 구로구 구로동',
  '서울 금천구 가산동',
  '서울 도봉구 방학동',
];

export default function LocationStep({
  onNext,
  updateSignUpData,
  initialData,
}: LocationStepProps) {
  const [selected, setSelected] = useState(initialData.location);

  const handleSelect = (location: string) => {
    setSelected(location);
    updateSignUpData(location);
  };

  return (
    <>
      <StepMessage message="지역을 선택해주세요" />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <ul className="flex flex-col gap-3">
          {dummyLocations.map((location) => (
            <PlaceItem key={location} location={location} />
          ))}
        </ul>
      </div>
      <Button
        onClick={onNext}
        disabled={!selected}
        className="mt-auto sticky bottom-2"
      >
        다음
      </Button>
    </>
  );

  function PlaceItem({ location }: { location: string }) {
    return (
      <li
        key={location}
        className={`py-3 cursor-pointer border-b last:border-b-0 border-gray-200 flex justify-between items-center`}
        onClick={() => handleSelect(location)}
      >
        <span>{location}</span>
        {selected === location && <IconCheck className="size-5" />}
      </li>
    );
  }
}
