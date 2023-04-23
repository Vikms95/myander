import { Modal } from './Modal'
import { FormWithProject } from '../Form/FormWithProject'
import { FormWithTicket } from '../Form/FormWithTicket'

export function ModalWithForm() {
  const currentForm = 'project'
  return (
    <Modal
      title={currentForm === 'project' ? 'Create project' : 'Create ticket'}
    >
      {currentForm === 'project' ? <FormWithProject /> : <FormWithTicket />}
    </Modal>
  )
}
