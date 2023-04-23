import { useDocument } from '@/hooks/useDocument'
import { Content, Portal, Root as DialogRoot, Title } from '@radix-ui/react-dialog'
import { TCurrentAuthForm } from '@types'
import React, { SyntheticEvent, useReducer, useRef } from 'react'
import { GroupInput } from './FormGroup/GroupInput'
import { SubmitButton } from './FormGroup/SubmitButton'

type Props = {
  setCurrentForm: React.Dispatch<React.SetStateAction<TCurrentAuthForm>>
}

export function FormWithRegister({ setCurrentForm }: Props) {
  const document = useDocument()
  const formRef = useRef(null)

  const [open, setOpen] = useReducer((value) => {
    setCurrentForm('login')
    return !value
  }, true)

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    const formData = new FormData(formRef.current as unknown as HTMLFormElement)
    // Call service
    // Await for data
    // Give feedback to frontend on whether it should move forward or show error message
  }

  return (
    <>
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
                Sign up to Myander.
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
              <GroupInput
                label='Confirm password'
                name='confirm'
                type='password'
              />
              <SubmitButton
                setOpen={setOpen}
                text='Register'
              />
            </section>
          </Content>
        </Portal>
      </DialogRoot>
    </>
  )
}
