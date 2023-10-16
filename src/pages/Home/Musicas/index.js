
import '../Estudo/estudo.css'

import { useEffect, useState } from 'react'
import { Header } from '../../../components/Header'
import { Logo } from '../../../components/logo'


import { AiFillDelete, AiOutlineArrowRight } from 'react-icons/ai'

import { db } from '../../../services/firebaseConnection'
import {
  collection,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  doc

} from 'firebase/firestore'


export default function GetLink(){
  const [links, setLinks] = useState([])
  
    useEffect(() => {
  
      const linksRef = collection(db, "Músicas")
      const queryRef = query(linksRef, orderBy("created", "asc"))
  
      onSnapshot(queryRef, (snapshot) => {
        let lista = [];
  
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().background,
            color: doc.data().color,
            gener: doc.data().gener
          })  
        })
  
        setLinks(lista);
  
      })
  
    })

    function handleDeleteLink(id) {
      const docRef = doc(db, "Músicas", id)
      deleteDoc(docRef)
    }

  return(
    <div className='home-container'>
      <Header/>
      <Logo/>

      <h2 className="title">
        Meus links
      </h2>

      <main className='links-container'>
        { links.map( (item, index) => (
          <section
            key={index} 
            className="list animate-top link-area"
            style={{ backgroundColor: item.bg, color: item.color }}
          >  
            <p>{item.name}</p>
            <div>

              <a href={item.url}><button className='btn-in'><AiOutlineArrowRight size={18} color="#FFF"/></button></a>

              <button className="btn-delete" onClick={ () => handleDeleteLink(item.id) }>
                <AiFillDelete size={18} color="#FFF"/>
              </button>

            </div>

          </section>
        ) )}
      </main>
    </div>
  )
}

