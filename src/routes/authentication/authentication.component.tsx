import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../store/redux-hooks/redux-hooks'

import {
  selectCurrentUser,
  selectError,
} from '../../store/slices/user/user-selectors'

import { Col, Container, Row } from 'react-bootstrap'
import AuthErrorModal from '../../compponents/auth-error-modal/auth-error-modal.component'

// const OutletWithSpinner = WithSpinner(Outlet)

interface stateType {
  from: { pathname: string }
}

const Authentication = () => {
  const error = useAppSelector(selectError)
  const currentUser = useAppSelector(selectCurrentUser)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (currentUser) {
      const state = location.state as stateType

      if (!state) {
        navigate(`/`, { replace: true })
      } else {
        const { from } = state
        const { pathname } = from
        navigate(pathname, { replace: true })
      }
    }
    //eslint-disable-next-line
  }, [currentUser])

  return (
    <Container
      className='vh-100 d-flex flex-column justify-content-center gap-3'
      style={{ maxWidth: '20rem' }}
    >
      <Row>
        <Col className='text-center'>CRM</Col>
      </Row>

      <Row>
        <Col className='d-flex flex-column justify-content-center align-content-center gap-3'>
          {/* <OutletWithSpinner /> */}
          <Outlet />
        </Col>
      </Row>

      {error && <AuthErrorModal />}
    </Container>
  )
}
export default Authentication
