// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMkMe0zb114A-EDd_RtjDWE6kTW7EUd4M",
  authDomain: "headcoach-106b0.firebaseapp.com",
  projectId: "headcoach-106b0",
  storageBucket: "headcoach-106b0.appspot.com",
  messagingSenderId: "109192965351",
  appId: "1:109192965351:web:60e7b954535b4f5cb58642"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);