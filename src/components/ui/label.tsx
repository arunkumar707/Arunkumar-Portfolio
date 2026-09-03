import type { LabelHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import type { LabelProps } from '@/types/types'

export function Label({ className, ...props }: LabelProps & LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn('text-xs font-bold uppercase tracking-[0.08em]', className)}
      {...props}
    />
  )
}
