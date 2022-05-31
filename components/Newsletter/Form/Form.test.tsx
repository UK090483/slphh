import { fireEvent, render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import RawForm from "./RawForm";

const mockLogin = jest.fn();

const inputs = [
  { name: "email" },
  { name: "firstName" },
  { name: "lastName" },
  { name: "company" },
];

describe("NewsletterForm", () => {
  let email: HTMLElement;
  let firstName: HTMLElement;
  let lastName: HTMLElement;
  let company: HTMLElement;
  let submit: HTMLElement;

  // beforeEach(() => {
  //   act(() => {
  //     render(<RawForm handleSubmit={mockLogin} />);
  //   });

  //   email = screen.getByLabelText("Email* :");
  //   firstName = screen.getByLabelText("First Name :");
  //   lastName = screen.getByLabelText("Last Name :");
  //   company = screen.getByLabelText("Company :");
  //   submit = screen.getByText("Submit");
  //   mockLogin.mockReset();
  // });

  it("should handle Input  ", async () => {
    // act(() => {
    //   user.type(email, "konradullrich@me.com");
    // });
    // expect(email).toHaveValue("konradullrich@me.com");
    // await act(() => {
    //   fireEvent.submit(submit);
    // });
    //expect(fakeOnSubmit).toBeCalledTimes(1);
  });
});
