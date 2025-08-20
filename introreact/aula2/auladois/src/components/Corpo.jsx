import { useState } from 'react'
import './Corpo.css'
import Textao from './Textao'
import Texto from './Texto'
import Titulo1 from './Titulo1'
import Titulo2 from './Titulo2'

function Corpo() {
  const [nome, setNome]= useState([])
  function logar(){
    let usuario = prompt("digite seu nome")


    setNome(prev=> [...prev,usuario])
  }
 
  return (
    <div className='corpo-container'>
      <Titulo1 />
      <Titulo2 texto={nome} />
      <Texto texto={"Ola"}/>
      <Textao texto={"Ola 2.0"}/>
      <img className='imagemReact' src='./img/livros.png' alt="minha img" />

      <button onClick={logar}  >Login Fake</button>
    </div>
  )
}

export default Corpo