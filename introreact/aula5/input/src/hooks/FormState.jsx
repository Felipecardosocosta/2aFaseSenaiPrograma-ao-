import React, { useState } from 'react'

function FormState(valorInicial) {

    const[valores, setValores]=useState(valorInicial)

    function mudarvalores(e){

        setValores({...valores , [e.target.name]: e.target.value})

    }



  return [valores, mudarvalores]
}

export default FormState