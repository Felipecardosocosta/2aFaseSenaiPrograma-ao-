import React from 'react'
import NavBar from '../components/NavBar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Produtos() {
    const { usuario, setUsuario } = useContext(GlobalContext)
    return (
        <div>
            <NavBar />
            <p>
            Produtos
            </p>
            {usuario}
         

        </div>
    )
}

export default Produtos