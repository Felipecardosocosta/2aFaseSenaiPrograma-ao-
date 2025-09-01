import React from 'react'
import './Home.css'
import Header from '../../components/Header'
import Titulo from '../../components/Titulo'
import Conteudo from '../../components/Conteudo'
import Card from '../../components/card/Card'

function Home() {
    return (
        <>

            <Header />
            <div className='home'>
                <Conteudo conteudo={<img className='img' src="./img/farmarcia.webp" alt="" />}> 
                <Card titulo={'Camisa'} categoria={'Categoria: Roupa'} img={"./img/farmarcia-camisetas.webp"}/>
                <Card titulo={'Camisa'} categoria={'Categoria: Roupa'} img={"./img/farmarcia-camiseta.webp"}/>
                <Card titulo={'Camisa'} categoria={'Categoria: Roupa'} img={"./img/farmarcia-camisetas.webp"}/>
                
                </Conteudo>
                
            </div>

        </>
    )
}

export default Home