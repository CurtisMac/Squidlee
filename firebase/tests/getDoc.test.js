import getDoc from "../getDoc";
// import { db } from "../firebaseInit";
// jest.mock("../firebaseInit");

test("Should fetch doc from fb", () => {
  // const index = [{ name: "canon", id: 47 }];
  // const fakeResponse = { data: index };
  // db.collection("fake")
  //   .doc("fake")
  //   .doc("fake")
  //   .get()
  //   .mockResolvedValue(fakeResponse);
  return getDoc().then(response => {
    expect(response).toContain("canon");
  });
});
