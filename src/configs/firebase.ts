// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgAO-mQQKN-c1badFeBQ-5ldVxuJHFdTQ",
  authDomain: "music-gpt-7194a.firebaseapp.com",
  projectId: "music-gpt-7194a",
  storageBucket: "music-gpt-7194a.appspot.com",
  messagingSenderId: "387648943462",
  appId: "1:387648943462:web:b5bef9bee06bad02ac44a7",
  measurementId: "G-PVXN1Z2YVK",
};

// Initialize Firebase
const app = getApps().length !== 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
