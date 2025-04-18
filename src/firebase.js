// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQzu357M7uZubvKBxJ71uKSASObqFRhpU",
  authDomain: "querydoctest.firebaseapp.com",
  projectId: "querydoctest",
  storageBucket: "querydoctest.appspot.com",
  messagingSenderId: "660700959303",
  appId: "1:660700959303:web:07c6fb6cc8b533b6eb1762"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
