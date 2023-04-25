import { Container, Row, Col, Alert } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from './store/redux-hooks/redux-hooks'
import { selectCurrentUserEmail } from './store/slices/user/user-selectors'
import { useEffect } from 'react'
import { checkUserSession } from './store/slices/user/user-slice'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
    //eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <Alert variant='secondary' className='text-center'>
            CRM
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default App
