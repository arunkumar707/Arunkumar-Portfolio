import { useQueryClient } from '@tanstack/react-query'
import { contactKeys } from './keys'

export function useInvalidateContact() {
  const queryClient = useQueryClient()
  return async () =>
    queryClient.invalidateQueries({ queryKey: contactKeys.all, refetchType: 'all' })
}
