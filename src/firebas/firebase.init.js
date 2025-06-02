// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtdjIa_BImCtF2DFRYzh-8W-rSk5p39yE",
  authDomain: "react-with-firebase-four.firebaseapp.com",
  projectId: "react-with-firebase-four",
  storageBucket: "react-with-firebase-four.firebasestorage.app",
  messagingSenderId: "529842733572",
  appId: "1:529842733572:web:9aa7d2e8fca4de4143ab51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);