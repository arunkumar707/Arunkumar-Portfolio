export const ContactChannel = {
  EMAIL:    'email',
  WHATSAPP: 'whatsapp',
  LINKEDIN: 'linkedin',
  GITHUB:   'github',
} as const
export type ContactChannel = (typeof ContactChannel)[keyof typeof ContactChannel]
