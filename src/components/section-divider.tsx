import type { SectionDividerProps } from '@/types/types'
import { divider, lotusLarge } from '@/assets/images'

export function SectionDivider({ label, inverted = false }: SectionDividerProps) {
  return (
    <div className="relative flex flex-col items-center py-2 overflow-hidden">
      <img
        src={divider}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="w-full max-w-4xl h-auto object-contain"
        style={{ opacity: inverted ? 0.12 : 0.35 }}
      />
      {label && (
        <div className="absolute inset-0 flex items-center justify-center gap-3">
          <img
            src={lotusLarge}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-5 h-auto object-contain"
            style={{ opacity: 0.55 }}
          />
          <span
            className={`text-[10px] font-bold tracking-[0.22em] uppercase ${inverted ? 'text-on-navy-35' : ''}`}
            style={inverted ? undefined : { color: 'var(--text-muted)' }}
          >
            {label}
          </span>
          <img
            src={lotusLarge}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-5 h-auto object-contain"
            style={{ opacity: 0.55 }}
          />
        </div>
      )}
    </div>
  )
}
