import React, { useState } from 'react'

function formHooks(valoresInicial) {

    const [inputs, setInputs] = useState(valoresInicial)


    function mudarValores(e) {
        
        setInputs({...inputs, [e.target.name]: e.target.value})
        
    }


    return [inputs,mudarValores]

}
  

export default formHooks
