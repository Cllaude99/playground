import { forwardRef, InputHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { mergeClassNames } from '../../../utils/mergeClassNames';

export const InputVariants = cva(
  `
  flex items-center justify-center outline-none w-full
  rounded-[3px] py-[0.625em] pl-[0.75em] transition-colors
  ring-1 ring-gray-300
  `,
  {
    variants: {
      inputType: {
        default: 'focus:ring-black',
        error: 'ring-red-500 bg-red-50 focus:ring-red-500',
      },
    },
    defaultVariants: {
      inputType: 'default',
    },
  },
);

interface InputProps
  extends VariantProps<typeof InputVariants>,
    InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  errorMessage?: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, description, errorMessage, inputType, className, ...props },
    ref,
  ) => {
    const isError = !!errorMessage?.trim();
    const displayInputType = isError ? 'error' : inputType;

    return (
      <div className="flex flex-col gap-1">
        {label && <label className="text-sm">{label}</label>}
        <input
          ref={ref}
          className={mergeClassNames(
            InputVariants({ inputType: displayInputType }),
            className,
          )}
          {...props}
        />
        <p className={`text-sm ${isError ? 'text-red-500' : 'text-gray-400'}`}>
          {isError ? errorMessage : description}
        </p>
      </div>
    );
  },
);
