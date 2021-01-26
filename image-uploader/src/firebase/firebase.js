import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDucU_c-5WIkSm1jyCSQUZYwsYwqmhjCPo",
  authDomain: "image-loader-58c58.firebaseapp.com",
  projectId: "image-loader-58c58",
  storageBucket: "image-loader-58c58.appspot.com",
  messagingSenderId: "268243562847",
  appId: "1:268243562847:web:23928e0bb349fc98eac6ea",
  measurementId: "G-TSKH3ZZCQW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
// firebase.analytics();

export { storage, firebase as default };
