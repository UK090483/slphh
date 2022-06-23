import { customRender, screen } from "@tests/test-utils";
import { mockClient } from "@lib/SanityPageBuilder/lib/MockClient/MockClient";
import heroBlockQuery from "./HeroBlockQuery";
import HeroBlock from "./HeroBlock";

const database: any[] = [];

describe("HeroBlock", () => {
  it("query should be valid ", async () => {
    const client = mockClient({ database });
    await client.fetch(`*[_type == "page"]{
      'content':content[]{
        ${heroBlockQuery("en")}
      }
    }`);
  });
  it("should render", () => {
    customRender(<HeroBlock _key="test" />);
    expect(screen.getByTestId("heroBlock"));
  });
});
