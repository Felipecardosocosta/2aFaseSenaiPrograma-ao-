import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'


function NavBar() {
    return (
        <nav style={{ display: 'flex', gap: '10px', alignItems:'center', width:'100%', justifyContent:"center"}}>

            <Link to={"/"}>Home</Link>
            <Link to={"/produtos"}>Produtos</Link>
            <Link to={"/cadastro"}>Cadastro</Link>
            <NavLink className={({ isActive }) => isActive ? 'ativo' : 'NaoAtivo'} to='/' >Text</NavLink>

        </nav>
    )
}

export default NavBar