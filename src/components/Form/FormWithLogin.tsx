import { useDocument } from '@/hooks/useDocument'
import { Content, Portal, Root as DialogRoot, Title } from '@radix-ui/react-dialog'
import { useRouter } from 'next/router'
import { GroupInput } from './FormGroup/GroupInput'
import { SubmitButton } from './FormGroup/SubmitButton'

export function FormWithLogin() {
  const document = useDocument()
  const router = useRouter()

  return (
    <DialogRoot open>
      <Portal container={document && document.body}>
        <Content
          className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col
     rounded-md bg-white py-10  mobile:px-6 tablet:px-16 laptop:px-20'
        >
          <Title className=' flex items-center justify-center pb-3 font-bold text-dark-blue mobile:text-lg tablet:text-xl'>
            Start meandering.
          </Title>

          <div className='mb-4 flex self-center text-sm'>
            Not a member?
            <span
              className='ml-1 cursor-pointer text-blue-500 underline '
              role='link'
              onClick={() => router.push('/register')}
            >
              {' '}
              Register{' '}
            </span>
          </div>

          <fieldset className='flex flex-col'>
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
              onClick={() => router.push('/')}
            />
          </fieldset>
        </Content>
      </Portal>
    </DialogRoot>
  )
}
