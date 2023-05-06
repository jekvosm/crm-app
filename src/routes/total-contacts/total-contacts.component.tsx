import { useState } from 'react'

import ContactsTable from '../../compponents/contacts-table/contacts-table.component'
import MoadalAddClient from '../../compponents/modal-add-client/modal-add-client.component'

import { Alert, Button, Col, Container, Row } from 'react-bootstrap'

const TotalContacts = () => {
  const [modalShow, setModalShow] = useState(false)

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
                onClick={() => setModalShow(true)}
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

      <MoadalAddClient show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}
export default TotalContacts
