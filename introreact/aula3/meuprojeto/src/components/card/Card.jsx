import React from 'react'
import './Card.css'


function Card({titulo,img,categoria,numero,children}) {


  return (
    <div className='card' key={numero}>
        <h1 className='titulo' >{titulo}</h1>
        <h3 className='categoria' >{categoria}</h3>
        <div className='cont-img' > <img className='img-card' src={img} alt="" /> </div>
        {children}
    </div>
  )
}

export default Card
