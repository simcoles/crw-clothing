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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  const hashedCollection = transformedCollection.reduce(
    (accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },
    {}
  );
  return hashedCollection;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
