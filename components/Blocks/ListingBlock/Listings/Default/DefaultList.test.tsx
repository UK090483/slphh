import * as React from "react";
import { mockClient } from "@lib/SanityPageBuilder/lib/MockClient/MockClient";
import { customRender, screen, testImage, fireEvent } from "@tests/test-utils";

import { defaultListItemQuery } from "./defaultListQuery";
import DefaultList from "./DefaultList";
import DefaultListItem from "./DefaultListItem";

import { testItems as filterTestItems } from "../shared/Filter.test";

const testItems = [
  { _id: "testid1", title: "ListItemTestTitle1", tags: "testValue1" },
  { _id: "testid2", title: "ListItemTestTitle2", tags: "testValue2" },
];

const database: any[] = [];

const mockSetState = jest.fn();

describe("DefaultList", () => {
  it("query should be valid ", async () => {
    const client = mockClient({ database });
    const res = await client.fetch(`*[_type == "page"]{
      'content':content[]{
        ${defaultListItemQuery("en")}
      }
    }`);
  });
  it("should render no Items", async () => {
    customRender(<DefaultList />);
    expect(screen.getByTestId("DefaultList"));
  });
  it("should render title", async () => {
    customRender(<DefaultList title="testTitle" />);
    expect(screen.getByText("testTitle"));
  });
  it("should render Filter ", () => {
    customRender(
      <DefaultList title="testTitle" filterItems={filterTestItems} />
    );
    expect(screen.getByTestId("ListingFilter"));
  });
  it("should render Items ", () => {
    customRender(<DefaultList title="testTitle" items={testItems} />);
    expect(screen.getByText("ListItemTestTitle1"));
    expect(screen.getByText("ListItemTestTitle2"));
  });

  test("should filter Items ", () => {
    jest.spyOn(require("react"), "useState").mockImplementationOnce(() => {
      return ["testValue1", () => {}];
    });
    customRender(
      <DefaultList
        title="testTitle"
        items={testItems}
        filterItems={filterTestItems}
      />
    );
    expect(screen.getByText("ListItemTestTitle1"));
    expect(screen.findByText("ListItemTestTitle2")).resolves.toBe({});
    fireEvent.click(screen.getByText("testLabel1"));
  });
});

describe("DefaultListItem", () => {
  it("should render ", () => {
    //@ts-ignore
    customRender(<DefaultListItem />);
    expect(screen.getByTestId("DefaultListItem"));
  });

  it("should render correct", () => {
    customRender(
      <DefaultListItem
        _id="testid"
        description={"testDescription"}
        slug="testSlug"
        subTitle={"testSub"}
        featuredImage={testImage()}
        title="testTitle"
      />
    );
    expect(screen.getByTestId("DefaultListItem"));
    expect(screen.getByText("testDescription"));
    expect(screen.getByText("testTitle"));
    expect(screen.getByAltText("testImage"));
    expect(screen.getByRole("link")).toHaveAttribute("href", "/testSlug");
    expect(screen.getByTestId("DefaultListItemImage")).not.toHaveClass(
      "md:order-2"
    );
  });

  it("should render correct b", () => {
    customRender(
      <DefaultListItem
        _id="testid"
        description={"testDescription"}
        position="right"
        featuredImage={testImage()}
      />
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
    expect(screen.getByTestId("DefaultListItemImage")).toHaveClass(
      "md:order-2"
    );
  });

  it("should handle locale ", () => {
    customRender(<DefaultListItem _id="testid" />);
    expect(screen.getByText("Mehr erfahren"));
    customRender(<DefaultListItem _id="testid" locale="da" />);
    expect(screen.getByText("Læs mere"));
    customRender(<DefaultListItem _id="testid" locale="en" />);
    expect(screen.getByText("read more"));
  });
});
