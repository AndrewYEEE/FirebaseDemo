// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBIOzb0d8RsaglfKGDOLjxs8YxZQtl0ZA",
    authDomain: "starry-argon-377607.firebaseapp.com",
    projectId: "starry-argon-377607",
    storageBucket: "starry-argon-377607.appspot.com",
    messagingSenderId: "630597491405",
    appId: "1:630597491405:web:76f04086b55dd74cdbe784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();