import { db } from "./firebaseInit";

const getDoc = async (collection, doc) => {
  const docRef = db.collection(collection).doc(doc);

  try {
    const doc = await docRef.get();
    return doc.data();
  } catch (e) {
    throw `getDoc was unable to fetch data` + e;
  }
};

export default getDoc;
