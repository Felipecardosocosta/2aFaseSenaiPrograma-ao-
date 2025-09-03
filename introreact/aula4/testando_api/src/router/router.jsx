import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import Pokemons from '../pages/Pokemons/Pokemons'
import Pokemon from '../pages/Pokemon/Pokemon'

const router = createBrowserRouter([
{path: "/", element: <Pokemons/>},
{path:"/pokemon/:name", element: <Pokemon/>}
])

export default router
