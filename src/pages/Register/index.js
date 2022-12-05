import { useState } from 'react'
import './register.css'

import { Logo } from '../../components/Logo'

export default function Register(){
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleLogin(){

  }

  return(
    <div className='login-container'>
      <Logo/>

      <form className='form' onSubmit={handleLogin}>

        <input
          type='email'
          placeholder='@email.com'
          value={email}
          onChange= { (e) => setEmail(e.target.value) }
        />

        <input
          type='password'
          placeholder='*******'
          autoComplete='on'
          value={password}
          onChange={ (e) => setPassword(e.target.value) }
        />

        <button type='submit'> Acessar</button>
        
      </form>


    </div>
  )
}