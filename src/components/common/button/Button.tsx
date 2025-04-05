import { ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { mergeClassNames } from '../../../utils/mergeClassNames';

export const ButtonVariants = cva(
  `
  flex items-center justify-center whitespace-nowrap
  disabled:cursor-not-allowed
  disabled:bg-gray-200
  disabled:text-gray-400
  `,
  {
    variants: {
      buttonType: {
        primary:
          'bg-danggn-primary hover:bg-danggn-primary/90 text-white rounded-md text-md',
      },
      size: {
        default: 'h-[3.4375rem] px-4 py-2 has-[>svg]:px-3',
      },
    },
    defaultVariants: {
      buttonType: 'primary',
      size: 'default',
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
  size,
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
        ButtonVariants({ buttonType, size }),
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
