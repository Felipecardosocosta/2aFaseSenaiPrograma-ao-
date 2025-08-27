import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <ol className='NavBar'>

            <li>

                <a className='opcao' ><img src="./img/line-md--home.svg" alt="" />Home</a>

            </li>

            <li>
                <a className='opcao'> <img src="./img/streamline-plump--pharmacy.svg" alt="" /> Produtos </a>

            </li>

            <li>
                <a className='opcao' ><img src="./img/fluent--people-queue-20-regular.svg" alt="" />Fila </a>

            </li>


        </ol>
    )
}

export default NavBar