import '../home.css'
import { useEffect, useState } from 'react'
import { Header } from '../../../components/Header'
import { Logo } from '../../../components/Logo'


import { AiFillDelete } from 'react-icons/ai'

import { db } from '../../../services/firebaseConnection'
import {
  collection,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  doc

} from 'firebase/firestore'


export default function Estudo(){
  const [links, setLinks] = useState([])
  
    useEffect(() => {
  
      const linksRef = collection(db, "Estudo")
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
      const docRef = doc(db, "links", id)
      deleteDoc(docRef)
    }

  return(
    <div className='home-container'>
      <Header/>
      <Logo/>

      <h2 className="title">
        Meus links
      </h2>

      <main className='links'>
        { links.map( (item, index) => (
          <article
            key={index} 
            className="list animate-top"
            style={{ backgroundColor: item.bg, color: item.color }}
            >
            <p>{item.name}</p>
            <div>
              <button className="btn-delete" onClick={ () => handleDeleteLink(item.id) }>
                <AiFillDelete size={18} color="#FFF"/>
              </button>
            </div>
          </article>
        ) )}
      </main>
    </div>
  )
}

