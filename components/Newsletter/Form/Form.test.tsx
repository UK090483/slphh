import { fireEvent, render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import NewsletterForm from "./NewsletterForm";

describe("NewsletterForm", () => {
  it("should render correctly ", () => {
    render(<NewsletterForm />);

    expect(screen.getByLabelText("Email* :"));
    expect(screen.getByLabelText("First Name :"));
    expect(screen.getByLabelText("Last Name :"));
    expect(screen.getByLabelText("Company :"));
    expect(screen.getByRole("button"));
  });

  it("should validate email  ", () => {
    render(<NewsletterForm />);
    const input = screen.getByLabelText("Email* :");
    act(() => {
      user.type(input, "TestMailAddress");
    });
    expect(input).toHaveValue("TestMailAddress");
    act(() => {
      fireEvent.click(screen.getByRole("button"));
    });
  });
});
