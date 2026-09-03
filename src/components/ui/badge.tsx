import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import type { BadgeProps, BadgeVariant } from '@/types/types'

const BADGE_VARIANTS: Record<BadgeVariant, string> = {
  default: 'bg-[var(--beige)] text-[var(--text-primary)] border-[var(--border)]',
  success: 'bg-[var(--cream)] text-[var(--success)] border-[var(--border)]',
  warning: 'bg-[var(--beige)] text-[var(--gold)] border-[var(--border)]',
  danger:  'bg-[var(--cream)] text-[var(--danger)] border-[var(--border)]',
  gold:    'bg-[var(--beige)] text-[var(--gold)] border-[var(--border)]',
  outline: 'bg-transparent text-[var(--text-secondary)] border-[var(--border)]',
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium',
        BADGE_VARIANTS[variant],
        className,
      )}
      {...props}
    />
  ),
)
Badge.displayName = 'Badge'
