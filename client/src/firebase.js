// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ninja-cafe-tutorial-8fa78.firebaseapp.com",
  databaseURL: "https://ninja-cafe-tutorial-8fa78.firebaseio.com",
  projectId: "ninja-cafe-tutorial-8fa78",
  storageBucket: "ninja-cafe-tutorial-8fa78.appspot.com",
  messagingSenderId: "934419688321",
  appId: "1:934419688321:web:4dbbd8eb93c175fb795680",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
