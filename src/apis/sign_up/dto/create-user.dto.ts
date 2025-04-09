export interface SignUpRequestDto {
  email: string;
  password: string;
  name: string;
  phone: string;
}

export interface SignUpResponseDto {
  id: number;
  email: string;
  name: string;
  phone: string;
}
