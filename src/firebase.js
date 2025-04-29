import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini

const firebaseConfig = {
  apiKey: "AIzaSyA24UAfxzSEgcFxLPs5D-nZe26e1W_s66Q",
  authDomain: "portfolio-a7e6a.firebaseapp.com",
  projectId: "portfolio-a7e6a",
  storageBucket: "portfolio-a7e6a.firebasestorage.app",
  messagingSenderId: "404028073630",
  appId: "1:404028073630:web:3c46825aab88cd56c17d8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };