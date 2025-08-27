import React from 'react'
import NavBar from '../components/NavBar'
import './Header.css'
import Titulo from '../components/Titulo'

const Header = () => {
    return (
        <div className='Header'>
            <Titulo titulo={"Farmacia"} />
            <NavBar />

        </div>
    )
}

export default Header