import { create } from 'zustand'
import type { MenuStore } from '@/types/types'

export const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
  close:  () => set({ isOpen: false }),
}))
