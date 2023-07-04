import { Link, useLocation } from 'react-router-dom'

import { Nav, NavItem } from 'react-bootstrap'

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <Nav variant='pills' activeKey={pathname} className='app__navbar'>
      <NavItem>
        <Nav.Link as={Link} to={'/total-contacts'} eventKey='/total-contacts'>
          Total Contacts
        </Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link as={Link} to={'/calendar'} eventKey='/calendar'>
          Calendar
        </Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link as={Link} to={'/project-report'} eventKey='/project-report'>
          Project Report
        </Nav.Link>
      </NavItem>
    </Nav>
  )
}
export default Navbar
