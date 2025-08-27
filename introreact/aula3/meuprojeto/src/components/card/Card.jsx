import React from 'react'
import './Card.css'


function Card({titulo,img,categoria,numero}) {


  return (
    <div className='card' key={numero}>
        <h1 className='titulo' >{titulo}</h1>
        <h3 className='categoria' >Categoria: {categoria}</h3>
        <div className='cont-img' > <img className='img-card' src={img} alt="" /> </div>
      
    </div>
  )
}

export default Card
