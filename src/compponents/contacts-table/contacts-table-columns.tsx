import { ColumnDef } from '@tanstack/react-table'

import { ReactComponent as EditSVG } from '../../assets/edit.svg'
import { ReactComponent as DeleteSVG } from '../../assets/delete.svg'
import { FormCheck } from 'react-bootstrap'
import { Company } from '../../store/slices/contacts/contacts-slice'

export const tableColumns: ColumnDef<Company>[] = [
  {
    accessorKey: 'clientId',
    header: () => (
      <div className='d-flex gap-2 text-nowrap'>
        <FormCheck type='checkbox' />
        <span>Client ID</span>
      </div>
    ),
  },
  {
    accessorKey: 'clientName',
    header: () => <span>Client Name</span>,
  },

  {
    accessorKey: 'trn-ppsn',
    header: () => <span>trn/ppsn</span>,
  },

  {
    accessorKey: 'yearEnd',
    header: () => <span>Year End</span>,
  },
  {
    accessorKey: 'ard',
    header: () => <span>ARD</span>,
  },
  {
    accessorKey: 'companyNumber',
    header: () => <span>Company Number</span>,
  },
  {
    accessorKey: 'email',
    header: () => <span>Email</span>,
  },
  {
    accessorKey: 'phoneNumber',
    header: () => <span>Phone Number</span>,
  },
  {
    accessorKey: 'companyAddress',
    header: () => <span>Company Address</span>,
  },
  {
    id: 'actions',
    header: () => <span>Actions</span>,
    cell: () => (
      <span>
        <EditSVG width={25} height={25} />
        <DeleteSVG width={25} height={25} />
      </span>
    ),
  },
]
