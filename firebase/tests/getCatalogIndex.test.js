import getCatalogIndex from "../getCatalogIndex";
import * as firebase from "firebase";
// import { db } from "../firebaseInit";
// jest.mock("../firebaseInit");

test("Should fetch catalog", () => {
  // const index = [{ name: "canon", id: 47 }];
  // const fakeResponse = { data: index };
  // db.collection("fake")
  //   .doc("fake")
  //   .doc("fake")
  //   .get()
  //   .mockResolvedValue(fakeResponse);
  return getCatalogIndex().then(response => {
    expect(response).toContain("canon");
  });
});
