export enum COMPANY_KEYS {
  clientId = 'clientId',
  clientName = 'clientName',
  trn_ppsn = 'trn_ppsn',
  yearEnd = 'yearEnd',
  ard = 'ard',
  companyNumber = 'companyNumber',
  email = 'email',
  phoneNumber = 'phoneNumber',
  companyAddress = 'companyAddress',
}

export type Company = {
  [COMPANY_KEYS.clientId]: string
  [COMPANY_KEYS.clientName]: string
  [COMPANY_KEYS.trn_ppsn]: number | string
  [COMPANY_KEYS.yearEnd]: string
  [COMPANY_KEYS.ard]: string
  [COMPANY_KEYS.companyNumber]: number | string
  [COMPANY_KEYS.email]: string
  [COMPANY_KEYS.phoneNumber]: number | string
  [COMPANY_KEYS.companyAddress]: string
}

export type CompanyKeys = keyof Company

export type ContactsState = {
  clients: Company[]
  clientForEdit: Company | null
  statusGetClients: 'idle' | 'pending' | 'succeeded' | 'failed'
  statusAddClient: 'idle' | 'pending' | 'succeeded' | 'failed'
  statusUpdateClient: 'idle' | 'pending' | 'succeeded' | 'failed'
  statusDeleteClient: 'idle' | 'pending' | 'succeeded' | 'failed'
  errorMessage: string
  modal: Modal
  globalFilter: string
}

export type Modal = {
  isShowModal: boolean
  typeModal: TypeModal
}
export type ModalPayload = {
  isShowModal: boolean
  typeModal?: TypeModal
}

export type TypeModal = 'add' | 'edit' | 'delete'
