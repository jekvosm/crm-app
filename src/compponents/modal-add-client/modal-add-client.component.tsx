import { FC } from 'react'

import ModalAddClientForm from '../modal-add-client-form/modal-add-client-form.component'

import { Button, Modal } from 'react-bootstrap'

type ModalProps = {
  show: boolean
  onHide: () => void
}

const MoadalAddClient: FC<ModalProps> = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalAddClientForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Close
        </Button>
        <Button
          variant='primary'
          type='submit'
          form='modal-add-client-form'
          onClick={onHide}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MoadalAddClient
