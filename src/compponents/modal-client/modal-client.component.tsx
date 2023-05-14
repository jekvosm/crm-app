import {
  useAppDispatch,
  useAppSelector,
} from '../../store/redux-hooks/redux-hooks'
import {
  selectClientForEdit,
  selectErrorMessage,
  selectIsLoadingClient,
  selectModal,
} from '../../store/slices/contacts/contacts-selectors'

import ModalAddClientForm from '../modal-add-client-form/modal-add-client-form.component'
import ModalEditClientForm from '../modal-edit-client-form/modal-edit-client-form.component'

import { Button, Modal, Spinner } from 'react-bootstrap'
import {
  clearErrorMessage,
  deleteClient,
  setClientForEdit,
  showModal,
} from '../../store/slices/contacts/contacts-slice'

const ModalClient = () => {
  const dispatch = useAppDispatch()
  const { isShowModal, typeModal } = useAppSelector(selectModal)
  const errorMessage = useAppSelector(selectErrorMessage)
  const isLoading = useAppSelector(selectIsLoadingClient)
  const clientForEdit = useAppSelector(selectClientForEdit)

  const handleHideModal = () => {
    dispatch(showModal({ isShowModal: false }))
    if (typeModal === 'add') return
    dispatch(setClientForEdit(null))
  }

  const handleHideModalError = () => dispatch(clearErrorMessage())

  const handlerDeleteClient = () => {
    if (clientForEdit?.clientId && typeModal === 'delete') {
      dispatch(deleteClient(clientForEdit.clientId))
    }
  }

  return (
    <Modal show={isShowModal} onHide={handleHideModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {typeModal === 'edit' ? 'Edit Contact' : null}
          {typeModal === 'add' ? 'Add Contact' : null}
          {typeModal === 'delete' ? 'Delete Contact' : null}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {typeModal === 'edit' ? <ModalEditClientForm /> : null}
        {typeModal === 'add' ? <ModalAddClientForm /> : null}
        {typeModal === 'delete' ? 'Are you sure?' : null}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleHideModal}>
          Close
        </Button>

        <Button
          variant='primary'
          type='submit'
          form='modal-client-form'
          className='text-nowrap'
          style={{ width: '8rem' }}
          onClick={handlerDeleteClient}
        >
          {isLoading && <Spinner animation='border' size='sm' />}
          {typeModal === 'edit' && !isLoading ? 'Save Changes' : null}
          {typeModal === 'add' && !isLoading ? 'Add Contact' : null}
          {typeModal === 'delete' && !isLoading ? 'Delete Contact' : null}
        </Button>
      </Modal.Footer>

      <Modal
        show={!!errorMessage}
        onHide={handleHideModalError}
        centered
        style={{ zIndex: 99999 }}
        contentClassName='bg-info'
      >
        <Modal.Header closeButton>Error</Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleHideModalError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Modal>
  )
}

export default ModalClient
