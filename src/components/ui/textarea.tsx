import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import type { TextareaProps } from '@/types/types'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, style, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'w-full rounded-md border px-3 py-2 text-sm resize-none transition-colors duration-150',
        'placeholder:text-[var(--text-muted)] disabled:opacity-50',
        error ? 'border-[var(--danger)]' : 'border-[var(--border)]',
        className,
      )}
      style={{ background: 'var(--input-bg)', color: 'var(--text-primary)', ...style }}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'
