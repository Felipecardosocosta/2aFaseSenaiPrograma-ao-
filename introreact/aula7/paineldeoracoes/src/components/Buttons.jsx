import React from 'react'

function Buttons({ nomes = [], estado, setEstado }) {
    const estilo = {
        'border-color': '#646cff'
    }

    return (
        <div className='buttons'>
            {nomes.map((nome, i) => {
                if (nome === estado)
                    return (<button key={i} style={estilo} onClick={() => setEstado(nome)} >Oração: {nome}</button>)
                else return (<button key={i} onClick={() => setEstado(nome)} >Oração: {nome}</button>)
            }



            )}
        </div>
    )
}

export default Buttons
