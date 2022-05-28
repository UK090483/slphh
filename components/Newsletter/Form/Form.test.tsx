import { fireEvent, render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import NewsletterForm from "./NewsletterForm";

const fakeOnSubmit = jest.fn();

describe("NewsletterForm", () => {
  let email: HTMLElement;
  let firstName: HTMLElement;
  let lastName: HTMLElement;
  let company: HTMLElement;
  let submit: HTMLElement;

  beforeEach(() => {
    render(<NewsletterForm onSubmit={fakeOnSubmit} />);
    email = screen.getByLabelText("Email* :");
    firstName = screen.getByLabelText("First Name :");
    lastName = screen.getByLabelText("Last Name :");
    company = screen.getByLabelText("Company :");
    submit = screen.getByText("Submit");
    fakeOnSubmit.mockReset();
  });

  it("should handle Input  ", () => {
    // act(() => {
    //   user.type(email, "konradullrich@me.com");
    // });
    // expect(email).toHaveValue("konradullrich@me.com");
    // act(() => {
    //   fireEvent.click(submit);
    // });
    // expect(fakeOnSubmit).toBeCalledTimes(1);
  });
});
