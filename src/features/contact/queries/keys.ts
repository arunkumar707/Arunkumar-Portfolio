export const contactKeys = {
  all:     ['contact'] as const,
  lists:   () => [...contactKeys.all, 'list'] as const,
  details: () => [...contactKeys.all, 'detail'] as const,
}
