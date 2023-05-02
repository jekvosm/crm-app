import { FC } from 'react'

import { Button, Form, Modal } from 'react-bootstrap'

type ModalProps = {
  show: boolean
  onHide: () => void
}

const MoadalAddClient: FC<ModalProps> = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='name@example.com'
              autoFocus
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Close
        </Button>
        <Button variant='primary' onClick={onHide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MoadalAddClient
