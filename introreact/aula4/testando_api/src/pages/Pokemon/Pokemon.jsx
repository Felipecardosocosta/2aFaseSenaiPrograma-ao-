import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pesguisarPokemons from '../../server/pesguisarPokemons'
import './Pokemon.css'
import ConteinerCor from '../../components/ConteinerCor'
import Abas from '../../components/Abas'


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
                console.log(pesquisa.stats)

                return
            }
            setErro(true)
        }
        pesquisarPoke()

    }, [])



     if (erro) {
        return <p>Erro...</p>
    }

    if (carregando) {
       return <p>Carregando...</p>
    }

    return (
        <div>
            {/* <ConteinerCor tipo={'atack'} numero={50} tamanho={70}/> */}

            {/* {pokemon && <div><h2>{pokemon.name}</h2> {<img className='img' src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt="" />} <div>
                
            {pokemon.stats.map(abilidade => { 
                
                

                return ( <ConteinerCor key={abilidade.stat.name} tipo={abilidade.stat.name} tamanho={abilidade['base_stat']} numero={abilidade['base_stat']}/>) 
                
    
                
                })}</div>
            </div>} */}
            <Abas titulo={'Abilidades'} children={pokemon.stats.map(abilidade => { 
                
                

                return ( <ConteinerCor key={abilidade.stat.name} tipo={abilidade.stat.name} tamanho={abilidade['base_stat']} numero={abilidade['base_stat']}/>) }) }/> 
        </div>
    )
}

export default Pokemon
