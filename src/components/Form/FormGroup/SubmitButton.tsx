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
      className='shadowmt-4 mt-5 flex items-center justify-center self-center rounded border-2 border-solid  border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 hover:bg-gray-100  mobile:px-8 mobile:py-2 mobile:text-sm tablet:px-6 tablet:py-1.5 tablet:text-base'
    >
      {' '}
      {text}{' '}
    </Submit>
  )
}
