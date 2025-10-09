import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <ol>
                <li><Link to={'/'} ><span>Home</span></Link></li>
                <li><Link to={'/produtos/borracharia'} ><span>Borracharia</span></Link></li>
                <li><Link to={'/produtos/sorveteria'} ><span>Sorveteria</span> </Link></li>
                <li><Link to={'/produtos/bar'} ><span>Bar</span> </Link></li>
            </ol>
        </nav>
    )
}

export default NavBar