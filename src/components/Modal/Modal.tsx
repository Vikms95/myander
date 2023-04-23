import { ReactElement } from 'react'
// import { Modal as ModalBS } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
  title: string
}

export function Modal({ children, title }: Props) {
  return (
    <dialog open>
      {/* <ModalBS.Header
        closeButton
        className='px-5'
      >
        <ModalBS.Title className='fw-bolder px-5'>{title}</ModalBS.Title>
      </ModalBS.Header>
      <ModalBS.Body className='py-0'>{children}</ModalBS.Body> */}
    </dialog>
  )
}
