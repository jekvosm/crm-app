import { Link } from 'react-router-dom'

import AuthSignInForm from '../../compponents/auth-sign-in-form/auth-sign-in-form.component'

import { NavLink } from 'react-bootstrap'

const SignIn = () => {
  return (
    <>
      <header className='text-center'>
        <h2>Already have an account?</h2>
        <span>Sign in with email and password</span>
      </header>

      <AuthSignInForm />

      <span className='text-center'>
        Don’t have an account yet?{' '}
        <NavLink
          as={Link}
          to='/auth/sign-up'
          className='d-inline text-decoration-underline'
        >
          Sign up
        </NavLink>
      </span>
    </>
  )
}
export default SignIn
