// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsyMGDUH-TAIY7NsuatSA5K9xsBlgpWNo",
  authDomain: "abdulrehmantravels-d40ad.firebaseapp.com",
  projectId: "abdulrehmantravels-d40ad",
  storageBucket: "abdulrehmantravels-d40ad.firebasestorage.app",
  messagingSenderId: "642963121855",
  appId: "1:642963121855:web:2e782c1500713d8b71880a",
  measurementId: "G-8FPMJDTF8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
