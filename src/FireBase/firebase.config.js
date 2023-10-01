// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACmjGDFlfStNgveFAUKfo4VJl-FKOnu70",
  authDomain: "auth-practice-d89d2.firebaseapp.com",
  projectId: "auth-practice-d89d2",
  storageBucket: "auth-practice-d89d2.appspot.com",
  messagingSenderId: "1070039282596",
  appId: "1:1070039282596:web:fea6b67ad18bf0862b4731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

