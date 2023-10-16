import './login.css'
import { useState } from 'react'
import { Logo } from '../../components/logo'
import { Input } from '../../components/Input'

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Login(){
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();

    if (email === '' || password === ''){
      alert("Preencha todos os campos")
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate("/home", { replace:true })
      toast.success("Login efetuado com sucesso!")
    })
    .catch(() => {
      toast.error("Email ou senha inválida!")
    })

  }


  return(
    <div className='login-container'>
      <Logo/>

      <form className='form' onSubmit={handleLogin}>

        <Input
          type='email'
          placeholder='@email.com'
          value={email}
          onChange= { (e) => setEmail(e.target.value) }
        />

        <Input
          type='password'
          placeholder='*******'
          autoComplete='on'
          value={password}
          onChange={ (e) => setPassword(e.target.value) }
        />

        <button type='submit'>Acessar</button>
        
      </form>

      <a className='cad-link' href="/register">
        <span>Faça seu cadastro</span>
      </a>
    </div>
  )
}