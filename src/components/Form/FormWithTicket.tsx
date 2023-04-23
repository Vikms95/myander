import { Form } from './export'
import { Button, Form as FormBS } from 'react-bootstrap'
import { GroupInput } from './FormGroup/GroupInput'
import { GroupSelect } from './FormGroup/GroupSelect'

export function FormWithTicket() {
  return (
    <Form>
      <FormBS className='d-flex flex-column rounded-3 w-100 bg-white px-3 py-5'>
        <GroupInput
          label='Ticket title'
          name='title'
          type='text'
        />
        <GroupInput
          label='Ticket description'
          name='description'
          type='text'
        />
        <GroupInput
          label='Deadline'
          name='date'
          type='date'
        />
        <GroupSelect
          label='Priority'
          options={[]}
        />
        <GroupSelect
          label='Type'
          options={[]}
        />

        <Button
          className='align-self-center fw-semibold mt-4 px-5 py-1'
          variant='primary'
        >
          Create ticket
        </Button>
      </FormBS>
    </Form>
  )
}
