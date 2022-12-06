import { useState, useEffect } from "react"

import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from "firebase/auth"

import { Navigate } from "react-router-dom"


export default function Private({children}){
  const [ loading, setLoding ] = useState(true);
  const [ signed, setSigned ] = useState(false);

  useEffect(() => {

    async function checkLogin(){
      onAuthStateChanged(auth, (user) => {

        if(user){
          const userData = {
            uid: user.uid,
            email: user.email
          };

          localStorage.setItem('@detailUser', JSON.stringify(userData))
          setLoding(false);
          setSigned(true);

        }else{
          setLoding(false);
          setSigned(false);
        }


      })
    }

    checkLogin();

  }, {})
  
  if(loading){
    return(
      <div></div>
    )
  }

  if(!signed){
    return <Navigate to='/'/>
  }

  return children;
}