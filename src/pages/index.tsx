import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <main className='h-full bg-white'>
      <button onClick={() => router.push('/create')}></button>
    </main>
  )
}
