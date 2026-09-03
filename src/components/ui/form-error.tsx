import type { FormErrorProps } from '@/types/types'

export function FormError({ message }: FormErrorProps) {
  if (!message) return null
  return <p className="text-xs" style={{ color: 'var(--danger)' }}>{message}</p>
}
