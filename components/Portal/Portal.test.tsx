import { render, screen } from "@testing-library/react";
import Portal from "./Portal";

describe("Portal", () => {
  it("should render", () => {
    render(
      <div>
        <div data-testid="portal" id="app-portal"></div>
        <Portal>
          <div>portalTestContent</div>
        </Portal>
      </div>
    );

    expect(screen.getByTestId("portal")).toHaveTextContent("portalTestContent");
  });
});
