import { mockClient } from "@lib/SanityPageBuilder/lib/MockClient/MockClient";
import { customRender as cRender, screen } from "@tests/test-utils";
import { EventsListQuery } from "./EventsListQuery";
import EventList from "./EventsList";

import EventsListItem, { IEventsListItemProps } from "./EventsListItem";
import { ListingBlockContextProvider } from "../../listingContext";
import { ListingBlogResult } from "../../listingBlockQuery";

const database: any[] = [];

const customRender = (props?: Partial<ListingBlogResult>) => {
  cRender(
    <ListingBlockContextProvider _key="" _type="listing" {...props}>
      <EventList />
    </ListingBlockContextProvider>
  );
};

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
    customRender();
    expect(screen.getByTestId("EventList")).toBeInTheDocument();
  });
  it("should render title", async () => {
    customRender({ title: "testTitle", showTitle: true });
    expect(screen.getByText("testTitle")).toBeInTheDocument();
  });

  it("should render items", async () => {
    customRender({
      //@ts-ignore
      eventItems: [{ date: "", endDate: "", name: "testListitem" }],
    });
    expect(screen.getByText("testListitem")).toBeInTheDocument();
  });
});

const customRenderItem = (props?: Partial<IEventsListItemProps>) => {
  cRender(
    <ListingBlockContextProvider _key="" _type="listing" {...props}>
      <EventsListItem {...{ _id: "testId", ...props }} />
    </ListingBlockContextProvider>
  );
};

describe("EventsListingItem", () => {
  it("should render ", () => {
    //@ts-ignore
    customRenderItem();
    expect(screen.getByTestId("EventsListItem")).toBeInTheDocument();
  });

  it("should render ", () => {
    customRenderItem({
      _id: "testid",
      description: "testDescription",
      link: "testLink",
      name: "testName",
    });

    expect(screen.getByTestId("EventsListItem")).toBeInTheDocument();
    expect(screen.getByText("testDescription")).toBeInTheDocument();
    expect(screen.getByText("testName")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "testLink");
  });

  it("should render content", () => {
    customRenderItem({ content: [{}, {}] });
  });
});
