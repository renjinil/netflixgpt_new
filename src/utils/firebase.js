// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvoMbpdukVb9eiT4eIEoFYrGsbM07FH_g",
  authDomain: "netflixgpt-a644f.firebaseapp.com",
  projectId: "netflixgpt-a644f",
  storageBucket: "netflixgpt-a644f.appspot.com",
  messagingSenderId: "828355957206",
  appId: "1:828355957206:web:ceaa33f7819594e6381477",
  measurementId: "G-5ZE7M6KYV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();