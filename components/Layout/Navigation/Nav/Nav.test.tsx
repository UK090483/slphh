import { render, screen, fireEvent } from "@testing-library/react";

import Nav from "./Nav";

const testItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

describe("Nav", () => {
  it(" should render Nav items ", () => {
    // render(<Nav items={testItems} />);
    // expect(screen.getByRole("navigation")).toHaveTextContent("Home");
    // expect(screen.getByRole("navigation")).toHaveTextContent("About");
    // expect(screen.getByRole("navigation")).toHaveTextContent("Contact");
  });

  // it("should open/close Menu overlay", () => {
  //   const { queryByTestId } = render(
  //     <StoreContextProvider>
  //       <Nav items={testItems} />
  //     </StoreContextProvider>
  //   );

  //   expect(queryByTestId("menu-overlay")).toBeNull();
  //   fireEvent.click(screen.getByTestId("menu-overlay-toggle"));
  //   expect(queryByTestId("menu-overlay")).toBeTruthy();
  //   fireEvent.click(screen.getByTestId("menu-overlay-toggle"));

  //   // wait for animation to finish
  //   setTimeout(() => {
  //     expect(queryByTestId("menu-overlay")).toBeNull();
  //   }, 1500);
  // });
});
