import { auth, db } from "./firebaseInit";

const createUser = (
  email,
  password,
  firstName,
  lastName,
  agreeToPrivacyPolicyAndTerms,
  joinMailingList
) => {
  return new Promise((resolve, reject) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        db.collection("users")
          .doc(response.user.uid)
          .set({
            firstName,
            lastName,
            agreeToPrivacyPolicyAndTerms,
            joinMailingList
          });
      })
      .then(() => resolve("success"))
      .catch(error => reject(error.message));
  });
};

export default createUser;
