// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkhnInkusjIhe1Hhm6_U8RhyQqahNUIUU",
  authDomain: "dhcp-6f6e7.firebaseapp.com",
  projectId: "dhcp-6f6e7",
  storageBucket: "dhcp-6f6e7.appspot.com",
  messagingSenderId: "831707234931",
  appId: "1:831707234931:web:da3c7050dc872296666006",
  measurementId: "G-TSE8EXQLG8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth , provider};
export default db;