import { useEffect, useRef } from 'react'
import type { FC } from 'react'

import { FormCheck, FormCheckProps } from 'react-bootstrap'

type CheckboxProps = {
  indeterminate?: boolean
} & FormCheckProps

const ContactsTableCheckbox: FC<CheckboxProps> = ({
  indeterminate,
  className = '',
  ...rest
}) => {
  const ref = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return (
    <FormCheck
      type='checkbox'
      ref={ref}
      className={className + ' cursor-pointer'}
      {...rest}
    />
  )
}

export default ContactsTableCheckbox
