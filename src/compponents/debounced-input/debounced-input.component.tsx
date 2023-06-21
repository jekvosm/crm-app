import { useState, useEffect, FC } from 'react'

import { Form, FormControlProps } from 'react-bootstrap'

type DebouncedInputProps = {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<FormControlProps, 'onChange'>

const DebouncedInput: FC<DebouncedInputProps> = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <Form.Control
      value={value}
      onChange={e => setValue(e.target.value)}
      {...props}
    />
  )
}

export default DebouncedInput
