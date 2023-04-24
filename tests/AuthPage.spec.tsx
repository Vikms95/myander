import { FormWithLogin, FormWithRegister } from '@/components/export'
import { render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { act } from 'react-dom/test-utils'

jest.mock('next/router', () => require('next-router-mock'))

describe('AuthPage', () => {
  it('loads the auth page with login form', async () => {
    render(<FormWithLogin />)

    await act(async () => mockRouter.push('/login'))

    expect(mockRouter).toMatchObject({
      asPath: '/login',
      pathname: '/login',
    })
    screen.getByRole('dialog')
  })

  it('loads the auth page with register form', async () => {
    render(<FormWithRegister />)

    await act(async () => mockRouter.push('/register'))

    expect(mockRouter).toMatchObject({
      asPath: '/register',
      pathname: '/register',
    })
    screen.getByRole('dialog')
    screen.getByText('Confirm password')
  })
})
