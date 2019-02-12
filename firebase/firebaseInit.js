import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();
const auth = firebase.auth();
const fbFunction = firebase.functions();

export { db, auth, fbFunction };
