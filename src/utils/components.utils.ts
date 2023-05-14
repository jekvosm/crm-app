import { ValidateResult } from 'react-hook-form'
import { Company, CompanyKeys } from '../store/slices/contacts/contacts-types'

export const checkClientId = (
  fieldValue: string | number,
  fieldName: CompanyKeys,
  companys: Company[]
): ValidateResult | Promise<ValidateResult> => {
  const isExist = companys.find(company => company.clientId === fieldValue)
  if (isExist && fieldName === 'clientId') {
    return 'Client id exist!'
  }
}
