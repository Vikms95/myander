import { Form } from './index'
import { Button, Form as FormBS } from 'react-bootstrap'
import { GroupInput } from './FormGroup/GroupInput'
import { GroupSelect } from './FormGroup/GroupSelect'

export function FormWithTicket() {
  return (
    <Form>
      <FormBS className='bg-white d-flex flex-column py-5 px-3 rounded-3 w-100'>
        <GroupInput label='Ticket title' name='title' type='text' />
        <GroupInput label='Ticket description' name='description' type='text' />
        <GroupInput label='Deadline' name='date' type='date' />
        <GroupSelect label='Priority' options={[]} />
        <GroupSelect label='Type' options={[]} />

        <Button
          className='align-self-center px-5 py-1 mt-4 fw-semibold'
          variant='primary'
        >
          Create ticket
        </Button>
      </FormBS>
    </Form>
  )
}
