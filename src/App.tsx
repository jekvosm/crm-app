import { useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { useAppDispatch } from './store/redux-hooks/redux-hooks'

import { signOutUser } from './store/slices/user/user-slice'

import { Container, Row, Col, Button } from 'react-bootstrap'

import Navbar from './compponents/navbar/navbar.component'
import AppHeader from './compponents/app-header/app-header.component'

const App = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const { pathname } = location
    if (pathname === '/') {
      navigate('/total-contacts')
    }

    //eslint-disable-next-line
  }, [location])

  return (
    <Container className='app'>
      <Row className='app__section'>
        <Col className='flex-grow-0 text-nowrap d-flex flex-column'>
          <h1 className='mb-4 text-center'>LOGO</h1>
          <div className='flex-grow-1'>
            <Navbar />
          </div>
          <Button variant='secondary' onClick={() => dispatch(signOutUser())}>
            log out
          </Button>
        </Col>
        <Col className='d-flex flex-column gap-4'>
          <AppHeader />
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

export default App
