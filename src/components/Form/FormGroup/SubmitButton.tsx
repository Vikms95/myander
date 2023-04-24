import { Submit } from '@radix-ui/react-form'
import React from 'react'

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  text: string
}

export function SubmitButton({ onClick, text }: Props) {
  return (
    <Submit
      onClick={onClick}
      className=' mt-5 flex items-center justify-center self-center rounded border-2 border-solid border-gray-400  bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100  mobile:px-6 mobile:py-1.5 mobile:text-sm tablet:px-8 tablet:py-2 tablet:text-base'
    >
      {' '}
      {text}{' '}
    </Submit>
  )
}
