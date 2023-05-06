import { FC } from 'react'

import { Controller, Control } from 'react-hook-form'

import {
  Company,
  CompanyKeys,
} from '../../store/slices/contacts/contacts-types'

import { Col, Form, FormControlProps, Row } from 'react-bootstrap'

type InputFieldProps = {
  label: string
  name: CompanyKeys
  control: Control<Company>
  type: string
  placeholder: string
} & FormControlProps

const ModalInputField: FC<InputFieldProps> = props => {
  const { label, name, control, type, placeholder, ...otherProps } = props
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
                required
              />
            )}
          />
        </Col>
      </Row>
    </Form.Group>
  )
}
export default ModalInputField
