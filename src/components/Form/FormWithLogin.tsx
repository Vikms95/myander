import { Submit } from '@radix-ui/react-form'
import React, { SyntheticEvent, useEffect, useLayoutEffect, useReducer, useRef } from 'react'
import { GroupInput } from './FormGroup/GroupInput'
import { useFetch } from '../../hooks/useFetch'
import { TCurrentAuthForm } from '@types'
import {
  Root as DialogRoot,
  Portal,
  Overlay,
  Content,
  Title,
  Trigger,
  Close,
} from '@radix-ui/react-dialog'
import { SubmitButton } from './FormGroup/SubmitButton'
import { useDocument } from '@/hooks/useDocument'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<TCurrentAuthForm>>
}

export function FormWithLogin({ setCurrentForm }: Props) {
  const document = useDocument()
  const [open, setOpen] = useReducer((value) => {
    setCurrentForm('register')
    return !value
  }, true)
  return (
    <DialogRoot
      open={open}
      modal
    >
      <Portal container={document && document.body}>
        <Content
          className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col
     rounded-md bg-white py-10  mobile:px-6 tablet:px-16 laptop:px-20'
        >
          <section className='flex flex-col'>
            <Title className=' flex items-center justify-center pb-8 font-bold text-dark-blue mobile:text-lg tablet:text-xl'>
              Start meandering.
            </Title>
            <GroupInput
              label='Username'
              name='name'
              type='text'
              placeholder='user@myander.com'
            />
            <GroupInput
              label='Password'
              name='password'
              type='password'
              placeholder='6+ Chars, 1 Capital'
            />
            <SubmitButton
              text='Login'
              setOpen={setOpen}
            />
          </section>
        </Content>
      </Portal>
    </DialogRoot>
  )
}
