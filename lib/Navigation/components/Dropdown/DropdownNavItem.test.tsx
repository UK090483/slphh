import { NavigationContextProvider } from "../../NavigationContext";
import { fireEvent, render, screen } from "@testing-library/react";

import DropdownNavItem from "./DropdownNavItem";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const customRender = (items?: boolean) => {
  render(
    <NavigationContextProvider>
      <DropdownNavItem
        id="test"
        {...(items
          ? { items: [{ label: "testItem", link: { href: "testLink" } }] }
          : {})}
      >
        testLabel
      </DropdownNavItem>
    </NavigationContextProvider>
  );
};

describe("DropdownNavItem", () => {
  it(" should render not if no items  ", () => {
    // customRender();
    expect(screen.queryByTestId("DropdownNavItem")).toBeFalsy();
  });

  it(" should render correctly ", () => {
    customRender(true);
    expect(screen.queryByTestId("DropdownNavItem_test")).toBeInTheDocument();
    expect(screen.getByText("testLabel")).toBeInTheDocument();
    expect(screen.queryByText("testItem")).toBeFalsy();
  });

  it(" should render overlay on mouseEnter  ", () => {
    useRouter.mockImplementationOnce(() => ({
      query: { locale: "de" },
    }));
    customRender(true);

    const element = screen.queryByTestId("DropdownNavItem_test");
    if (element) {
      fireEvent.mouseEnter(element);
    }
    expect(screen.getByText("testLabel")).toBeInTheDocument();
    expect(screen.queryByText("testItem")).toBeInTheDocument();

    if (element) {
      fireEvent.mouseLeave(element);
    }
    expect(screen.queryByText("testItem")).not.toBeInTheDocument();
  });
  it(" should render overlay on click  ", () => {
    useRouter.mockImplementationOnce(() => ({
      query: { locale: "de" },
    }));
    customRender(true);
    const element = screen.queryByTestId("DropdownNavItem_test");
    if (element) {
      fireEvent.click(element);
    }
    expect(screen.getByText("testLabel")).toBeInTheDocument();
    expect(screen.queryByText("testItem")).toBeInTheDocument();

    if (element) {
      fireEvent.click(element);
    }
    expect(screen.queryByText("testItem")).not.toBeInTheDocument();
  });
});
