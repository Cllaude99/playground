/**
 * 생년월일 입력값을 YYYY/MM/DD 형식으로 자동 포맷팅하는 함수
 * @param value 사용자가 입력한 생년월일 문자열
 * @returns YYYY/MM/DD 형식으로 포맷팅된 문자열
 */

// 입력값 자동 포맷팅 함수
export const formatBirthdate = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  const parts = [
    digits.slice(0, 4),
    digits.slice(4, 6),
    digits.slice(6, 8),
  ].filter(Boolean);
  return parts.join('/');
};
