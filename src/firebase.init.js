// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGlJLQz3ULg9XGDQoRwEZl6SGYtxpGRf8",
    authDomain: "genius-car-services-a1fdf.firebaseapp.com",
    projectId: "genius-car-services-a1fdf",
    storageBucket: "genius-car-services-a1fdf.appspot.com",
    messagingSenderId: "1066704258618",
    appId: "1:1066704258618:web:360dc018a41c16f10f9703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;