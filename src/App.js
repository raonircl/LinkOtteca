
import { createBrowserRouter } from "react-router-dom"

import Admin from './pages/Admin'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Error from './pages/Error'
import Private from "./routes/Private"

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