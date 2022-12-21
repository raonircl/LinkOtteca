import './error.css'

import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'

export default function Error(){
  return(
    <div className='error'>
      <Logo/>
      
      <h1>Página não encontrada!</h1>
      
      <Link className='link' to='/home'>
        Voltar para Página Home
      </Link>
    </div>
  )
}