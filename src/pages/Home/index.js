import './home.css'

import { Logo } from '../../components/logo'
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
          <Link to="/musicas">
            <p className='link-text'>Músicas <FaMusic/></p>
          </Link>
        </section>

        <section className='link-area'>
          <Link to="/estudo">
            <p className='link-text'>Estudo <FaBook/></p>
          </Link>
        </section>

        <section className='link-area'>
          <Link to="/youtube">
            <p className='link-text'>Youtube <FaYoutube/></p>
          </Link>          
        </section>

      </main>

      
      <main className='links'>

        <section className='link-area'>
          <Link to="/noticias">
            <p className='link-text'>Notícias <FaNewspaper/></p>
          </Link>
        </section>

        <section className='link-area'>
          <Link to="/filmes">
            <p className='link-text'>Filmes <FaFilm/></p>
          </Link>
        </section>

        <section className='link-area'>
          <Link to="/fotos">
            <p className='link-text'>Fotos <FaPhotoVideo/></p>
          </Link>          
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