// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Nu3qep9s9ofqTwblYM0aaVcyI3TPQxM",
  authDomain: "task-manager-4e462.firebaseapp.com",
  projectId: "task-manager-4e462",
  storageBucket: "task-manager-4e462.appspot.com",
  messagingSenderId: "75368389937",
  appId: "1:75368389937:web:aa65d5f4dbe843274e2410",
  measurementId: "G-NBYNSDM6RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;