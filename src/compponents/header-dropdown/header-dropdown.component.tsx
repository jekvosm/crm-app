import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../store/redux-hooks/redux-hooks'
import { signOutUser } from '../../store/slices/user/user-slice'
import { ReactComponent as MenuSVG } from '../../assets/menu.svg'

const HeaderDropdown = () => {
  const dispatch = useAppDispatch()

  return (
    <DropdownButton
      as={ButtonGroup}
      key='primary'
      id={`dropdown-variant-primary`}
      variant='primary'
      title={
        <>
          <MenuSVG width={'2rem'} height={'2rem'} />
        </>
      }
      className='header-dropdown'
      menuVariant='dark'
    >
      <Dropdown.Item
        as={Link}
        eventKey='/total-contacts'
        to={'/total-contacts'}
      >
        Total Contacts
      </Dropdown.Item>
      <Dropdown.Item as={Link} to={'/calendar'} eventKey='/calendar'>
        Calendar
      </Dropdown.Item>
      <Dropdown.Item
        as={Link}
        to={'/project-report'}
        eventKey='/project-report'
      >
        Project Report
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey='4' onClick={() => dispatch(signOutUser())}>
        Log out
      </Dropdown.Item>
    </DropdownButton>
  )
}
export default HeaderDropdown
