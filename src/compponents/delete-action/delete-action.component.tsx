import { FC } from 'react'

import { useAppDispatch } from '../../store/redux-hooks/redux-hooks'

import { deleteClient } from '../../store/slices/contacts/contacts-slice'

import { ReactComponent as DeleteSVG } from '../../assets/delete.svg'

type DeleteActionProps = {
  clientId: string
}

const DeleteAction: FC<DeleteActionProps> = ({ clientId }) => {
  const dispatch = useAppDispatch()

  return (
    <span>
      <DeleteSVG
        width={25}
        height={25}
        onClick={() => {
          dispatch(deleteClient(clientId))
        }}
      />
    </span>
  )
}
export default DeleteAction
