import { AxiosInstance } from 'axios';
import { fetchApiData } from '@/utils/fetchApiData';
import {
  SignUpRequestDto,
  SignUpInfoResponseDto,
  SignUpResponseDto,
} from './dto';

export class SignUpApi {
  private readonly instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  /**
   * @summary 회원가입 정보 조회
   * @returns 회원가입 정보
   * @request GET:/api/signup/info
   */
  getSignUpInfo() {
    return fetchApiData<SignUpInfoResponseDto>(this.instance, {
      method: 'GET',
      url: '/signup/info',
    });
  }

  /**
   * @summary 회원가입
   * @param data 회원가입 정보
   * @returns 회원가입 정보
   * @request POST:/api/signup
   */
  postSignUp(data: SignUpRequestDto) {
    return fetchApiData<SignUpResponseDto, SignUpRequestDto>(this.instance, {
      method: 'POST',
      url: '/signup',
      data,
    });
  }
}
