// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC74dKbsT6LZskuwUAqzjH94oWch-24sWQ",
  authDomain: "furno-store-46e02.firebaseapp.com",
  projectId: "furno-store-46e02",
  storageBucket: "furno-store-46e02.appspot.com",
  messagingSenderId: "223884755473",
  appId: "1:223884755473:web:1cb23772f4ae100ec567b0",
  measurementId: "G-9KT6WW98VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
// export const storage = getStorage(app);

