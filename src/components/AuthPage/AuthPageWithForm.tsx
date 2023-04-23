'use client'

import { AuthPage, FormWithLogin, FormWithRegister } from '@/components/export'
import { TCurrentAuthForm } from '@types'
import { useState } from 'react'

export function AuthPageWithForm() {
  const [currentForm, setCurrentForm] = useState<TCurrentAuthForm>('register')

  return (
    <AuthPage>
      {currentForm === 'register' ? (
        <FormWithRegister setCurrentForm={setCurrentForm} />
      ) : (
        <FormWithLogin setCurrentForm={setCurrentForm} />
      )}
    </AuthPage>
  )
}
