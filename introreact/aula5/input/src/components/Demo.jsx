import React, { useEffect, useState } from 'react'
import FormState from '../hooks/FormState'

function Demo() {
    const[inputUsername,setInputUsername]= useState('')

    const[valores, mudarValores]=FormState({name:"", password:'' } )
    useEffect(()=>{

        console.log(valores);
        
    },[valores])

    function logar(){
        alert(`${valores.name} ${valores.password}`)

    }

  return (
    <div>
        <h2>Demo</h2>
        <label htmlFor="">Username: </label>
        <input type="text" 
        name='name'
        value={valores.name}
        onChange={mudarValores}
        />

        <label htmlFor="">Senha:  </label>
        <input type= "password" 
        name='password'
        value={valores.password}
        onChange={mudarValores}/>

        <button onClick={logar} >Logar</button>
        
    </div>

  )
}

export default Demo