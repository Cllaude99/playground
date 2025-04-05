import { ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { mergeClassNames } from '../../../utils/mergeClassNames';

export const ButtonVariants = cva(
  `
  flex items-center justify-center w-full
  disabled:cursor-not-allowed
  disabled:bg-gray-200
  disabled:text-gray-400
  `,
  {
    variants: {
      buttonType: {
        primary: 'bg-danggn-primary text-white rounded-md h-[3.4375rem]',
      },
      fontSize: {
        default: 'text-md',
      },
    },
    defaultVariants: {
      buttonType: 'primary',
      fontSize: 'default',
    },
  },
);

interface ButtonProps
  extends VariantProps<typeof ButtonVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  buttonType,
  fontSize,
  isLoading,
  loadingText = '잠시만 기다려 주세요...',
  className,
  children,
  onClick,
  disabled,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type="button"
      className={mergeClassNames(
        ButtonVariants({ buttonType, fontSize }),
        className,
      )}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={isLoading}
      aria-disabled={isDisabled}
      {...rest}
    >
      {isLoading ? loadingText : children}
    </button>
  );
}
