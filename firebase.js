// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Z18Ma03Aks8WiWdxAQQ95nUiP8se5t4",
  authDomain: "ecommerce-8ee2c.firebaseapp.com",
  projectId: "ecommerce-8ee2c",
  storageBucket: "ecommerce-8ee2c.appspot.com",
  messagingSenderId: "813823643903",
  appId: "1:813823643903:web:4fd7c7a9cb4591e2af3cca",
  measurementId: "G-Z2WJD8CRCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);