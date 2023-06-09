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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Company>({
    defaultValues: {
      [COMPANY_KEYS.clientId]: '1234',
      [COMPANY_KEYS.clientName]: 'Name',
      [COMPANY_KEYS.trn_ppsn]: 1234,
      [COMPANY_KEYS.yearEnd]: '2023-05-14',
      [COMPANY_KEYS.ard]: '2023-05-14',
      [COMPANY_KEYS.companyNumber]: 1234,
      [COMPANY_KEYS.email]: 'example@mail.ru',
      [COMPANY_KEYS.phoneNumber]: 1234,
      [COMPANY_KEYS.companyAddress]: 'Company Address',
      // [COMPANY_KEYS.clientId]: '',
      // [COMPANY_KEYS.clientName]: '',
      // [COMPANY_KEYS.trn_ppsn]: '',
      // [COMPANY_KEYS.yearEnd]: '',
      // [COMPANY_KEYS.ard]: '',
      // [COMPANY_KEYS.companyNumber]: '',
      // [COMPANY_KEYS.email]: '',
      // [COMPANY_KEYS.phoneNumber]: '',
      // [COMPANY_KEYS.companyAddress]: '',
    },
  })

  const onSubmit: SubmitHandler<Company> = async data => {
    await dispatch(addClient(data))
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} id='modal-client-form'>
      <ModalInputField
        label='Client ID'
        name={COMPANY_KEYS.clientId}
        control={control}
        type='text'
        placeholder='1234'
        errors={errors}
        autoFocus
      />
      <ModalInputField
        label='Client Name'
        name={COMPANY_KEYS.clientName}
        control={control}
        type='text'
        placeholder='Name'
        errors={errors}
      />
      <ModalInputField
        label='TRN/PPSN'
        name={COMPANY_KEYS.trn_ppsn}
        control={control}
        type='number'
        placeholder='1234'
        errors={errors}
      />
      <ModalInputField
        label='Year End'
        name={COMPANY_KEYS.yearEnd}
        control={control}
        type='date'
        placeholder='date'
        errors={errors}
      />
      <ModalInputField
        label='ARD'
        name={COMPANY_KEYS.ard}
        control={control}
        type='date'
        placeholder='date'
        errors={errors}
      />
      <ModalInputField
        label='Company Number'
        name={COMPANY_KEYS.companyNumber}
        control={control}
        type='number'
        placeholder='1234'
        errors={errors}
      />
      <ModalInputField
        label='Email'
        name={COMPANY_KEYS.email}
        control={control}
        type='email'
        placeholder='example@mail.ru'
        errors={errors}
      />
      <ModalInputField
        label='Phone number'
        name={COMPANY_KEYS.phoneNumber}
        control={control}
        type='number'
        placeholder='1234'
        errors={errors}
      />
      <ModalInputField
        label='Company Address'
        name={COMPANY_KEYS.companyAddress}
        control={control}
        type='text'
        placeholder='Company Address'
        errors={errors}
      />
    </Form>
  )
}
export default ModalAddClientForm
