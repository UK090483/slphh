import { mockClient } from "@lib/SanityPageBuilder/lib/MockClient/MockClient";
import { customRender, screen } from "@tests/test-utils";
import { EventsListQuery } from "./EventsListQuery";
import EventList from "./EventsList";

import EventsListItem from "./EventsListItem";

const database: any[] = [];

describe("EventsListing", () => {
  it("query should be valid ", async () => {
    const client = mockClient({ database });
    const res = await client.fetch(`*[_type == "page"]{
      'content':content[]{
        ${EventsListQuery("en")}
      }
    }`);
  });
  it("should render no Items", async () => {
    customRender(<EventList />);
    expect(screen.getByTestId("EventList")).toBeInTheDocument();
  });
  it("should render title", async () => {
    customRender(<EventList title="testTitle" />);
    expect(screen.getByText("testTitle")).toBeInTheDocument();
  });

  it("should render items", async () => {
    customRender(
      <EventList items={[{ date: "", endDate: "", name: "testListitem" }]} />
    );
    expect(screen.getByText("testListitem")).toBeInTheDocument();
  });
});

describe("EventsListingItem", () => {
  it("should render ", () => {
    //@ts-ignore
    customRender(<EventsListItem />);
    expect(screen.getByTestId("EventsListItem")).toBeInTheDocument();
  });

  it("should render ", () => {
    customRender(
      <EventsListItem
        _id="testid"
        description={"testDescription"}
        link="testLink"
        name="testName"
      />
    );
    expect(screen.getByTestId("EventsListItem")).toBeInTheDocument();
    expect(screen.getByText("testDescription")).toBeInTheDocument();
    expect(screen.getByText("testName")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "testLink");
  });

  it("should render content", () => {
    customRender(<EventsListItem _id="testid" content={[{}, {}]} />);
  });
});
