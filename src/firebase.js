// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// 🔥 Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDXRqjVzQLuN-wJJeFTS9n5OqczfYyO6y0",
  authDomain: "neomart-65a11.firebaseapp.com",
  projectId: "neomart-65a11",
  storageBucket: "neomart-65a11.firebasestorage.app",
  messagingSenderId: "72442077593",
  appId: "1:72442077593:web:fe2816913d77c89faa7308",
  measurementId: "G-9ZWYFJ751R",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// ✅ Google Provider
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);