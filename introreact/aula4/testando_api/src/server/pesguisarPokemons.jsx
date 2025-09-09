import React from 'react'

 const  pesguisarPokemons  = async (name) => {
     try{
        const url= "https://pokeapi.co/api/v2/pokemon/"
        const pokemon = name? `${url}/${name}`: url
        const pesguisa = await fetch(pokemon)
        const dados =  await pesguisa.json()

        return dados

    }catch(err){
        console.log('deu erro' + err)
        return null
    }

    
}

export default pesguisarPokemons