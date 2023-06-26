import { FC } from 'react'

import { Table, flexRender } from '@tanstack/react-table'

import {
  COMPANY_KEYS,
  Company,
} from '../../store/slices/contacts/contacts-types'

import { ReactComponent as SortDownSVG } from '../../assets/sort_down.svg'
import { ReactComponent as SortUpSVG } from '../../assets/sort_up.svg'

import { Col, FormCheck } from 'react-bootstrap'

type TheadProps = {
  table: Table<Company>
}

const headerStyles = 'd-flex gap-1 align-items-center flex-nowrap'

const ContactsTableThead: FC<TheadProps> = ({ table }) => {
  return (
    <thead>
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <th key={header.id} colSpan={header.colSpan}>
              {header.isPlaceholder ? null : (
                <div
                  {...{
                    className: header.column.getCanSort()
                      ? `${headerStyles} cursor-pointer user-select-none`
                      : headerStyles,
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  <Col>
                    <span>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </span>
                  </Col>

                  {{
                    asc: (
                      <Col>
                        <SortUpSVG height={20} width={20} />
                      </Col>
                    ),
                    desc: (
                      <Col>
                        <SortDownSVG height={20} width={20} />
                      </Col>
                    ),
                  }[header.column.getIsSorted() as string] ?? null}
                </div>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}
export default ContactsTableThead
