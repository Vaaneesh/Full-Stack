// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq-VwZe7gS1B2qmnyIV9OyAf-_g52IhGw",
  authDomain: "group26-7c3aa.firebaseapp.com",
  databaseURL: "https://group26-7c3aa-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "group26-7c3aa",
  storageBucket: "group26-7c3aa.appspot.com",
  messagingSenderId: "667360398241",
  appId: "1:667360398241:web:a2491d4fbe4698ca2119e0",
  measurementId: "G-R63LR4YW4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
export const auth=getAuth(app);