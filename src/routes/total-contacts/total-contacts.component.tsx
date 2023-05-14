import { useAppDispatch } from '../../store/redux-hooks/redux-hooks'
import { showModal } from '../../store/slices/contacts/contacts-slice'

import ContactsTable from '../../compponents/contacts-table/contacts-table.component'
import ModalClient from '../../compponents/modal-client/modal-client.component'

import { Alert, Button, Col, Container, Row } from 'react-bootstrap'

const TotalContacts = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <Alert variant='light' className='flex-grow-1 mb-0'>
        <Container className='h-100 d-flex flex-column'>
          <Row className='justify-content-between'>
            <Col className='flex-grow-0 text-nowrap'>
              <h2 className=''>Total Contacts</h2>
            </Col>
            <Col className='flex-grow-0 text-nowrap'>
              <Button
                variant='warning'
                className='my-1'
                onClick={() =>
                  dispatch(showModal({ isShowModal: true, typeModal: 'add' }))
                }
              >
                Add +
              </Button>
            </Col>
          </Row>
          <Row className='flex-grow-1'>
            <ContactsTable />
          </Row>
        </Container>
      </Alert>

      <ModalClient />
    </>
  )
}
export default TotalContacts
