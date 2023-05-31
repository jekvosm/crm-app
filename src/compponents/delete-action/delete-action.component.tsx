import { FC } from 'react'

import { useAppDispatch } from '../../store/redux-hooks/redux-hooks'

import {
  setClientForEdit,
  showModal,
} from '../../store/slices/contacts/contacts-slice'

import { ReactComponent as DeleteSVG } from '../../assets/delete.svg'

type DeleteActionProps = {
  clientId: string
}

const DeleteAction: FC<DeleteActionProps> = ({ clientId }) => {
  const dispatch = useAppDispatch()

  return (
    <span className='cursor-pointer'>
      <DeleteSVG
        width={25}
        height={25}
        onClick={() => {
          dispatch(setClientForEdit(clientId))
          dispatch(showModal({ isShowModal: true, typeModal: 'delete' }))
        }}
      />
    </span>
  )
}
export default DeleteAction
