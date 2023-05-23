/* eslint-disable no-restricted-imports */
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Inspired by the `cn` helper from https://github.com/shadcn/ui
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
