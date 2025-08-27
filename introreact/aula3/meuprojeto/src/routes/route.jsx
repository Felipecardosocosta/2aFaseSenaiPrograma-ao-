import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/home/Home';
import Fila from '../pages/Fila/Fila';


const route = createBrowserRouter([{
    path: '/', element: <Home/>},
    {path: '/Fila', element: <Fila/>}
])



export default route
