import { ColumnDef } from '@tanstack/react-table'

import {
  COMPANY_KEYS,
  Company,
} from '../../store/slices/contacts/contacts-types'

import DeleteAction from '../delete-action/delete-action.component'
import EditAction from '../edit-action/edit-action.component'

export const tableColumns: ColumnDef<Company>[] = [
  {
    accessorKey: COMPANY_KEYS.clientId,
    header: 'Client ID',
    sortingFn: 'text',
  },
  {
    accessorKey: COMPANY_KEYS.clientName,
    header: 'Client Name',
    sortingFn: 'text',
  },

  {
    accessorKey: COMPANY_KEYS.trn_ppsn,
    header: 'TRN/PPSN',
    sortingFn: 'alphanumeric',
  },

  {
    accessorKey: COMPANY_KEYS.yearEnd,
    header: 'Year End',
    sortingFn: 'datetime',
  },
  {
    accessorKey: COMPANY_KEYS.ard,
    header: 'ARD',
    sortingFn: 'datetime',
  },
  {
    accessorKey: COMPANY_KEYS.companyNumber,
    header: 'Company Number',
    sortingFn: 'alphanumeric',
  },
  {
    accessorKey: COMPANY_KEYS.email,
    header: 'Email',
    enableSorting: false,
  },
  {
    accessorKey: COMPANY_KEYS.phoneNumber,
    header: 'Phone Number',
    enableSorting: false,
  },
  {
    accessorKey: COMPANY_KEYS.companyAddress,
    header: 'Company Address',
    enableSorting: false,
  },
  {
    id: 'actions',
    header: 'Actions',
    enableSorting: false,
    cell: props => {
      const clientId = props.row.getAllCells()[0].getValue() as string

      return (
        <div className='d-flex gap-2'>
          <EditAction clientId={clientId} />
          <DeleteAction clientId={clientId} />
        </div>
      )
    },
  },
]
