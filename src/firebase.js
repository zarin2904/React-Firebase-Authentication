// Firebase configuration + initialization.
// Replace the values below with your own Firebase Web App config
// (Firebase Console > Project settings > Your apps > Web app).
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBppy0oyCtAQq_MA5OZua9p2epJVpt-z6Y",
  authDomain: "simpleauth-80f4c.firebaseapp.com",
  projectId: "simpleauth-80f4c",
  storageBucket: "simpleauth-80f4c.firebasestorage.app",
  messagingSenderId: "464702291457",
  appId: "1:464702291457:web:88a7910eb83fec2da68a00",
  measurementId: "G-FH3GBZGG6V"
};

const app = initializeApp(firebaseConfig);

// Auth instance used everywhere in the app
export const auth = getAuth(app);
