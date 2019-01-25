import { auth } from "./firebaseInit";

const logout = () => {
  return new Promise((resolve, reject) => {
    auth
      .signOut()
      .then(() => {
        resolve(true);
      })
      .catch(e => {
        reject(e);
      });
  });
};

export default logout;
