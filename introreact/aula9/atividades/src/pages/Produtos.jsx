import React from 'react'
import { useParams } from 'react-router-dom'
import Borracharia from './Borracharia'
import Sorveteria from './Sorveteria'

function Produtos() {
    const { name } = useParams()

    if (name = 'borracharia') {
        return (
            <Borracharia />
        )

    }
    if (name = 'sorveteria') {
        return (
            <Sorveteria />
        )

    }
}

export default Produtos