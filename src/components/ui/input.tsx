import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import type { InputProps } from '@/types/types'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, style, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'w-full rounded-md border px-3 py-2 text-sm transition-colors duration-150',
        'placeholder:text-[var(--text-muted)] disabled:opacity-50',
        error ? 'border-[var(--danger)]' : 'border-[var(--border)]',
        className,
      )}
      style={{ background: 'var(--input-bg)', color: 'var(--text-primary)', ...style }}
      {...props}
    />
  ),
)
Input.displayName = 'Input'
