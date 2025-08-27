import React from 'react'
import './Home.css'
import Header from '../../components/Header'
import Titulo from '../../components/Titulo'
import Conteudo from '../../components/Conteudo'
import Card from '../../components/card/Card'

function Home() {
    return (
        < >

            <Header />
            <div className='home'>
                <Titulo titulo={"Seja bem vindo"} />
                <Conteudo conteudo={<img className='img' src="./img/farmarcia.webp" alt="" />}> 
                <Card numero={4} titulo={"Camiseta"} categoria={"Roupa"} img={"./img/farmarcia-camiseta.webp"} />
                </Conteudo>
                
            </div>

        </>
    )
}

export default Home