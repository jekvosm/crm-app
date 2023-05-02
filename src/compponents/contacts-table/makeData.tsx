import { Company } from '../../store/slices/contacts/contacts-slice'

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newCompany = (): Company => {
  return {
    clientId: '123123',
    clientName: 'Name',
    'trn-ppsn': 2423432,
    yearEnd: '12/12/12',
    ard: '13/13/13',
    companyNumber: 435345,
    email: 'sadsa@ShadowRoot.ru',
    phoneNumber: 9832313133,
    companyAddress: 'safa 2312 ds',
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Company[] => {
    const len = lens[depth]!
    return range(len).map((d): Company => {
      return newCompany()
    })
  }

  return makeDataLevel()
}
