import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'

import { Provider as StoreProvider } from 'react-redux'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
)
