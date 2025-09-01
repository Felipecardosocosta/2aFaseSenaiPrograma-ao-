import React from 'react'
import Header from '../../components/Header'
import './Fila.css'
import pesguisa from '../../components/teste/pesguisa'
import { useState } from 'react'
import { useEffect } from 'react'
import Conteudo from '../../components/Conteudo'
import Card from '../../components/card/Card'


function Fila() {
    const [pokemnon, setPokemnon] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon'

    const [Carregar, setCarregar] = useState(true)

    const [pokemonAchado, setPokemonAchado] = useState()

    async function abrirPokemon(nome) {

        const pokemonnnn = await pesguisa(nome)


        setPokemonAchado(pokemonnnn)

        setCarregar(false)
        console.log(pokemonnnn);



    }

    useEffect(() => {

        async function atualizar() {

            const dados = await pesguisa()
            console.log(dados)

            setPokemnon(dados.results)

        }
        atualizar()


    }, [])



    return (


        <>
            <Header />

            <div className='Fila' > <div className='cont'>
                {!Carregar &&
                    <div className='testee' >

                        <Conteudo conteudo={<div>
                            <h1>{pokemonAchado.name}</h1>

                            <img src={pokemonAchado.sprites.other.dream_world.front_default} alt="" />

                            <p>Tipo: {pokemonAchado.types.map((type) => type.type.name).join(', ')}</p>

                        </div>} >



                            <button onClick={() => setCarregar(true)}>Voltar</button>
                        </Conteudo>





                    </div>}
                {Carregar &&
                    pokemnon.map((poke) => {
                        return (
                            
                            <Card key={poke.name} titulo={poke.name}>
                                <button onClick={()=>abrirPokemon(poke.name)} >Ver Mais</button>
                            </Card>
                            

                        )
                    })}  </div>


            </div>
        </>
    )
}

export default Fila
