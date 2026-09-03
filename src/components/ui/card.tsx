import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

// ── Card ──────────────────────────────────────────────────────────────
export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('card-lift relative rounded-xl border overflow-hidden', className)}
      style={{
        background:  'var(--card-background)',
        boxShadow:   'var(--card-shadow)',
        borderColor: 'var(--border)',
        ...style,
      }}
      {...props}
    />
  ),
)
Card.displayName = 'Card'

// ── CardHeader ────────────────────────────────────────────────────────
export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center justify-between border-b px-6 py-4', className)}
      style={{ borderColor: 'var(--border)', ...style }}
      {...props}
    />
  ),
)
CardHeader.displayName = 'CardHeader'

// ── CardTitle ─────────────────────────────────────────────────────────
export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, style, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('font-serif font-bold text-lg leading-tight', className)}
      style={{ color: 'var(--navy)', ...style }}
      {...props}
    />
  ),
)
CardTitle.displayName = 'CardTitle'

// ── CardContent ───────────────────────────────────────────────────────
export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6', className)} {...props} />
  ),
)
CardContent.displayName = 'CardContent'

// ── CardFooter ────────────────────────────────────────────────────────
export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center border-t px-6 py-3', className)}
      style={{ borderColor: 'var(--border)', ...style }}
      {...props}
    />
  ),
)
CardFooter.displayName = 'CardFooter'
