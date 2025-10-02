import React from 'react'
import NavBar from '../components/NavBar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Home() {
    const {usuario, setUsuario} = useContext(GlobalContext)
    return (
        <div>
            <NavBar />
            {usuario}
            <button onClick={()=>setUsuario('Home')} >Mudar valor</button>
        </div>
    )
}

export default Home