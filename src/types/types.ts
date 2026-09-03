import type {
  ButtonHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'

export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  githubUrl: string | null
  liveUrl: string | null
  featured: boolean
  type: 'intern' | 'personal'
  status?: 'in-development' | 'deployed' | 'completed'
  badge?: string
  bullets?: string[]
}

export interface Experience {
  id: number
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string[]
  offerLetterUrl?: string
}

export interface Skill {
  id: number
  category: string
  name: string
  level: number
}

export interface Education {
  id: number
  degree: string
  institution: string
  location: string
  year: string
  cgpa?: string
  description?: string
}

export interface SpinnerProps {
  size?: number
  className?: string
  color?: string
}

export interface SectionDividerProps {
  label?: string
  inverted?: boolean
}

export interface ProjectCardProps {
  project: Project
  delay: number
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'gold'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  fullWidth?: boolean
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'gold' | 'outline'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

export interface NavLinkItem {
  id: string
  label: string
}

export interface SocialLinkItem {
  href: string
  label: string
}

export interface StatItem {
  num: string
  label: string
}

export interface MenuStore {
  isOpen: boolean
  toggle: () => void
  close: () => void
}

export interface LabelProps {
  className?: string
}

export interface FormErrorProps {
  message?: string
}

export interface HeroBgStyle extends CSSProperties {
  '--hero-photo': string
}

export const SkillCategory = {
  FRONTEND: 'Frontend',
  BACKEND: 'Backend',
  DATABASE: 'Database',
  TOOLS: 'Development Tools',
  AI: 'AI Tools',
  OTHER: 'Other',
} as const
export type SkillCategory = (typeof SkillCategory)[keyof typeof SkillCategory]
