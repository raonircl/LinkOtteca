import './home.css'

import { Logo } from '../../components/Logo'
import { Social } from '../../components/Social'

import { FaLinkedin, FaInstagram, FaNewspaper, FaYoutube, FaBook, FaMusic, } from 'react-icons/fa'
import { Header } from '../../components/Header'

export default function Home(){
  return(
    <div className='home-container'>
      <Header/>
      <header className='header'>
        <Logo/>
      </header>
      
      <span>Meus links</span>

      <main className='links'>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Músicas <FaMusic/></p>
          </a>
        </section>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Estudo <FaBook/></p>
          </a>
        </section>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Youtube <FaYoutube/></p>
          </a>          
        </section>

      </main>

      
      <main className='links'>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Nóticias <FaNewspaper/></p>
          </a>
        </section>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Instagram <FaInstagram/></p>
          </a>
        </section>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Linkedin <FaLinkedin/></p>
          </a>          
        </section>

      </main>

      <footer>
        <Social url="https://www.linkedin.com/in/raoni-cerqueira-027026211/">
          <FaInstagram size={35} color="#FFF"/>
        </Social>
        <Social url="https://www.instagram.com/raonircl/">
          <FaLinkedin size={35} color="#FFF"/>
        </Social>
      </footer>
    
    </div>
  )
}