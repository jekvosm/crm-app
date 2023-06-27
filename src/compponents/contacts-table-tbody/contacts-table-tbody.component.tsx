import { FC } from 'react'

import { Table, flexRender } from '@tanstack/react-table'

import { Company } from '../../store/slices/contacts/contacts-types'

import RowMessageInTable from '../row-message-in-table/row-message-in-table.component'

type TheadProps = {
  table: Table<Company>
}

const ContactsTableTbody: FC<TheadProps> = ({ table }) => {
  return (
    <tbody>
      {table.getRowModel().rows.length ? (
        table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => {
              return (
                <td key={cell.id}>
                  <span className='text-nowrap'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </span>
                </td>
              )
            })}
          </tr>
        ))
      ) : (
        <RowMessageInTable text='No Matches Found' />
      )}
    </tbody>
  )
}
export default ContactsTableTbody
