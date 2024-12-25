// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAB5SxjAsUVNbblD1EQUEef_-Lt4qMHGs",
  authDomain: "myblog-app-ba374.firebaseapp.com",
  projectId: "myblog-app-ba374",
  storageBucket: "myblog-app-ba374.appspot.com",
  messagingSenderId: "609701239069",
  appId: "1:609701239069:web:0c193a0b5d06a11ca369f4"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firedb = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app);

export{firedb,auth,storage};