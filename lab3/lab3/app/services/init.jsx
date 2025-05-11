// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb4tzA0PJR8q0clwtaAz_5tw11mjmCsyk",
  authDomain: "piwo-library.firebaseapp.com",
  projectId: "piwo-library",
  storageBucket: "piwo-library.firebasestorage.app",
  messagingSenderId: "812303018456",
  appId: "1:812303018456:web:fac7740df5810d20326aad",
  measurementId: "G-34SGJZXNHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const firestore = getFirestore(app);

export { firestore, auth, provider };