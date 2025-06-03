import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { DefaultError } from '@tanstack/react-query';
import { signUpQueryKey } from './queryKey';
import { SignUpInfoResponseDto } from '../dto';
import { signUpApi } from '..';

/**
 * @summary 회원가입 정보 조회
 * @request GET:/api/signup/info
 */
export const useGetSignUpInfoQuery = <TData = SignUpInfoResponseDto>(
  options?: Omit<
    UseQueryOptions<SignUpInfoResponseDto, DefaultError, TData>,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery<SignUpInfoResponseDto, DefaultError, TData>({
    queryKey: signUpQueryKey.getSignUpInfo(),
    queryFn: () => signUpApi.getSignUpInfo(),
    ...options,
  });
};
