import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { DefaultError } from '@tanstack/react-query';
import { signUpQueryKey } from './queryKey';
import { SignUpInfoResponseDto } from '../dto';
import { signUpApi } from '..';

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
