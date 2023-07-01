import { FC } from 'react'

import { Table, flexRender } from '@tanstack/react-table'

import { Company } from '../../store/slices/contacts/contacts-types'

import RowMessageInTable from '../row-message-in-table/row-message-in-table.component'
import { useAppSelector } from '../../store/redux-hooks/redux-hooks'
import { selectClients } from '../../store/slices/contacts/contacts-selectors'

type TBodyProps = {
  table: Table<Company>
} & JSX.IntrinsicAttributes

const ContactsTableTbody: FC<TBodyProps> = ({ table }) => {
  const clients = useAppSelector(selectClients)

  return (
    <>
      {clients.length ? (
        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id}>
                      <span className='text-nowrap'>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
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
      ) : (
        <tbody>
          <RowMessageInTable text='No Clients' />
        </tbody>
      )}
    </>
  )
}

export default ContactsTableTbody
