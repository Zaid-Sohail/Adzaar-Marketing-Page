// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjY_ztiN_1d737R114qaNuxmXhlnSo9-U",
  authDomain: "adzaar-marketing.firebaseapp.com",
  projectId: "adzaar-marketing",
  storageBucket: "adzaar-marketing.firebasestorage.app",
  messagingSenderId: "453599871162",
  appId: "1:453599871162:web:f34dad1cb61443c9810283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);