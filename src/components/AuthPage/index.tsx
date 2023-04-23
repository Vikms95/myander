import { ReactElement } from 'react'

type Props = {
  children?: ReactElement[] | ReactElement
}

export function AuthPage({ children }: Props) {
  return <main className=' h-full w-full bg-white bg-cover bg-center'>{children}</main>
}
