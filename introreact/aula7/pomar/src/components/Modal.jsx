import React from 'react'
import controleForm from '../hooks/controleForm'
import Input from './Input'


function Modal() {
    const [value, alterarValue] = controleForm({ Quanditade: '', Fruta: '' })

    const todosInput = [{
        name: 'Quantidade',
        tipo: "number",
        valor: value.Quatidade,
        funcao: alterarValue
    }, {
        name: 'Fruta',
        tipo: "text",
        valor: value.Fruta,
        funcao: alterarValue

    }
    ]
    return (
        <div className='modal' >
            {todosInput.map(input => (
                <Input
                    nome={input.name}
                    tipo={input.tipo}
                    valor={input.valor}
                    funcao={input.funcao}
                />)

            )}





        </div>
    )
}

export default Modal