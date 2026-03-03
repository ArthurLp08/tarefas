
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyBuCxO9G5hSILxSS-NR_qexS1FUpqchDt0",
  authDomain: "tarefas6767.firebaseapp.com",
  projectId: "tarefas6767",
  storageBucket: "tarefas6767.firebasestorage.app",
  messagingSenderId: "1000185266099",
  appId: "1:1000185266099:web:4a17bb22039248f3d515c6",
  measurementId: "G-M0S93WTFGY"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };