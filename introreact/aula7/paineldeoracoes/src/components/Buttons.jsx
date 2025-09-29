import React from 'react'

function Buttons({nomes=[],estado,setEstado}) {
  return (
    <div className='buttons'>
      {nomes.map(nome=> (<button onClick={()=> setEstado(nome)} >Oração: {nome}</button>))}
    </div>
  )
}

export default Buttons
