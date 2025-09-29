import React from 'react'
import './Pagina.css'

function Pagina({conteudo=[]}) {
  return (
    <div className='divConteudo'>
      {conteudo.map(texto=> (<p key={texto}>{texto}</p>))}
    </div>
  )
}

export default Pagina
