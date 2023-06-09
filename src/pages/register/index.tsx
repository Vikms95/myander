import { AuthPage, FormWithRegister } from '@/components/export'

export default function Register() {
  return (
    <main
      data-testid='main'
      className='h-full w-full'
    >
      <AuthPage>
        <FormWithRegister />
      </AuthPage>
    </main>
  )
}
