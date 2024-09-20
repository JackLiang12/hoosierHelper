// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu9lotP9Im6KBh3CZ5GYhlOIwUugRck0k",
  authDomain: "hoosierhelper-94997.firebaseapp.com",
  projectId: "hoosierhelper-94997",
  storageBucket: "hoosierhelper-94997.appspot.com",
  messagingSenderId: "962148925110",
  appId: "1:962148925110:web:7d535a3545f87d7fea7017",
  measurementId: "G-P6BK3R0V86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);