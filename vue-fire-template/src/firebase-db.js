import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyD2J8RQqu2w6J2B6e4Mbn4ty_QEsHhVF0M",
    authDomain: "post-app-7cb59.firebaseapp.com",
    databaseURL: "https://post-app-7cb59.firebaseio.com",
    projectId: "post-app-7cb59",
    storageBucket: "post-app-7cb59.appspot.com",
    messagingSenderId: "508009210681",
    appId: "1:508009210681:web:abcd78e05897ce987afee8"
  })
  .firestore();

export const postRef = db.collection("posts");
