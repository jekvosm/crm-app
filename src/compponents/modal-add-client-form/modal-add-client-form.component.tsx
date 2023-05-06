import { useForm, SubmitHandler } from 'react-hook-form'

import { useAppDispatch } from '../../store/redux-hooks/redux-hooks'

import { addClient } from '../../store/slices/contacts/contacts-slice'

import ModalInputField from '../modal-input-field/modal-input-field.component'

import { Form } from 'react-bootstrap'

import {
  COMPANY_KEYS,
  Company,
} from '../../store/slices/contacts/contacts-types'

const ModalAddClientForm = () => {
  const dispatch = useAppDispatch()

  const { control, handleSubmit } = useForm<Company>({
    defaultValues: {
      [COMPANY_KEYS.clientId]: '1234',
      [COMPANY_KEYS.clientName]: 'Name',
      [COMPANY_KEYS.trn_ppsn]: 2123,
      [COMPANY_KEYS.yearEnd]: '2023-04-05',
      [COMPANY_KEYS.ard]: '2023-04-05',
      [COMPANY_KEYS.companyNumber]: 3244,
      [COMPANY_KEYS.email]: 'example@mail.ru',
      [COMPANY_KEYS.phoneNumber]: 55555555555,
      [COMPANY_KEYS.companyAddress]: 'Name Street',
    },
  })

  const onSubmit: SubmitHandler<Company> = async data => {
    await dispatch(addClient(data))
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} id='modal-add-client-form'>
      <ModalInputField
        label='Client ID'
        name='clientId'
        control={control}
        type='text'
        placeholder='1234'
        autoFocus
      />
      <ModalInputField
        label='Client Name'
        name='clientName'
        control={control}
        type='text'
        placeholder='Name'
      />
      <ModalInputField
        label='TRN/PPSN'
        name='trn_ppsn'
        control={control}
        type='number'
        placeholder='1234'
      />
      <ModalInputField
        label='Year End'
        name='yearEnd'
        control={control}
        type='date'
        placeholder='date'
      />
      <ModalInputField
        label='ARD'
        name='ard'
        control={control}
        type='date'
        placeholder='date'
      />
      <ModalInputField
        label='Company Number'
        name='companyNumber'
        control={control}
        type='number'
        placeholder='1234'
      />
      <ModalInputField
        label='Email'
        name='email'
        control={control}
        type='email'
        placeholder='example@mail.ru'
      />
      <ModalInputField
        label='Phone number'
        name='phoneNumber'
        control={control}
        type='tel:+55555555555'
        placeholder='1234'
      />
      <ModalInputField
        label='Company Address'
        name='companyAddress'
        control={control}
        type='text'
        placeholder='Company Address'
      />
    </Form>
  )
}
export default ModalAddClientForm
