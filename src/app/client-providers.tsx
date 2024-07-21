'use client'

import { type PropsWithChildren } from 'react'

import { ReactQueryProvider } from './react-query-provider'

export const ClientProviders = ({ children }: PropsWithChildren) => (
  <ReactQueryProvider>{children}</ReactQueryProvider>
)
