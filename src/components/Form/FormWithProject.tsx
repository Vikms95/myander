import { Form } from './export'
import { GroupInput } from './FormGroup/GroupInput'
import { Button, Row, Form as FormBS } from 'react-bootstrap'
import { GroupSelect } from './FormGroup/GroupSelect'

export function FormWithProject() {
  return (
    <Form>
      <FormBS className='d-flex flex-column rounded-3 w-100 bg-white px-3 py-5'>
        <GroupInput
          label='Project title'
          name='title'
          type='text'
        />
        <GroupInput
          label='Project description'
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
          label='Status'
          options={[]}
        />

        <Button
          className='align-self-center fw-semibold mt-4 px-5 py-1'
          variant='primary'
        >
          Create project
        </Button>
      </FormBS>
    </Form>
  )
}
