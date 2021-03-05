import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCWIsoAax-SstmySLvEv8qrjAyvaFoKxwU",
  authDomain: "visionary-db.firebaseapp.com",
  projectId: "visionary-db",
  storageBucket: "visionary-db.appspot.com",
  messagingSenderId: "982554744514",
  appId: "1:982554744514:web:b2491e5e8507ee3684cd5b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;