// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGkPwFk4OWFL10HkPMiLD9-b6BCgcusaE",
  authDomain: "doctors-portal-selim.firebaseapp.com",
  projectId: "doctors-portal-selim",
  storageBucket: "doctors-portal-selim.appspot.com",
  messagingSenderId: "561141073247",
  appId: "1:561141073247:web:151f4291166ffad81ea2ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;