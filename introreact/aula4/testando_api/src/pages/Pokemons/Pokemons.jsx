import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import pesguisarPokemons from '../../server/pesguisarPokemons'

function Pokemons() {

    const [pokemons, setPokemons] = useState([])
    const [erro, setErro] = useState(false)
    const [carregando, setCarregando] = useState(true)


    useEffect(() => {
        async function acharPoke() {

            const pesquisar = await pesguisarPokemons()

            if (pesquisar && pesquisar.results) {
                
                console.log(pesquisar);
                
                const todospokemons = pesquisar.results

                setPokemons(todospokemons)
                setCarregando(false)

                return
            }
            setErro(true)


        }
        acharPoke()

    }, [])

    return (
        <div>
            <ol>

                {!erro ?
                    carregando ? <p> Carregando...</p> :

                        pokemons.map((pokemon) => { return (<li key={pokemon.name}> <Link to={`/pokemon/${pokemon.name}`} > {pokemon.name}</Link></li>) }) :

                    <p>Erro</p>}
            </ol>

        </div>
    )
}

export default Pokemons
