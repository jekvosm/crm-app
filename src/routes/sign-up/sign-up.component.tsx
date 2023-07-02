import { Link } from 'react-router-dom'

import { NavLink } from 'react-bootstrap'

import AuthSignUpForm from '../../compponents/auth-sign-up-form/auth-sign-up-form.component'

const SignUp = () => {
  return (
    <>
      <header className='text-center'>
        <h2>Don’t have an account yet?</h2>
        <span>Sign up with email</span>
      </header>

      <AuthSignUpForm />

      <span className='text-center'>
        Already have an account?{' '}
        <NavLink
          as={Link}
          to='/auth/sign-in'
          className='d-inline text-decoration-underline'
        >
          Sign in
        </NavLink>
      </span>
    </>
  )
}
export default SignUp
