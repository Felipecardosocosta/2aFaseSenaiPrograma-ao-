import React from 'react'

function Input({ nome, tipo, valor, funcao }) {

  return (
    <div className='cont-labelInp'>
      <label htmlFor="#">{nome}: </label>
      <input type={tipo} value={valor} onChange={funcao} name={nome} />

    </div>
  )
}

export default Input