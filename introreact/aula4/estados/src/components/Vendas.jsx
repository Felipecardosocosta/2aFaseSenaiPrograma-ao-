import React, { useState } from 'react'

function Vendas() {
const [precoCompra,setPrecoCompra]=useState("")

const[precoVenda,setPrecoVenda]= useState()

const taxa= {
    20: precoCompra * 1.45,

    21: precoCompra* 1.3
}



function Calcular(){

        if (precoCompra<20) {
            setPrecoVenda(taxa[20])
        }else{
            setPrecoVenda(taxa[21])
        }
    
   
}


  return (
    <div>
        <h2>Vendas</h2>

        <label htmlFor="">Preço de comprar
            <input type="number" value={precoCompra} onChange={(e)=> setPrecoCompra(e.target.value)} />
        </label>
        {!!precoVenda && <p>{precoVenda}</p>}
        <button onClick={Calcular} > Calcular</button>
    </div>
  )
}

export default Vendas