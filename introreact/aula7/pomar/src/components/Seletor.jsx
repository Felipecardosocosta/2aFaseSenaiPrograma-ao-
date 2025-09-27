import React from 'react'

function Seletor({ opcao,valor,setValor }) {
    return (
        <select name="seletor" value={valor} onChange={setValor} id="">
            <option key={'seletor'} value={false}>Escolha uma Fruta</option>
            {opcao.map((fruta,ind)=>(
              <option key={ind} value={JSON.stringify(fruta)} >{fruta.nome}</option>  
            )

            )
            }
        </select>
    )
}

export default Seletor
