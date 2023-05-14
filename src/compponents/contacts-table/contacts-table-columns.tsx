import { ColumnDef } from '@tanstack/react-table'

import { FormCheck } from 'react-bootstrap'

import {
  COMPANY_KEYS,
  Company,
} from '../../store/slices/contacts/contacts-types'

import DeleteAction from '../delete-action/delete-action.component'
import EditAction from '../edit-action/edit-action.component'

export const tableColumns: ColumnDef<Company>[] = [
  {
    accessorKey: COMPANY_KEYS.clientId,
    header: () => (
      <div className='d-flex gap-2 text-nowrap'>
        <FormCheck type='checkbox' />
        <span>Client ID</span>
      </div>
    ),
  },
  {
    accessorKey: COMPANY_KEYS.clientName,
    header: () => <span>Client Name</span>,
  },

  {
    accessorKey: COMPANY_KEYS.trn_ppsn,
    header: () => <span>TRN/PPSN</span>,
  },

  {
    accessorKey: COMPANY_KEYS.yearEnd,
    header: () => <span>Year End</span>,
  },
  {
    accessorKey: COMPANY_KEYS.ard,
    header: () => <span>ARD</span>,
  },
  {
    accessorKey: COMPANY_KEYS.companyNumber,
    header: () => <span>Company Number</span>,
  },
  {
    accessorKey: COMPANY_KEYS.email,
    header: () => <span>Email</span>,
  },
  {
    accessorKey: COMPANY_KEYS.phoneNumber,
    header: () => <span>Phone Number</span>,
  },
  {
    accessorKey: COMPANY_KEYS.companyAddress,
    header: () => <span>Company Address</span>,
  },
  {
    id: 'actions',
    header: () => <span>Actions</span>,
    cell: props => {
      const clientId = props.row.getAllCells()[0].getValue() as string

      return (
        <span>
          <EditAction clientId={clientId} />
          <DeleteAction clientId={clientId} />
        </span>
      )
    },
  },
]
