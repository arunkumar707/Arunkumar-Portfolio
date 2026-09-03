import { Toaster as SonnerToaster, toast } from 'sonner'

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      expand={false}
      closeButton
      richColors={false}
      toastOptions={{
        style: {
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '12px',
          borderRadius: '10px',
          backgroundColor: 'var(--warm-white)',
          color: 'var(--text-primary)',
        },
        classNames: {
          toast: 'shadow-lg border font-sans',
          title: 'font-bold text-xs',
          description: 'text-[11.5px] leading-relaxed',
          actionButton: 'bg-[var(--navy)] text-[var(--button-text)] text-xs font-semibold px-2.5 py-1 rounded-md hover:bg-[var(--deep-navy)]',
          cancelButton: 'bg-[var(--beige)] text-[var(--text-secondary)] text-xs px-2.5 py-1 rounded-md',
        },
      }}
    />
  )
}

export { toast }
