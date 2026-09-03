import type { ReactElement } from 'react'
import { Mail } from 'lucide-react'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { useContact } from '../hooks/use-contact'
import { ContactForm } from '../components/contact-form'
import { ContactSuccess } from '../components/contact-success'
import { CONTACT_LINKS } from '../constants/constants'
import { ContactChannel } from '../enums/contact.enum'

const ICONS: Record<ContactChannel, ReactElement> = {
  [ContactChannel.EMAIL]:    <Mail size={15} strokeWidth={1.8} />,
  [ContactChannel.WHATSAPP]: <FaWhatsapp size={15} />,
  [ContactChannel.LINKEDIN]: <FaLinkedin size={15} />,
  [ContactChannel.GITHUB]:   <FaGithub size={15} />,
}

export default function ContactPage() {
  const { send, isPending, isSuccess, reset } = useContact()

  return (
    <section id="contact" className="py-24" style={{ background: 'var(--navy)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="block text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--light-gold)' }}>Contact</span>
            <h2 className="font-serif font-bold leading-tight mb-4" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: 'var(--cream)' }}>
              Let{"'"}s build something <em className="italic" style={{ color: 'var(--light-gold)' }}>together.</em>
            </h2>
            <div className="gold-bar mb-6" />
            <p className="text-sm leading-[1.8] mb-8 text-on-navy-soft">
              Open to full-stack roles, internship extensions, and freelance projects.
            </p>
            <div className="flex flex-col gap-4">
              {CONTACT_LINKS.map((l) => (
                <a key={l.label} href={l.href} target={l.target} rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-on-navy transition-colors duration-150 hover:text-[var(--light-gold)]">
                  <span className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-on-navy-08"
                    style={{ color: 'var(--light-gold)' }}>
                    {ICONS[l.icon]}
                  </span>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            {isSuccess ? (
              <ContactSuccess onReset={reset} />
            ) : (
              <ContactForm onSubmit={send} isSubmitting={isPending} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
