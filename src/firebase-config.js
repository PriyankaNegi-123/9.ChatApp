// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC73xh2tsGyQaZ-1PPJhmxg074W5lUdC0c",
  authDomain: "chatapp-e8712.firebaseapp.com",
  projectId: "chatapp-e8712",
  storageBucket: "chatapp-e8712.appspot.com",
  messagingSenderId: "379558103406",
  appId: "1:379558103406:web:592bb203f4f1f819d2197f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)