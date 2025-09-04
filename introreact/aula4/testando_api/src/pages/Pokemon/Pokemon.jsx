import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pesguisarPokemons from '../../server/pesguisarPokemons'
import './Pokemon.css'

function Pokemon() {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState()
    const [erro, setErro] = useState(false)
    const [carregando, setCarregando] = useState(true)


    


    useEffect(() => {

        async function pesquisarPoke() {

            const pesquisa = await pesguisarPokemons(name)

            const dados = await pesquisa

            if (dados) {

                setPokemon(dados)
                console.log(dados);
                
                console.log(dados.sprites.versions['generation-v']['black-white'].animated.front_default);
                
                setCarregando(false)
                return
            }
            setErro(true)

        }
        pesquisarPoke()

    }, [])

    return (
        <div>
            {!erro ? carregando ? <p>Carregando...</p> : pokemon && <p>{<img className='img' src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt="" />}</p> :
                <p>Erro...</p>}
        </div>
    )
}

export default Pokemon
