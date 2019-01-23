import firebase from "firebase/app";
import "firebase/auth";
//import 'firebase/firestore'

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
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
