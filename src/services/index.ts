import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMWtZpaOg8VaLPgpdi-F-udkAUw15Oe-8",
  authDomain: "project-car-b407d.firebaseapp.com",
  projectId: "project-car-b407d",
  storageBucket: "project-car-b407d.appspot.com",
  messagingSenderId: "170623919890",
  appId: "1:170623919890:web:a1185eb4a9e13e1a40f5cb",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
