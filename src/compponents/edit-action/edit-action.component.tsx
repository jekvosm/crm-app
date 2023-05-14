import { FC } from 'react'

import { ReactComponent as EditSVG } from '../../assets/edit.svg'
import { useAppDispatch } from '../../store/redux-hooks/redux-hooks'
import {
  setClientForEdit,
  showModal,
} from '../../store/slices/contacts/contacts-slice'

type EditActionProps = {
  clientId: string
}

const EditAction: FC<EditActionProps> = ({ clientId }) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setClientForEdit(clientId))
    dispatch(showModal({ isShowModal: true, typeModal: 'edit' }))
  }

  return (
    <>
      <span>
        <EditSVG width={25} height={25} onClick={handleClick} />
      </span>
    </>
  )
}
export default EditAction
