import { db } from "./firebaseInit";

const getCatalogIndex = () => {
  var docRef = db.collection("inventoryCanada").doc("categoryIndex");
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        let index = JSON.parse(doc.data().data);
        console.log("Document data:", index.data);
        return index.data;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};

export default getCatalogIndex;
