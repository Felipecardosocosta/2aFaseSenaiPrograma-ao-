import React from 'react'
import './Card.css'

function Card({nome,idade,tamanho}) {
  return (
    <div className='cont-card'>
        <h2 > <span className='nome'>{nome}</span></h2>
        <p className='idade' >Idade: {idade}</p>
        <p className='tamanho'>Tamanho: {tamanho}cm </p>


    </div>
  )
}

export default Card