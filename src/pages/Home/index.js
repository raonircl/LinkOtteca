import './home.css'

import { Logo } from '../../components/Logo'
import { Social } from '../../components/Social'

import { FaLinkedin, FaInstagram, FaNewspaper, FaYoutube, FaBook, FaMusic, FaGithub, FaFilm, FaPhotoVideo, } from 'react-icons/fa'
import { Header } from '../../components/Header'

import { Link } from 'react-router-dom'

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
          <Link to="/estudo">
            <p className='link-text'>Estudo <FaBook/></p>
          </Link>
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
            <p className='link-text'>Notícias <FaNewspaper/></p>
          </a>
        </section>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Filmes <FaFilm/></p>
          </a>
        </section>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Fotos <FaPhotoVideo/></p>
          </a>          
        </section>

      </main>

      <footer>
        <Social url="https://www.linkedin.com/in/raoni-cerqueira-027026211/">
          <FaInstagram size={35} color='#FFF'/>
        </Social>
        <Social url="https://www.instagram.com/raonircl/">
          <FaLinkedin size={35} color='#FFF'/>
        </Social>
        <Social url="https://github.com/raonircl">
          <FaGithub size={35} color='#FFF'/>
        </Social>
      </footer>
    
    </div>
  )
}