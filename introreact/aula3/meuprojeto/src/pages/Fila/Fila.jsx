import React from 'react'
import Header from '../../components/Header'
import './Fila.css'
import pesguisa from '../../components/teste/pesguisa'
import { useState } from 'react'
import { useEffect } from 'react'
import Conteudo from '../../components/Conteudo'


function Fila() {
    const [pokemnon, setPokemnon] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon'

    const [Carregar, setCarregar] = useState(true)

    const [pokemonAchado, setPokemonAchado] = useState()

    async function carregar(nome) {

        const pokemonnnn = await pesguisa(nome)
        

        setPokemonAchado(pokemonnnn)

        setCarregar(false)
        console.log(pokemonnnn);
        


    }

    useEffect(() => {

        async function poke(nome) {

            try {
                const resposta = await fetch(url)

                const tratamento = await resposta.json()
                console.log(tratamento)
                setPokemnon(tratamento.results)

            } catch (err) {
                console.log(err)
                return null

            }


        }
        poke()

    }, [])



    return (


        <>
            <Header />

            <div className='Fila' > <h1>
                {!Carregar &&
                    <div className='testee' >

                        <Conteudo conteudo={<div>
                            <h1>{pokemonAchado.name}</h1>
                            <img src={pokemonAchado.sprites.other.dream_world.front_default} alt="" /> 
                            <p>Tipo: {pokemonAchado.types.map((type) => type.type.name).join(', ')}</p>

                            
                            </div>} >
                            
                       
                        
                        <button onClick={()=> setCarregar(true)}>Voltar</button>
                        </Conteudo>

                        
                        


                    </div>}
                {Carregar &&
                    pokemnon.map((poke) => {
                        return (

                            <div key={poke.name} > <p> {poke.name}</p>
                                <button onClick={() => carregar(poke.name)} >Ver Mais </button>
                            </div>

                        )
                    })}  </h1>


            </div>
        </>
    )
}

export default Fila
