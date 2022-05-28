import { fireEvent, render, screen } from "@testing-library/react";
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
    user.type(screen.getByLabelText("Email* :"), "TestMail");
    user.click(screen.getByRole("button"));
  });
});
