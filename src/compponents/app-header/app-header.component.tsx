import UserInfo from '../user-info/user-info.component'
import SearchBar from '../search-bar/search-bar.component'

const AppHeader = () => {
  return (
    <header className='d-flex justify-content-between mb-4 pt-1'>
      <SearchBar />
      <UserInfo />
    </header>
  )
}
export default AppHeader
