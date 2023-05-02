import { useEffect } from 'react'

import { Table as BTable } from 'react-bootstrap'

import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { tableColumns } from './contacts-table-columns'
import ContactsTableThead from '../contacts-table-thead/contacts-table-thead.component'
import ContactsTableTbody from '../contacts-table-tbody/contacts-table-tbody.component'
import ContactsTablePagination from '../contacts-table-pagination/contacts-table-pagination.component'
import { fetchContacts } from '../../store/slices/contacts/contacts-slice'
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/redux-hooks/redux-hooks'
import { selectClients } from '../../store/slices/contacts/contacts-selectors'

const ContactsTable = () => {
  const dispatch = useAppDispatch()
  const clients = useAppSelector(selectClients)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [])

  const table = useReactTable({
    data: clients,
    columns: tableColumns,
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
