import React from 'react'

async function modificarUser(usuarioModificado) {

    const response = await fetch(`http://localhost:3000/user/${usuarioModificado.id}/modify`,{
        method:"PUT",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(usuarioModificado)

    })
    const data = await response.json()

    if (!data.modificado) {
        
        return false
    }

    return true
  
}

export default modificarUser
