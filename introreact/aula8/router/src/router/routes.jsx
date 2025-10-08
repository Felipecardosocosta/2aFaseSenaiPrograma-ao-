import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'
import Cadastro from '../pages/Cadastro'




const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/produtos', element: <Produtos /> },
    { path: '/cadastro', element: <Cadastro /> }
])

export default router

