import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCxoISpo7QzmP6VasjeqvIEuAHyu-hI1R4",
  authDomain: "crwn-db-a221c.firebaseapp.com",
  databaseURL: "https://crwn-db-a221c.firebaseio.com",
  projectId: "crwn-db-a221c",
  storageBucket: "crwn-db-a221c.appspot.com",
  messagingSenderId: "1037244407663",
  appId: "1:1037244407663:web:8bdd1cb2680f3878d0929a",
  measurementId: "G-EGW9VFC6EF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmpt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
