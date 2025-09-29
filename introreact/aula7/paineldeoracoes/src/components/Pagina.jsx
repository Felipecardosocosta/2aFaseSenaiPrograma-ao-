import React from 'react'

function Pagina({conteudo=[]}) {
  return (
    <div>
      {conteudo.map(texto=> (<p>{texto}</p>))}
    </div>
  )
}

export default Pagina
