import React from 'react'
import NavBar from '../components/NavBar'


function Home() {

    fetch('http://localhost:3000/users',{
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({})
    })

    return (

        <div>
            <NavBar />

            

        </div>
    )
}

export default Home