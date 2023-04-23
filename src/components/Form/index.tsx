import { ReactElement } from 'react'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function Form({ children }: Props) {
  return (
    <div
      data-testid='form'
      className='d-flex justify-content-center align-items-center h-100'
    >
      {children}
    </div>
  )
}
