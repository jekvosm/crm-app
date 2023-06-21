import {
  useAppDispatch,
  useAppSelector,
} from '../../store/redux-hooks/redux-hooks'

import { setGlobalFilter } from '../../store/slices/contacts/contacts-slice'

import { selectGlobalFilter } from '../../store/slices/contacts/contacts-selectors'

import DebouncedInput from '../debounced-input/debounced-input.component'

const SearchBar = () => {
  const dispatch = useAppDispatch()
  const globalFilter = useAppSelector(selectGlobalFilter)

  return (
    <div>
      <DebouncedInput
        value={globalFilter ?? ''}
        onChange={value => dispatch(setGlobalFilter(value))}
        type='search'
        placeholder='Search in the table'
        className='me-2'
      />
    </div>
  )
}
export default SearchBar
