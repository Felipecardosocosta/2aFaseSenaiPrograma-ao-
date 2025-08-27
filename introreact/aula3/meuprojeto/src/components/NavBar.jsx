import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <ol className='NavBar'>

            <li>

                <Link to={'/'} className='opcao' ><img src="./img/line-md--home.svg" alt="" />Home</Link>

            </li>

            <li>
                <a className='opcao'> <img src="./img/streamline-plump--pharmacy.svg" alt="" /> Produtos </a>

            </li>

            <li>
                <Link to={'/Fila'} className='opcao' ><img src="./img/fluent--people-queue-20-regular.svg" alt="" />Fila </Link>

            </li>


        </ol>
    )
}

export default NavBar