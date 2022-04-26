import { customRender } from "./test-utils";
import Document from "../pages/_document";

const TestComponent: React.FC = () => {
  return <div>Test</div>;
};

describe("Document", () => {
  test("smoke", () => {
    // customRender(<Document />);
  });
});
