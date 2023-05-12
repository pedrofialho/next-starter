import { getFooBar } from '@/lib/utils/foo'

export const dynamic = 'force-dynamic'

export default async function About() {
  const foobar = getFooBar()

  console.log('foobar', { foobar })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{JSON.stringify(foobar, null, 2)}</div>
    </main>
  )
}
