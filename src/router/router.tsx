import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from '../App'
import HomePage from '../routes/home-page/home-page.component'
import Navigation from '../routes/navigation/navigation.component'
import Authentication from '../routes/authentication/authentication.component'
import SignIn from '../routes/sign-in/sign-in.component'
import SignUp from '../routes/sign-up/sign-up.component'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      {/* <Route index element={<App />} /> */}

      <Route path='/' element={<Authentication />}>
        <Route index element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Route>

      <Route path='/crm' element={<Navigation />}>
        <Route path='/crm' element={<HomePage />} />
      </Route>
    </Route>
  )
)
