import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCNhbWKGgvtjTfCD5zPFraYqTW9jbl9BCE",
  authDomain: "linkotteca.firebaseapp.com",
  projectId: "linkotteca",
  storageBucket: "linkotteca.appspot.com",
  messagingSenderId: "518534736729",
  appId: "1:518534736729:web:9eb6fd339a620af706fa48",
  measurementId: "G-28DH9W8NK6"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };