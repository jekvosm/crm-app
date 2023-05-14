import { useForm, SubmitHandler } from 'react-hook-form'

import {
  useAppDispatch,
  useAppSelector,
} from '../../store/redux-hooks/redux-hooks'

import { updateClient } from '../../store/slices/contacts/contacts-slice'

import { selectClientForEdit } from '../../store/slices/contacts/contacts-selectors'

import ModalInputField from '../modal-input-field/modal-input-field.component'

import { Form } from 'react-bootstrap'

import {
  COMPANY_KEYS,
  Company,
} from '../../store/slices/contacts/contacts-types'

const ModalEditClientForm = () => {
  const dispatch = useAppDispatch()
  const clientForEdit = useAppSelector(selectClientForEdit) as Company

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Company>({
    defaultValues: clientForEdit,
  })

  const onSubmitEditForm: SubmitHandler<Company> = async data => {
    await dispatch(updateClient(data))
  }

  return (
    <Form onSubmit={handleSubmit(onSubmitEditForm)} id='modal-client-form'>
      <ModalInputField
        label='Client Name'
        name={COMPANY_KEYS.clientName}
        control={control}
        errors={errors}
        type='text'
        placeholder='Name'
      />
      <ModalInputField
        label='TRN/PPSN'
        name={COMPANY_KEYS.trn_ppsn}
        control={control}
        errors={errors}
        type='number'
        placeholder='1234'
      />
      <ModalInputField
        label='Year End'
        name={COMPANY_KEYS.yearEnd}
        control={control}
        errors={errors}
        type='date'
        placeholder='date'
      />
      <ModalInputField
        label='ARD'
        name={COMPANY_KEYS.ard}
        control={control}
        errors={errors}
        type='date'
        placeholder='date'
      />
      <ModalInputField
        label='Company Number'
        name={COMPANY_KEYS.companyNumber}
        control={control}
        errors={errors}
        type='number'
        placeholder='1234'
      />
      <ModalInputField
        label='Email'
        name={COMPANY_KEYS.email}
        control={control}
        errors={errors}
        type='email'
        placeholder='example@mail.ru'
      />
      <ModalInputField
        label='Phone number'
        name={COMPANY_KEYS.phoneNumber}
        control={control}
        errors={errors}
        type='tel:+55555555555'
        placeholder='1234'
      />
      <ModalInputField
        label='Company Address'
        name={COMPANY_KEYS.companyAddress}
        control={control}
        errors={errors}
        type='text'
        placeholder='Company Address'
      />
    </Form>
  )
}
export default ModalEditClientForm
