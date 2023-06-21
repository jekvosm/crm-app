import { useEffect, useState } from 'react'

import {
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { fetchContacts } from '../../store/slices/contacts/contacts-slice'
import {
  selectClients,
  selectGlobalFilter,
} from '../../store/slices/contacts/contacts-selectors'
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/redux-hooks/redux-hooks'

import { tableColumns } from './contacts-table-columns'
import ContactsTableThead from '../contacts-table-thead/contacts-table-thead.component'
import ContactsTableTbody from '../contacts-table-tbody/contacts-table-tbody.component'
import ContactsTablePagination from '../contacts-table-pagination/contacts-table-pagination.component'

import { Table as BTable } from 'react-bootstrap'

const ContactsTable = () => {
  const dispatch = useAppDispatch()
  const clients = useAppSelector(selectClients)
  const globalFilter = useAppSelector(selectGlobalFilter)

  const [sorting, setSorting] = useState<SortingState>([])

  const [filter, setFilter] = useState(globalFilter)

  useEffect(() => {
    dispatch(fetchContacts())
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    setFilter(globalFilter)
  }, [globalFilter])

  const table = useReactTable({
    data: clients,
    columns: tableColumns,
    state: {
      sorting,
      globalFilter: filter,
    },
    onGlobalFilterChange: setFilter,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 9,
      },
    },
  })

  return (
    <div className='p-3 d-flex flex-column justify-content-between flex-shrink-1'>
      <BTable striped bordered hover responsive>
        <ContactsTableThead table={table} />
        {clients.length ? (
          <ContactsTableTbody table={table} />
        ) : (
          <tbody>
            <tr>
              <td colSpan={10} align='center' className='fs-3'>
                no clients
              </td>
            </tr>
          </tbody>
        )}
      </BTable>
      <ContactsTablePagination table={table} />
    </div>
  )
}
export default ContactsTable
