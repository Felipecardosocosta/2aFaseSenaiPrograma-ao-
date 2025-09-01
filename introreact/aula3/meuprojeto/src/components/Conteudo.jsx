import React from 'react'
import './Conteudo.css'

function Conteudo({conteudo, children}) {

  return (
    <div className='conteudo'>
        {conteudo}
        <div className='children'>
        {children}

        </div>
    </div>
  )
}

export default Conteudo
