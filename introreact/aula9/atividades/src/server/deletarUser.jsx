import React from 'react'

async function deletarUser(id) {

    const respose = await fetch(`http://localhost:3000/user/${id}/delete`,{
        method:'DELETE'
       
    })

    const data = await respose.json()

    if (!data.modificado) {
        
        return false
    }
    
    return true


}

export default deletarUser
