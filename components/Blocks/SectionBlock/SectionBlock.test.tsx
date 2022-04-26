import { mockClient } from "@lib/SanityPageBuilder/lib/MockClient/MockClient";
import sectionBlockQuery from "./SectionBlockQuery";
import { customRender, screen, testImage, testText } from "@tests/test-utils";
import SectionBlock from "./SectionBlock";

const database: any[] = [];

describe("SectionBlock", () => {
  it("query should be valid ", async () => {
    const client = mockClient({ database });
    await client.fetch(`*[_type == "page"]{
      'content':content[]{
        ${sectionBlockQuery("en")}
      }
    }`);
  });
  it("smoke", () => {
    customRender(<SectionBlock _key="testKey" />);
    expect(screen.getByTestId("sectionBlock"));
  });
  it("renders title to id", () => {
    customRender(<SectionBlock _key="testKey" title="testTitle" />);
    expect(screen.getByTestId("sectionBlock")).toHaveAttribute(
      "id",
      "testTitle"
    );
  });
  it("renders Image", () => {
    customRender(<SectionBlock _key="testKey" image={testImage()} />);
    expect(screen.getByAltText("testImage"));
  });
  it("renders Image l", () => {
    customRender(
      <SectionBlock _key="testKey" image={testImage()} content={testText()} />
    );
    expect(screen.getByAltText("testImage"));
  });
  it("renders Image r", () => {
    customRender(
      <SectionBlock
        _key="testKey"
        image={testImage()}
        content={testText()}
        imagePosition="r"
      />
    );
    expect(screen.getByAltText("testImage"));
  });
  it("renders content", () => {
    customRender(<SectionBlock _key="testKey" content={testText()} />);
    expect(screen.getByText("testText"));
  });
});
