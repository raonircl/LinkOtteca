import './header.css'

import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { auth } from '../../services/firebaseConnection'
import { signOut } from 'firebase/auth'
import { 
  AiOutlineLink,
  AiOutlineHome,
  AiOutlineUser
} from 'react-icons/ai'

export function Header() {
  
  async function handleLogout() {
    await signOut(auth);
  }
  
  return(
    <header className='admin-header'>
      <nav className='nav-header'>
        
        <button onClick={handleLogout}>
          <BiLogOut size={28}/>
        </button>

        <Link to="/admin">
          <AiOutlineLink size={28}/>
        </Link>

        <Link to='/home'>
          <AiOutlineHome size={28}/>
        </Link>
        
        {/* <Link to='/register'>
          <AiOutlineUser size={28}/>
        </Link> */}

      </nav>
    </header>
  )
  
}