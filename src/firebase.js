// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDr_5n4H9WQajZV5Lf7DPtgPRqrLw6UU4o",
  authDomain: "shelf-space-4fe1c.firebaseapp.com",
  projectId: "shelf-space-4fe1c",
  storageBucket: "shelf-space-4fe1c.appspot.com",
  messagingSenderId: "1026240837482",
  appId: "1:1026240837482:web:81f583b4b9360d53961713",
  measurementId: "G-DNF178DLHP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;