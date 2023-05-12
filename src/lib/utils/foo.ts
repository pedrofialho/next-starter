import { env } from '@/env.mjs'

export const getFooBar = () => {
  const { FOO: foo, BAR: bar } = env

  return { foo, bar }
}
