import { AuthPage, FormWithLogin } from '@/components/export'

export default function Login() {
  return (
    <main
      data-testid='main'
      className='h-full w-full'
    >
      <AuthPage>
        <FormWithLogin />
      </AuthPage>
    </main>
  )
}
