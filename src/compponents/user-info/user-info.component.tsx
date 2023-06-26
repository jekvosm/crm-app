import { useAppSelector } from '../../store/redux-hooks/redux-hooks'
import { selectCurrentUser } from '../../store/slices/user/user-selectors'
import Image from '../../assets/user-foto.png'

const UserInfo = () => {
  const currentuser = useAppSelector(selectCurrentUser)

  return (
    <div className='d-flex gap-2 align-items-center'>
      <img src={Image} width={50} height={50} />
      <span className='fs-5'>{currentuser?.displayName}</span>
    </div>
  )
}
export default UserInfo
