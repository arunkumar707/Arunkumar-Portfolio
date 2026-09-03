import emailjs from '@emailjs/browser'
import { env } from '@/lib/env'
import { emailJsResultSchema } from '../schemas/schemas'
import { buildEmailJsPayload } from '../utils/utils'
import type { ContactFormValues, EmailJsResult } from '../types/types'

export async function sendContactEmail(data: ContactFormValues): Promise<EmailJsResult> {
  const response: unknown = await emailjs.send(
    env.VITE_EMAILJS_SERVICE_ID,
    env.VITE_EMAILJS_TEMPLATE_ID,
    buildEmailJsPayload(data),
    env.VITE_EMAILJS_PUBLIC_KEY,
  )
  return emailJsResultSchema.parse(response)
}
