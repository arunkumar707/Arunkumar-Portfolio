import { useSendContactMutation } from '../mutations/send-contact'

export function useContact() {
  const mutation = useSendContactMutation()
  return {
    send:      mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    reset:     mutation.reset,
  }
}
