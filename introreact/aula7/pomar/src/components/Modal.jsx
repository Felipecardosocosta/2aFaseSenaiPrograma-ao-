import React, { useState } from 'react'
import controleForm from '../hooks/controleForm'
import Input from './Input'
import Seletor from './Seletor'
import Carrinho from './Carrinho'


function Modal() {
    const [value, alterarValue] = controleForm({ Quantidade: '', Fruta: '' })
    const [carrinho, setCarrinho] = useState([])
    const [pagina, setPagina]= useState('adcionar')


    const todosInput = [{
        name: 'Quantidade',
        tipo: "number",
        valor: value.Quantidade,
        funcao: alterarValue,
        id:1
    }
    ]
    const frutas = [
        {nome: 'Maçã', valor:1.5},
        {nome: 'Laranja', valor:2.0},
        {nome: 'Bergamota', valor:1.0},
        {nome: 'Maçã', valor:1.2},
        {nome: 'Pera', valor: 0.5}

    ]
    function salvar(){
        let valor = JSON.parse(value.seletor)
        let produto = {...valor, quantidade: value.Quantidade}
        setCarrinho([...carrinho,produto])
        console.table(carrinho);
    }
    return (
        <>
        {pagina === "adcionar"? <div className='modal' >
            
            {todosInput.map(input => (
                <Input
                key={input.id}
                    nome={input.name}
                    tipo={input.tipo}
                    valor={input.valor}
                    funcao={input.funcao}
                />)
            )}
            <Seletor valor={value.seletor} setValor={alterarValue} opcao={frutas}/>
            <button onClick={salvar} >Adicionar</button>

            <button onClick={()=> setPagina('carrinho')} >Abrir Carrinho</button>
            

        </div>
        : <div><Carrinho produtos={carrinho} setar={setCarrinho} setVoltar={setPagina} /> </div>}
        </>
    )
}

export default Modal