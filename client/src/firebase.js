// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-69745.firebaseapp.com",
  projectId: "mern-estate-69745",
  storageBucket: "mern-estate-69745.appspot.com",
  messagingSenderId: "974102447737",
  appId: "1:974102447737:web:b1848e7512fbe9796a36a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);