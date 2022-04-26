import { customRender } from "./test-utils";
import App from "../pages/_app";

const TestComponent: React.FC = () => {
  return <div>Test</div>;
};

describe("App", () => {
  test("smoke", () => {
    // customRender(
    //   <App
    //     Component={TestComponent}
    //     pageProps={{ data: {}, id: "", query: "", preview: false }}
    //   />
    // );
  });
});
