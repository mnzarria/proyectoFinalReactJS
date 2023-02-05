// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsJzPhFvE9UllW9-R6IWJDofXTkaPBZL8",
  authDomain: "head-coach-mz-f25e6.firebaseapp.com",
  projectId: "head-coach-mz-f25e6",
  storageBucket: "head-coach-mz-f25e6.appspot.com",
  messagingSenderId: "756075419259",
  appId: "1:756075419259:web:ec2f13359f6698f223b4de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);