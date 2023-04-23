import { Form } from './index'
import { GroupInput } from './FormGroup/GroupInput'
import { Button, Row, Form as FormBS } from 'react-bootstrap'
import { GroupSelect } from './FormGroup/GroupSelect'

export function FormWithProject() {
  return (
    <Form>
      <FormBS className='bg-white d-flex flex-column py-5 px-3 rounded-3 w-100'>
        <GroupInput label='Project title' name='title' type='text' />
        <GroupInput
          label='Project description'
          name='description'
          type='text'
        />
        <GroupInput label='Deadline' name='date' type='date' />
        <GroupSelect label='Priority' options={[]} />
        <GroupSelect label='Status' options={[]} />

        <Button
          className='align-self-center px-5 py-1 mt-4 fw-semibold'
          variant='primary'
        >
          Create project
        </Button>
      </FormBS>
    </Form>
  )
}
