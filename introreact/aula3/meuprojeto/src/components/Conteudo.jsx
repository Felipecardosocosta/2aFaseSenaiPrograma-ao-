import React from 'react'
import './Conteudo.css'

function Conteudo({conteudo, children}) {

  return (
    <div className='conteudo'>
        {conteudo}
        {children}
    </div>
  )
}

export default Conteudo
