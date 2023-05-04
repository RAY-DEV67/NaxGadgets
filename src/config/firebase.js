import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {getFirestore} from "firebase/firestore"

// NEW CONFIG ////////////////////////////

import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyCVIED8t-pnYd3qWzCsKVprgK2klO716QQ",
  authDomain: "naxgadgets.firebaseapp.com",
  projectId: "naxgadgets",
  storageBucket: "naxgadgets.appspot.com",
  messagingSenderId: "50159940741",
  appId: "1:50159940741:web:0a57edeb2558b9841ce5ec",
  measurementId: "G-KBRZ6RP81D"
});

// Initialize Firebase
const app = firebaseApp;

const db = firebaseApp.firestore()

// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app)
export const storage = firebase.storage()
export default db


