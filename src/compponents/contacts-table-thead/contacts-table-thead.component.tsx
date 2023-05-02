import { FC } from 'react'

import { Table, flexRender } from '@tanstack/react-table'

import { Company } from '../contacts-table/makeData'

type TheadProps = {
  table: Table<Company>
}

const ContactsTableThead: FC<TheadProps> = ({ table }) => {
  return (
    <thead>
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <th key={header.id} colSpan={header.colSpan}>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}
export default ContactsTableThead
