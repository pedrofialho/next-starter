'use client'

import { type PropsWithChildren } from 'react'

import { ReactQueryProvider } from './react-query-provider'
import { ThemeProvider } from './theme-provider'

export const ClientProviders = ({ children }: PropsWithChildren) => (
  <ReactQueryProvider>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  </ReactQueryProvider>
)
