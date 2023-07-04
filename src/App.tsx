import { useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { useAppDispatch } from './store/redux-hooks/redux-hooks'

import { signOutUser } from './store/slices/user/user-slice'

import { Container, Row, Col, Button } from 'react-bootstrap'

import Navbar from './compponents/navbar/navbar.component'
import AppHeader from './compponents/app-header/app-header.component'
import HeaderDropdown from './compponents/header-dropdown/header-dropdown.component'

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
        <Col className='flex-grow-0 text-nowrap d-flex app__sidebar'>
          <span className='fs-1 fw-semibold text-center app__logo'>LOGO</span>
          <div className='flex-grow-1 app__container-navbar'>
            <Navbar />
          </div>
          <Button
            variant='secondary'
            onClick={() => dispatch(signOutUser())}
            className='app_button-logout'
          >
            log out
          </Button>

          <HeaderDropdown />
        </Col>

        <Col className='d-flex flex-column gap-3'>
          <AppHeader />
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

export default App
