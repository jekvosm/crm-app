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

export type CompanyKeys = keyof typeof COMPANY_KEYS

export type Company = {
  [COMPANY_KEYS.clientId]: string
  [COMPANY_KEYS.clientName]: string
  [COMPANY_KEYS.trn_ppsn]: number
  [COMPANY_KEYS.yearEnd]: string
  [COMPANY_KEYS.ard]: string
  [COMPANY_KEYS.companyNumber]: number
  [COMPANY_KEYS.email]: string
  [COMPANY_KEYS.phoneNumber]: number
  [COMPANY_KEYS.companyAddress]: string
}

export type ContactsState = {
  clients: Company[]
  statusGetClients: 'idle' | 'pending' | 'succeeded' | 'failed'
  statusAddClient: 'idle' | 'pending' | 'succeeded' | 'failed'
  statusDeleteClient: 'idle' | 'pending' | 'succeeded' | 'failed'
}
