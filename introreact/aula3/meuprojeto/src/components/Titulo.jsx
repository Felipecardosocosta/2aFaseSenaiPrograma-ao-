import React from 'react'
import './Titulo.css'

const Titulo = ({ titulo }) => {
    return (
        <div className='titulo' > <h1><img className='imagem' src="./img/farmarcia-logo-pq.webp" alt="" />{titulo}</h1></div>
    )
}

export default Titulo