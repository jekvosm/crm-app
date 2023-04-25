// import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

// import AuthErrorModal from '../../components/auth-error-modal/auth-error-modal.component'

import { Col, Container, Row } from 'react-bootstrap'

// interface stateType {
//   from: { pathname: string }
// }

const Authentication = () => {
  // const navigate = useNavigate()
  // const location = useLocation()

  // useEffect(() => {
  //   if (currentUser) {
  //     const state = location.state as stateType

  //     if (!state) {
  //       navigate(`/${currentUser.displayName}`, { replace: true })
  //     } else {
  //       const { from } = state
  //       const { pathname } = from
  //       navigate(pathname, { replace: true })
  //     }
  //   }
  //   //eslint-disable-next-line
  // }, [currentUser])

  return (
    <Container
      className='vh-100 d-flex flex-column justify-content-center gap-3'
      style={{ maxWidth: '20rem' }}
    >
      <Row>
        <Col className='text-center'>
          {/* <Logo className='logo' onClick={() => navigate('/')} /> */}
          LOGO
        </Col>
      </Row>

      <Row>
        <Col className='d-flex flex-column justify-content-center align-content-center gap-3'>
          {/* <OutletWithSpinner /> */}
          <Outlet />
        </Col>
      </Row>

      {/* {error && <AuthErrorModal />} */}
    </Container>
  )
}
export default Authentication
