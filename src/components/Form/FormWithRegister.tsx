import { useDocument } from '@/hooks/useDocument'
import { Content, Portal, Root as DialogRoot, Title } from '@radix-ui/react-dialog'
import { GroupInput } from './FormGroup/GroupInput'
import { SubmitButton } from './FormGroup/SubmitButton'
import { useRouter } from 'next/router'

export function FormWithRegister() {
  const router = useRouter()
  const document = useDocument()

  return (
    <DialogRoot open>
      <Portal container={document && document.body}>
        <Content
          className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col
 rounded-md bg-white py-10  mobile:px-6 tablet:px-16 laptop:px-20'
        >
          <fieldset className='flex flex-col'>
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
              onClick={() => router.push('/login')}
              text='Register'
            />
          </fieldset>
        </Content>
      </Portal>
    </DialogRoot>
  )
}
