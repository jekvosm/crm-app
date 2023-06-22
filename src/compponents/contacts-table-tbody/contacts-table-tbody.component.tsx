import { FC } from 'react'

import { Table, flexRender } from '@tanstack/react-table'

import { FormCheck } from 'react-bootstrap'

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
                  <div className='d-flex gap-2 text-nowrap'>
                    {cell.id.includes('clientId') ? (
                      <FormCheck type='checkbox' />
                    ) : null}

                    <span>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </span>
                  </div>
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
