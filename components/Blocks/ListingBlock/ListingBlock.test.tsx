import { mockClient } from "@lib/SanityPageBuilder/lib/MockClient/MockClient";
import { customRender } from "@tests/test-utils";
import ListingBlock from "./ListingBlock";
import listingBlockQuery, { ListingBlogResult } from "./listingBlockQuery";

const database: any[] = [];

const render = (props: Partial<ListingBlogResult>) => {
  customRender(<ListingBlock {...props} _type="listing" _key="test" />);
};

describe("ListingBlock", () => {
  it("query should be valid ", async () => {
    const client = mockClient({ database });
    const res = await client.fetch(`*[_type == "page"]{
      'content':content[]{
        ${listingBlockQuery("en")}
      }
    }`);
  });
  it("should render no Items", async () => {
    customRender(<ListingBlock _type="listing" _key="test" />);
  });

  it("should render default", async () => {
    render({ contentType: "documentations" });

    render({ contentType: "documentations", showTitle: true });
  });

  it("should render testimonials", async () => {
    render({ contentType: "testimonials" });
  });

  it("should render persons", async () => {
    render({ contentType: "persons" });
    render({ contentType: "persons", showTitle: true });
  });
  it("should render events", async () => {
    render({ contentType: "event" });
    render({ contentType: "event", showTitle: true });
  });
});
