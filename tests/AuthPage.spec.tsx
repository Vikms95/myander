import { FormWithLogin, FormWithRegister } from '@/components/export'
import { render, screen } from '@testing-library/react'

describe('AuthPage', () => {
  test('loads the auth page with login form', () => {
    const mockFn = jest.fn()

    render(<FormWithLogin />)
    screen.getByRole('dialog')
  })

  test('loads the auth page with register form', () => {
    const mockFn = jest.fn()

    render(<FormWithRegister />)
    screen.getByRole('dialog')
    screen.getByText('Confirm password')
  })
})
