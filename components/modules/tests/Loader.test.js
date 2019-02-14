import React from "react";
import Loader from "../Loader";
import renderer from "react-test-renderer";

test("Loader should animate", () => {
  const component = renderer.create(<Loader />);
  let tree = component.toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="Loader__LoadingDots-sc-1e7avds-0 jiLYUF"
>
  <div
    className="Loader__LoadingDots-sc-1e7avds-0 Loader__Dot-sc-1e7avds-1 iSVjoy"
  />
  <div
    className="Loader__LoadingDots-sc-1e7avds-0 Loader__Dot-sc-1e7avds-1 iSVjoy"
  />
  <div
    className="Loader__LoadingDots-sc-1e7avds-0 Loader__Dot-sc-1e7avds-1 iSVjoy"
  />
</div>
`);
});
