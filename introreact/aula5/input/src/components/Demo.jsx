import React, { useEffect, useState } from 'react'
import formState from '../hooks/formState'
import './Demo.css'

function Demo() {
    const[inputUsername,setInputUsername]= useState('')

    const[valores, mudarValores]=formState({name:"", password:'' } )
   

    function logar(){
        alert(`${valores.name} ${valores.password}`)

    }
    function logar2(e) {
        if(e.key === 'Enter'){
            logar()
        }
        
    }

  return (
    <div className='cont' >
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
        onChange={mudarValores}
        onKeyDown={logar2}/>

        <button onClick={logar} >Logar</button>
        
    </div>

  )
}

export default Demo