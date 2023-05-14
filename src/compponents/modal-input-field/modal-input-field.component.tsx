import { FC } from 'react'

import { Controller, Control, FieldErrors } from 'react-hook-form'

import {
  Company,
  CompanyKeys,
} from '../../store/slices/contacts/contacts-types'

import { Alert, Col, Form, FormControlProps, Row } from 'react-bootstrap'
import { ErrorMessage } from '@hookform/error-message'
import { checkClientId } from '../../utils/components.utils'
import { useAppSelector } from '../../store/redux-hooks/redux-hooks'
import { selectClients } from '../../store/slices/contacts/contacts-selectors'

type InputFieldProps = {
  label: string
  name: CompanyKeys
  control: Control<Company>
  type: string
  placeholder: string
  errors: FieldErrors<Company>
} & FormControlProps

const ModalInputField: FC<InputFieldProps> = props => {
  const { errors, label, name, control, type, placeholder, ...otherProps } =
    props

  const companys = useAppSelector(selectClients)

  return (
    <Form.Group className='mb-3' controlId={name}>
      <Row>
        <Col className='align-bottom'>
          <Form.Label>{label}</Form.Label>
        </Col>
        <Col sm={8}>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <Form.Control
                {...field}
                type={type}
                placeholder={placeholder}
                {...otherProps}
              />
            )}
            rules={{
              required: 'This is required!',
              validate: fieldValue => checkClientId(fieldValue, name, companys),
            }}
          />

          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <Alert variant='danger' className='d-inline-block p-1 m-0 mt-2'>
                {message}
              </Alert>
            )}
          />
        </Col>
      </Row>
    </Form.Group>
  )
}
export default ModalInputField
