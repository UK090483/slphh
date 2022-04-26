import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("type click should render ", () => {
    render(<Button onClick={() => {}}>test</Button>);
  });
  it("type click should show label", () => {
    render(<Button onClick={() => {}}>test</Button>);
    expect(screen.getByText("test"));
  });
  it("type click should handle click", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>test</Button>);

    fireEvent.click(screen.getByText("test"));
    expect(handleClick).toBeCalledTimes(1);
  });
});
