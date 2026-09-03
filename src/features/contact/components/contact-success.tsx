import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui'
import type { ContactSuccessProps } from '../types/types'

export function ContactSuccess({ onReset }: ContactSuccessProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
      <CheckCircle2 size={48} strokeWidth={1.5} style={{ color: 'var(--light-gold)' }} />
      <p className="font-semibold text-lg" style={{ color: 'var(--cream)' }}>Message sent!</p>
      <p className="text-xs text-on-navy-60">I{"'"}ll get back to you within 24 hours.</p>
      <Button variant="gold" size="lg" className="mt-4" onClick={onReset}>Send another</Button>
    </div>
  )
}
