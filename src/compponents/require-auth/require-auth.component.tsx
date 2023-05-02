import { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import {
  useAppDispatch,
  useAppSelector,
} from '../../store/redux-hooks/redux-hooks'

import { selectCurrentUser } from '../../store/slices/user/user-selectors'
import { checkUserSession } from '../../store/slices/user/user-slice'

const RequireAuth = () => {
  const currentUser = useAppSelector(selectCurrentUser)
  const location = useLocation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
    //eslint-disable-next-line
  }, [])

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to='/auth/sign-in' state={{ from: location }} replace />
  )
}
export default RequireAuth
