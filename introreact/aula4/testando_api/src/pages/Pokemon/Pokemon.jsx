import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pesguisarPokemons from '../../db/pesguisarPokemons'

function Pokemon() {
    const {name}=useParams()
    const[pokemon, setPokemon]=useState()

    useEffect(()=>{

      async function  pesquisarPoke() {

        const pesquisa = await pesguisarPokemons(name)

        const dados = await pesquisa

        setPokemon(dados)

        
      }
      pesquisarPoke()

    },[])

  return (
    <div>
      
    </div>
  )
}

export default Pokemon
