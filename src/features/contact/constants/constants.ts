import { ContactChannel } from '../enums/contact.enum'
import type { ContactFormValues, ContactLinkItem } from '../types/types'

export const CONTACT_EMAIL = 'arunkumar.a.n707@gmail.com'
export const CONTACT_WHATSAPP_URL = 'https://wa.me/919632796199?text=hi'
export const CONTACT_LINKEDIN_URL = 'https://www.linkedin.com/in/arun-kumar-a-n-2a89192b4/'
export const CONTACT_GITHUB_URL = 'https://github.com/arunkumar707'

export const CONTACT_DEFAULT_VALUES: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export const CONTACT_LINKS: ContactLinkItem[] = [
  { href: `mailto:${CONTACT_EMAIL}`, icon: ContactChannel.EMAIL,    label: CONTACT_EMAIL,                      target: '_self'  },
  { href: CONTACT_WHATSAPP_URL,      icon: ContactChannel.WHATSAPP, label: '+91 96327 96199 (WhatsApp)',        target: '_blank' },
  { href: CONTACT_LINKEDIN_URL,      icon: ContactChannel.LINKEDIN, label: 'linkedin.com/in/arun-kumar-a-n',    target: '_blank' },
  { href: CONTACT_GITHUB_URL,        icon: ContactChannel.GITHUB,   label: 'github.com/arunkumar707',           target: '_blank' },
]
