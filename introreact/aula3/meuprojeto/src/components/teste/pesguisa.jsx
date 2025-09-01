import React from 'react'

const url = 'https://pokeapi.co/api/v2/pokemon'

const pesguisa = async (name)=> {

    try{
    
    const urlP = name ? `${url}/${name}`: url

    console.log(urlP);
    

    const resposta = await fetch(urlP)

    const tratamento = await resposta.json()

    return tratamento

    } catch(err){
        console.log(err)
        return null

    }

 
}

export default pesguisa
