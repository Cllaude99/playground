/**
 * 생년월일 문자열을 기반으로 14세 미만인지 확인하는 함수
 * @param birthStr 'YYYY/MM/DD' 형식의 생년월일 문자열
 * @returns 14세 미만이면 true, 아니면 false
 */

import { getAgeFromBirthdate } from './getAgeFromBirthdate';

export const isUnder14 = (birthStr: string): boolean => {
  const age = getAgeFromBirthdate(birthStr);
  return age !== null && age < 14;
};
