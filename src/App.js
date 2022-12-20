
import { createBrowserRouter } from "react-router-dom"

import Admin from './pages/Admin'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Error from './pages/Error'
import Private from "./routes/Private"

import Estudo from './pages/Home/Estudo'
import Filmes from './pages/Home/Filmes'
import Fotos from './pages/Home/Fotos'
import Musicas from './pages/Home/Musicas'
import Noticias from './pages/Home/Noticias'
import Youtube from './pages/Home/Youtube'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/home',
    element: <Private> <Home/> </Private>
  },
  {
    path: '/estudo',
    element: <Private> <Estudo/> </Private>
  },
  {
    path: '/youtube',
    element: <Private> <Youtube/> </Private>
  },
  {
    path: '/filmes',
    element: <Private> <Filmes/> </Private>
  },
  {
    path: '/musicas',
    element: <Private> <Musicas/> </Private>
  },
  {
    path: '/noticias',
    element: <Private> <Noticias/> </Private>
  },
  {
    path: '/Fotos',
    element: <Private> <Fotos/> </Private>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/admin',
    element: <Private> <Admin/> </Private>
  },
  {
    path: '*',
    element: <Error/>
  }
])

export { router };