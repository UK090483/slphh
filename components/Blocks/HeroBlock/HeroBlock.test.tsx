import { customRender, screen, testText } from "@tests/test-utils";
import userEvent from "@testing-library/user-event";

import { mockClient } from "@lib/SanityPageBuilder/lib/MockClient/MockClient";
import heroBlockQuery from "./HeroBlockQuery";
import HeroBlock from "./HeroBlock";

const database: any[] = [];

jest.mock("react-textfit", () => {
  return {
    __esModule: true,
    //@ts-ignore
    Textfit: ({ children, onReady }) => {
      return (
        <div data-testid="text-fitMock" onClick={onReady}>
          {children}
        </div>
      );
    },
  };
});

describe("HeroBlock", () => {
  it("query should be valid ", async () => {
    const client = mockClient({ database });
    const res = await client.fetch(`*[_type == "page"]{
      'content':content[]{
        ${heroBlockQuery("en")}
      }
    }`);
  });
  it("should render", () => {
    customRender(<HeroBlock _key="test" />);
    expect(screen.getByTestId("heroBlock"));
  });
  // it("should render text", () => {
  //   customRender(<HeroBlock _key="test" text={[testText()]} />);
  //   expect(screen.getByText("testText"));
  // });
  // it("should render unbreakable ", () => {
  //   customRender(
  //     <HeroBlock _key="test" text={[testText({ marks: ["unbreakable"] })]} />
  //   );

  //   expect(screen.getByText("testText"));
  // });
  // it("should render brake ", async () => {
  //   customRender(
  //     <HeroBlock _key="test" text={[testText({ marks: ["brake"] })]} />
  //   );
  //   userEvent.click(screen.getByTestId("text-fitMock"));
  // });
});
