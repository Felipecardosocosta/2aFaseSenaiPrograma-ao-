import React from 'react'
import './ConteinerCor.css'

function ConteinerCor({tamanho,tipo}) {

  const definindo = {
    width: `${tamanho}%`
  }

  return (
    <div className='cont-Pricipal'>

      

      <div className='so-para-ajuste'>
        <p className='tipo'>{tipo} :</p>
        <p className='numero'>{tamanho}</p>
        </div>
        
        
        <div className='cont-base'> <div className='cont-abilidade' style={definindo} > </div>
      
      
      </div>
    </div>
  )
}

export default ConteinerCor
