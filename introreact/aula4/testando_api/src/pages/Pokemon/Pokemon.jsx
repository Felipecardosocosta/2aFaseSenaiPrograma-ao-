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

            if (pesquisa) {

                setPokemon(pesquisa)
                setCarregando(false)
                console.log(pesquisa.stats.map(abilidade => abilidade['base_stat']))
                
                return
            }
            setErro(true)
        }
        pesquisarPoke()

    }, [])

    return (
        <div>

            {!erro ? carregando ? <p>Carregando...</p> : pokemon && <div><h2>{pokemon.name}</h2> {<img className='img' src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt="" />} <div>{pokemon.stats.map(abilidade => { return (<p>{abilidade.stat.name}: {abilidade['base_stat']}</p>) })}</div></div> :
                <p>Erro...</p>}
        </div>
    )
}

export default Pokemon
