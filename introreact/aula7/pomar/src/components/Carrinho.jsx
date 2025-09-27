import React from 'react'

function Carrinho({produtos,setar,setVoltar}) {
  
    

    return (
        <div className='cont-carrinho'>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Fruta</th>
                        <th>Valor</th>
                        <th>Quantidade</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {!!produtos.length && produtos.map((fruta, ind) => (
                       
                        <tr key={ind}>
                            <td>{fruta.nome}</td>
                            <td>R$: {fruta.valor}</td>
                            <td>{fruta.quantidade}</td>
                            <td><button onClick={()=>{setar(produtos.filter((nao,i)=> i!==ind   ))}}>X</button></td>
                        </tr>
                    ))}

                </tbody>

            </table>

            <h2>total a pagar é de R$: {produtos.reduce((acc,pro)=> acc + pro.valor*pro.quantidade ,0 )}</h2>

            <button onClick={()=> setVoltar("adcionar") }>Voltar</button>

        </div>
    )
}

export default Carrinho
