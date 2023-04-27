import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from '../App'
import Authentication from '../routes/authentication/authentication.component'
import SignIn from '../routes/sign-in/sign-in.component'
import SignUp from '../routes/sign-up/sign-up.component'
import RequireAuth from '../compponents/require-auth/require-auth.component'
import TotalContacts from '../routes/total-contacts/total-contacts.component'
import Calendar from '../routes/calendar/calendar.component'
import ProjectReport from '../routes/project-report/project-report.component'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route element={<RequireAuth />}> */}
      <Route path='/' element={<App />}>
        <Route path='total-contacts' element={<TotalContacts />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='project-report' element={<ProjectReport />} />
      </Route>
      {/* </Route> */}

      <Route path='auth' element={<Authentication />}>
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
      </Route>
    </Route>
  )
)
