import React from 'react'

async function criarUsers(novoUsuario) {
    
    const respose =await fetch('http://localhost:3000/user20%insert/',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(novoUsuario)
    })

    return respose.json()

    

}

export default criarUsers
