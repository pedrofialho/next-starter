import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'secondary', className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        className,
        {
          primary: 'bg-green-600 text-white',
          secondary: 'bg-slate-50 text-slate-900',
        }[variant],
      )}
      {...props}
    />
  ),
)
Button.displayName = 'Button'
