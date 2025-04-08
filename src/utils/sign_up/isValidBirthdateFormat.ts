/**
 * 생년월일 입력값이 YYYY/MM/DD 형식인지 검사하는 함수
 * @param value 생년월일 입력값
 * @returns 형식이 올바르면 true, 아니면 false
 */

export const isValidBirthdateFormat = (value: string) => {
  return /^\d{4}\/\d{2}\/\d{2}$/.test(value);
};
