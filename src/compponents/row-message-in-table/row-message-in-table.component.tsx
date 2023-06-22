import { FC } from 'react'

type RowMessageProps = {
  text: string
}

const RowMessageInTable: FC<RowMessageProps> = ({ text }) => {
  return (
    <tr>
      <td colSpan={10} align='center' className='fs-3'>
        {text}
      </td>
    </tr>
  )
}
export default RowMessageInTable
