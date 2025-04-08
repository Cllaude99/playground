/**
 * 'YYYY/MM/DD' 형식의 생년월일 문자열을 기반으로 만 나이를 계산하는 함수
 * @param birthStr 'YYYY/MM/DD' 형식의 생년월일
 * @returns 만 나이 (숫자), 유효하지 않은 입력일 경우 null
 */
export const getAgeFromBirthdate = (birthStr: string): number | null => {
  if (!birthStr || !birthStr.includes('/')) return null;

  const [yearStr, monthStr, dayStr] = birthStr.split('/');

  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10) - 1; // JS의 월은 0-indexed
  const day = parseInt(dayStr, 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) return null;

  const birthDate = new Date(year, month, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
};
