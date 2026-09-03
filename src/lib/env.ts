import { z } from 'zod'

const envSchema = z.object({
  VITE_EMAILJS_SERVICE_ID:  z.string().min(1, 'VITE_EMAILJS_SERVICE_ID is required'),
  VITE_EMAILJS_TEMPLATE_ID: z.string().min(1, 'VITE_EMAILJS_TEMPLATE_ID is required'),
  VITE_EMAILJS_PUBLIC_KEY:  z.string().min(1, 'VITE_EMAILJS_PUBLIC_KEY is required'),
})

export const env = envSchema.parse({
  VITE_EMAILJS_SERVICE_ID:  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
})
