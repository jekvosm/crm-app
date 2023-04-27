import { Button, Col, Nav, NavItem, Row, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav
      variant='pills'
      defaultActiveKey='total-contacts'
      className='flex-column'
    >
      <NavItem>
        <Nav.Link as={Link} to={'/total-contacts'} eventKey='total-contacts'>
          Total Contacts
        </Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link eventKey='calendar' as={Link} to={'/calendar'}>
          Calendar
        </Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link as={Link} eventKey='project-report' to={'/project-report'}>
          Project Report
        </Nav.Link>
      </NavItem>
    </Nav>
  )
}
export default Navbar
