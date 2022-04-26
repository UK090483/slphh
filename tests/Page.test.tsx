import { customRender } from "./test-utils";
import Page from "../pages/[[...slug]]";

describe("Page", () => {
  it("smoke", () => {
    customRender(<Page />);
  });
});
