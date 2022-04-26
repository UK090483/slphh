import { customRender } from "@tests/test-utils";
import Logo from "./Logo";

describe("Logo", () => {
  it("smoke", () => {
    customRender(<Logo />);
  });
});
