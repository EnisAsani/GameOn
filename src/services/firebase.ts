// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2JRuMARGNyful6CrohwSKIIBIG6mESv4",
  authDomain: "gameon-2ec2f.firebaseapp.com",
  projectId: "gameon-2ec2f",
  storageBucket: "gameon-2ec2f.appspot.com",
  messagingSenderId: "160687472456",
  appId: "1:160687472456:web:707358679aed54e9b9fd7d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();