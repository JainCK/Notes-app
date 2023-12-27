
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCg5BRWYrcAQ0NSQBU4ykp16iHPxSkARSw",
  authDomain: "react-notes-4ad0b.firebaseapp.com",
  projectId: "react-notes-4ad0b",
  storageBucket: "react-notes-4ad0b.appspot.com",
  messagingSenderId: "87774406925",
  appId: "1:87774406925:web:4d8170843dbbb8202c2844"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")