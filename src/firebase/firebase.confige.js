// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_fhyPtpsxmKKN1Md1NZ2u0wuZR6rfvXw",
  authDomain: "the-dragon-news-e78b8.firebaseapp.com",
  projectId: "the-dragon-news-e78b8",
  storageBucket: "the-dragon-news-e78b8.appspot.com",
  messagingSenderId: "558091087483",
  appId: "1:558091087483:web:8121811ecb0df0e9d47cde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;