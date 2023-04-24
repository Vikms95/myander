import { useRouter } from 'next/router'

export function RegisterRedirect() {
  const router = useRouter()
  return (
    <div className='mb-4 flex self-center text-sm'>
      Not a member?
      <span
        className='ml-1 cursor-pointer font-medium text-blue-500 underline '
        role='link'
        onClick={() => router.push('/register')}
      >
        {' '}
        Register{' '}
      </span>
    </div>
  )
}
