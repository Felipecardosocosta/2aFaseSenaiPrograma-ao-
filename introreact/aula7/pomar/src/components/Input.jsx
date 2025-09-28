import React from 'react'

function Input({ nome, tipo, valor, funcao }) {

  return (

    <label htmlFor="#">{nome}:
      <input type={tipo} value={valor} onChange={funcao} name={nome} />
    </label>

  )
}

export default Input