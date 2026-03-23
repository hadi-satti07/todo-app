
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDpJzxTyASnTjri0GW2LfWjhBPFTwJq84c",
  authDomain: "todo-app-211d9.firebaseapp.com",
  projectId: "todo-app-211d9",
  storageBucket: "todo-app-211d9.firebasestorage.app",
  messagingSenderId: "745903257456",
  appId: "1:745903257456:web:30198a9eef54d91fde01b5",
  measurementId: "G-DVYD3KGVB5"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
 export const gP = new GoogleAuthProvider();
export const fP = new FacebookAuthProvider();
export const auth = getAuth(app);
