// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4GC-SaBo8XizRxuUTdkU1eB8DCbV-va4",
  authDomain: "auth-moha-milon-9e641.firebaseapp.com",
  projectId: "auth-moha-milon-9e641",
  storageBucket: "auth-moha-milon-9e641.appspot.com",
  messagingSenderId: "435785628655",
  appId: "1:435785628655:web:3428c0ec4ab7e73442d41a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
