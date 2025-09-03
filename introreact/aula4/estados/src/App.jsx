import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Vendas from './components/Vendas'

function App() {
  
const [estado, setEstado]= useState('')

const [aparecer, setAparecer]=useState(false)

const [numero, setNumero]= useState(0)

const [userName, setUserName]= useState("ola")

useEffect(()=>{

  numero >= 10 ?  setAparecer(true): setAparecer(false)


},[numero])
  return (
    <>
    <input type="text" name="nome" id="" value={userName} onChange={(e)=> setUserName(e.target.value) }/>
      <p className='user' >
        {userName}
        
        </p>
      <h1>Estado{estado}</h1>
      {!aparecer && <input type="text" onChange={(e)=> setEstado(e.target.value)} />}
      <input type="number" name="numero" value={numero} onChange={(e)=> setNumero(e.target.value) } />
      <button onClick={()=> setNumero(numero+1) } >+</button>
      <button onClick={()=> setNumero(numero - 1) } >-</button>

    <Vendas/>

    </>
  )
}

export default App
