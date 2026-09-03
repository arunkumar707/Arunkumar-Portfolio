import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { CONTACT_GITHUB_URL, CONTACT_LINKEDIN_URL, CONTACT_WHATSAPP_URL } from '@/features/contact'

const FOOTER_SOCIALS = [
  { href: CONTACT_GITHUB_URL,   label: 'GitHub'   },
  { href: CONTACT_LINKEDIN_URL, label: 'LinkedIn' },
  { href: CONTACT_WHATSAPP_URL, label: 'WhatsApp' },
] as const

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-2.5 border-t border-white/5" style={{ background: 'var(--footer-background)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="font-serif text-lg font-bold" style={{ color: 'var(--footer-text)' }}>
            AK<span style={{ color: 'var(--footer-accent)' }}>.</span>
          </span>
          <p className="text-xs" style={{ color: 'var(--cream)', opacity: 0.8 }}>
            © {year} Arun Kumar A N · Built with React + Vite + TypeScript
          </p>
          <div className="flex items-center gap-2.5">
            {FOOTER_SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-150 hover:opacity-100 hover:scale-110"
                style={{ color: 'var(--cream)', borderColor: 'var(--cream)' }}>
                {s.label === 'GitHub' && <FaGithub size={13} />}
                {s.label === 'LinkedIn' && <FaLinkedin size={13} />}
                {s.label === 'WhatsApp' && <FaWhatsapp size={13} />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
