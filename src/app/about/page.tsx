import { env } from '~/env.mjs'
import { getDatabaseURL } from '~/lib/utils/foo'

export const revalidate = 0

export default async function About() {
  const now = new Date().toISOString()
  const databaseURL = await getDatabaseURL()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{JSON.stringify({ databaseURL }, null, 2)}</div>
      <div>{JSON.stringify({ now }, null, 2)}</div>
      <div>{JSON.stringify({ baz: env.NEXT_PUBLIC_BAZ }, null, 2)}</div>
    </main>
  )
}
