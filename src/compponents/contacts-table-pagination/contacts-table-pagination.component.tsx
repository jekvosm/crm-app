import { FC } from 'react'

import { Table } from '@tanstack/react-table'
import { Company } from '../../store/slices/contacts/contacts-slice'

type TheadProps = {
  table: Table<Company>
}

const ContactsTablePagination: FC<TheadProps> = ({ table }) => {
  return (
    <div className='d-flex gap-2 justify-content-end'>
      <button
        className='border rounded p-1'
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        {'<<'}
      </button>
      <button
        className='border rounded p-1'
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {'<'}
      </button>
      <button
        className='border rounded p-1'
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {'>'}
      </button>
      <button
        className='border rounded p-1'
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        {'>>'}
      </button>
      <span className='d-flex align-items-center gap-1'>
        <div className='d-inline'>Page</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount() ? table.getPageCount() : 1}
        </strong>
      </span>
      <span className='d-flex align-items-center gap-1'>
        | Go to page:
        <input
          type='number'
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            table.setPageIndex(page)
          }}
          className='border p-1 rounded w-16'
        />
      </span>
    </div>
  )
}
export default ContactsTablePagination
