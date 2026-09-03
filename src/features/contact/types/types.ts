import type { ContactChannel } from '../enums/contact.enum'

export interface ContactFormValues {
  name: string
  email: string
  subject: string
  message: string
}

export interface EmailJsResult {
  status: number
  text: string
}

export interface ContactLinkItem {
  href: string
  icon: ContactChannel
  label: string
  target: '_self' | '_blank'
}

export interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => void
  isSubmitting: boolean
}

export interface ContactSuccessProps {
  onReset: () => void
}
