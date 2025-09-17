import React from 'react'
import './Abas.css'

function Abas({children,titulo}) {
  return (
    <div>
        <button className='opçao'>{titulo}</button>
      <div className='filhos'>
        {children}
      </div>
    </div>
  )
}

export default Abas
