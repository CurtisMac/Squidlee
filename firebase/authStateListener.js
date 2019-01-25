import { auth } from "./firebaseInit";

const authStateListener = cb => {
  auth.onAuthStateChanged(user => {
    cb(user);
  });
};

export default authStateListener;
