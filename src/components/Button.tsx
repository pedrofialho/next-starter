import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'cva'
import { cn } from '@/lib/utils'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantProps<typeof buttonVariants>
}

const buttonVariants = cva('rounded', {
  variants: {
    intent: {
      primary: 'border-transparent bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'border-gray-400 bg-white text-gray-800 hover:bg-gray-100',
    },
    size: {
      small: 'px-2 py-1 text-sm',
      medium: 'px-4 py-2 text-base',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants(variant), className)}
      {...props}
    />
  ),
)

Button.displayName = 'Button'
