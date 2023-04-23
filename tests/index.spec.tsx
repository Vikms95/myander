import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    screen.findByTestId('main')
    // expect(heading).toBeInTheDocument()
  })
})
