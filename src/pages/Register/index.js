import './register.css'
import { useState } from 'react'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'

import { auth } from '../../services/firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Register(){
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  /* const [ createUserWithEmailAndPassword, loading ] = createUserWithEmailAndPassword(auth); */

  const navigate = useNavigate();

  function handleSignIn(e){
    e.preventDefault();

    if (email === '' || password === ''){
      toast.error("Preencha todos os dados!")
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate("/", { replace:true })
      toast.success("Cadastrado com sucesso!")
    })
    .catch(() => {
      toast.error("Não foi possível realizar o cadastro, tente novamente.")
    })

  }


  return(
    <div className='login-container'>
      <Logo/>

      <form className='form' onSubmit={handleSignIn}>

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

        <button type='submit'>Cadastrar</button>
        
      </form>


    </div>
  )
}