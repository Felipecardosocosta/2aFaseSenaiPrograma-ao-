import React from 'react'
import './ConteinerCor.css'

function ConteinerCor({tamanho,tipo,numero,key}) {

  const definindo = {
    width: `${tamanho}%`
  }

  return (
    <div className='cont-Pricipal' key={key}>

      

      <div className='so-para-ajuste'> 
        
        <p className='tipo'>{tipo} :</p>
        <p className='numero'>{numero}</p>
        
        </div> 
        
        
        <div className='cont-base'> <div className='cont-abilidade'style={definindo} > </div>
      
      
      </div>
    </div>
  )
}

export default ConteinerCor
