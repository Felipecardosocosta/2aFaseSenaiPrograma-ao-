import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './router/routes.jsx'
import { RouterProvider } from 'react-router-dom'
import GlobalContextProvider from './contexts/GlobalContext.jsx'



createRoot(document.getElementById('root')).render(
  <GlobalContextProvider >
    <RouterProvider router={router} >
      
  </RouterProvider>

  </GlobalContextProvider>

  ,
)
