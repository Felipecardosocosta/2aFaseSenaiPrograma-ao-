import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [count, setCount] = useState('')

  return (
    <>
      <Modal />
    </>
  )
}

export default App
