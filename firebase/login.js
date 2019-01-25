import { auth } from "./firebaseInit";

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve(true);
      })
      .catch(e => reject(e));
  });
};

export default login;
