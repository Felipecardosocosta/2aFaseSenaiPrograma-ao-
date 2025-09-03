import React from 'react'
import { useParams } from 'react-router-dom'

function Pokemon() {
    const {name}=useParams()

  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

export default Pokemon
