import { env } from '@/env.mjs'

export const getFooBar = () => {
  const { NEXT_FOO: foo, NEXT_BAR: bar } = env

  return { foo, bar }
}
