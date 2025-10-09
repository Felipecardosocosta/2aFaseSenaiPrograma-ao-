import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'


const routes = createBrowserRouter([

    { path: '/', element: <Home /> },
    { path: '/produtos/:name', element: <Produtos /> }

])

export default routes