import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={routes} />
    </AuthProviders>
  </StrictMode>,
)
