// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTTGWJsNdQMIDnF3mbwseMWhZxNwgfGGQ",
  authDomain: "house-ranting.firebaseapp.com",
  projectId: "house-ranting",
  storageBucket: "house-ranting.firebasestorage.app",
  messagingSenderId: "1007927664725",
  appId: "1:1007927664725:web:125ad3f1d7629ff960b4dc",
  measurementId: "G-Q99J6E3QQK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
