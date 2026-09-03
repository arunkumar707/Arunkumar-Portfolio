import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from '@/components/ui'
import { formatApiClientError } from '@/lib/api-client'
import { CONTACT_EMAIL } from '../constants/constants'
import { sendContactEmail } from '../api/contact.api'
import { contactKeys } from '../queries/keys'
import type { ContactFormValues } from '../types/types'

export function useSendContactMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (payload: ContactFormValues) => sendContactEmail(payload),
    onSuccess: async () => {
      toast.success('Message sent! I will get back to you within 24 hours.')
      await queryClient.invalidateQueries({ queryKey: contactKeys.all, refetchType: 'all' })
    },
    onError: (error: Error) => {
      toast.error(formatApiClientError(error, `Failed to send. Email me directly at ${CONTACT_EMAIL}`))
    },
  })
}
