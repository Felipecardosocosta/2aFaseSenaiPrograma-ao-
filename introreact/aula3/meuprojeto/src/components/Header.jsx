import React from 'react'
import NavBar from './NavBar'
import './Header.css'
import Titulo from './Titulo'

const Header = () => {
    return (
        <div className='Header'>
            <Titulo titulo={"Farmácia"} />
            <NavBar />

        </div>
    )
}

export default Header