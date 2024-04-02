'use server'

import { env } from '~/env.mjs'

export async function getDatabaseURL() {
  return env.DATABASE_URL
}
