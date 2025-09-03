import { useState } from 'react'
import { Link, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from './pages/Pokemon/Pokemon'
import router from './router/router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
