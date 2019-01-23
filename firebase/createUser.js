import firebase from "./firebase";

const createUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      console.log(error);
    });
};

export default createUser;
