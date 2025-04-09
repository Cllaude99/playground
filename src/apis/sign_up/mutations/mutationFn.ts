import {
  DefaultError,
  useMutation,
  UseMutationOptions,
} from '@tanstack/react-query';
import { signUpApi } from '../index';
import { SignUpRequestDto, SignUpResponseDto } from '../dto';

export const usePostSignUpMutation = (
  options?: Omit<
    UseMutationOptions<SignUpResponseDto, DefaultError, SignUpRequestDto>,
    'mutationFn'
  >,
) => {
  return useMutation({
    mutationFn: (data: SignUpRequestDto) => signUpApi.postSignUp(data),
    ...options,
  });
};
