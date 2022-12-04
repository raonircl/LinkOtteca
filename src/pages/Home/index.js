import './home.css'

import { Logo } from '../../components/Logo'

export default function Home(){
  return(
    <div className='home-container'>
      <Logo/>
      
      <span>Meus links</span>

      <main className='links'>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Músicas</p>
          </a>
        </section>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Material de Estudo</p>
          </a>
        </section>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Canais do Youtube</p>
          </a>          
        </section>

      </main>

      
      <main className='links'>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Nóticias</p>
          </a>
        </section>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Instagram</p>
          </a>
        </section>

        <section className='link-area'>
          <a href="#">
            <p className='link-text'>Linkedin</p>
          </a>          
        </section>

      </main>

    </div>
  )
}