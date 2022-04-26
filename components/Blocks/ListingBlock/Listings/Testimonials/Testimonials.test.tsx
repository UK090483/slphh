import { mockClient } from "@lib/SanityPageBuilder/lib/MockClient/MockClient";
import { render } from "@testing-library/react";

import { testimonialQuery } from "./testimonialQuery";

const database: any[] = [];

describe("TestimonialsListing", () => {
  it("query should be valid ", async () => {
    const client = mockClient({ database });
    const res = await client.fetch(`*[_type == "page"]{
      'content':content[]{
        ${testimonialQuery("en")}
      }
    }`);
  });
  // it("should render no Items", async () => {
  //   render(<ListingBlock _type="listing" _key="test" />);
  // });
});
