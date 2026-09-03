import type { ContactFormValues } from '../types/types'

export function buildEmailJsPayload(data: ContactFormValues) {
  return {
    from_name:  data.name,
    from_email: data.email,
    subject:    data.subject,
    message:    data.message,
    reply_to:   data.email,
  }
}
