// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiZU8zHb_D7UtThy9J2QUheOZpA0Ukz9Q",
  authDomain: "realirrigation-b54f6.firebaseapp.com",
  projectId: "realirrigation-b54f6",
  storageBucket: "realirrigation-b54f6.appspot.com",
  messagingSenderId: "531084182299",
  appId: "1:531084182299:web:ee31225f56a2366622c9be",
  measurementId: "G-ZW0SHNZ9VQ"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

//export const db = app.firestore();
