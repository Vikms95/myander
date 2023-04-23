import { AuthPage, FormWithLogin, FormWithRegister } from '@/components/export'

export default function Home() {
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
