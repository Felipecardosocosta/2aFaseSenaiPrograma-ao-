import React from 'react'

function Buttons({nomes=[],estado,setEstado}) {
    const estilo = {
        'border-color': '#646cff'
    }

  return (
    <div className='buttons'>
      {nomes.map((nome,i)=> (<button key={i} onClick={()=> setEstado(nome)} >Oração: {nome}</button>)
        
)}
    </div>
  )
}

export default Buttons
