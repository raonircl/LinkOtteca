import './logo.css'

import { Link } from 'react-router-dom'

export function Logo(){
  return(
    <Link to='/'>
      <h1 className='logo'>
        Lin<span className='logo-text'>kOtte</span>ca
      </h1>
    </Link>
  )
}