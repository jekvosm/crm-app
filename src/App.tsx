import { useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { useAppDispatch } from './store/redux-hooks/redux-hooks'

import { checkUserSession } from './store/slices/user/user-slice'

import { Container, Row, Col, Button } from 'react-bootstrap'
import Navbar from './compponents/navbar/navbar.component'
import AppHeader from './compponents/app-header/app-header.component'

const App = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location)

  useEffect(() => {
    dispatch(checkUserSession())
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    const { pathname } = location
    if (pathname === '/') {
      navigate('/total-contacts')
    }
    //eslint-disable-next-line
  }, [location])

  return (
    <Container className='app'>
      <Row className='app__section '>
        <Col className='flex-grow-0 text-nowrap d-flex flex-column'>
          <h1 className='mb-4 text-center'>LOGO</h1>
          <div className='flex-grow-1'>
            <Navbar />
          </div>
          <Button variant='secondary'>log out</Button>
        </Col>
        <Col>
          <AppHeader />
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

export default App
