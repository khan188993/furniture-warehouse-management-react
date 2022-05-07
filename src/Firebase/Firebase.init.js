// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBiFsuDWV05a8DFmz1Ua7AOr-YouRqXcQ",
    authDomain: "furniture-inventory-management.firebaseapp.com",
    projectId: "furniture-inventory-management",
    storageBucket: "furniture-inventory-management.appspot.com",
    messagingSenderId: "200071842110",
    appId: "1:200071842110:web:f7be18dd14cba803a5c46f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;