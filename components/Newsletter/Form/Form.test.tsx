import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import Form from "./NewsletterForm";

const mockLogin = jest.fn();

const testData = {
  company: "testCompany",
  email: "test@tester.com",
  "family-name": "testing",
  "first-name": "tester",
  description: "Hamburg-based:SME/Corporate",
};

describe("NewsletterForm", () => {
  let email: HTMLElement;
  let firstName: HTMLElement;
  let lastName: HTMLElement;
  let company: HTMLElement;
  let description: HTMLElement;
  let submit: HTMLElement;

  beforeEach(async () => {
    await act(async () => {
      render(<Form onSubmit={mockLogin} />);
    });
    email = screen.getByLabelText("Email* :");
    firstName = screen.getByLabelText("First Name :");
    lastName = screen.getByLabelText("Last Name :");
    company = screen.getByLabelText("Company :");
    description = screen.getByLabelText("We are a* :");
    submit = screen.getByText("Submit");
    mockLogin.mockReset();
  });

  it("should handle Input", async () => {
    mockLogin.mockImplementation(
      () => new Promise<boolean>((resolve, reject) => resolve(true))
    );
    act(() => {
      user.type(email, testData.email);
      user.type(firstName, testData["first-name"]);
      user.type(lastName, testData["family-name"]);
      user.type(company, testData["company"]);
      user.click(description);
    });

    act(() => {
      user.click(screen.getAllByRole("option")[0]);
    });

    await act(async () => {
      await fireEvent.click(submit);
    });
    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockLogin).toBeCalledWith(testData);
  });

  it("should validate email", async () => {
    mockLogin.mockImplementation(
      () => new Promise<boolean>((resolve, reject) => resolve(true))
    );
    await act(async () => {
      user.type(firstName, testData["first-name"]);
      user.type(lastName, testData["family-name"]);
      user.type(company, testData["company"]);
      user.click(description);
    });

    act(() => {
      user.click(screen.getAllByRole("option")[0]);
    });

    await act(async () => {
      await fireEvent.click(submit);
    });
    expect(mockLogin).toHaveBeenCalledTimes(0);
    expect(screen.getByTestId("error-message-email")).toHaveTextContent(
      "email is required"
    );

    act(() => {
      user.type(email, "b");
    });
    await act(async () => {
      await fireEvent.click(submit);
    });
    expect(mockLogin).toHaveBeenCalledTimes(0);
    expect(screen.getByTestId("error-message-email")).toHaveTextContent(
      "looks like there is something wrong with the email"
    );
    await act(async () => {
      user.type(email, testData.email);
    });

    await act(async () => {
      await fireEvent.click(submit);
    });
    expect(screen.queryByTestId("error-message-email")).not.toBeInTheDocument();
    expect(mockLogin).toHaveBeenCalledTimes(1);
  });

  it("should show loading message ", async () => {
    mockLogin.mockImplementation(
      () =>
        new Promise<boolean>((resolve, reject) =>
          setTimeout(() => {
            resolve(true);
          }, 200)
        )
    );
    await act(async () => {
      user.type(email, testData.email);
      user.click(description);
    });

    act(() => {
      user.click(screen.getAllByRole("option")[0]);
    });

    await act(async () => {
      await fireEvent.click(submit);
    });
    expect(screen.getByTestId("form-message-loading")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId("form-message-success")).toBeInTheDocument();
    });
  });

  it("should show success message ", async () => {
    mockLogin.mockImplementation(
      () => new Promise<boolean>((resolve, reject) => resolve(true))
    );
    await act(async () => {
      user.type(email, testData.email);
      user.click(description);
    });

    act(() => {
      user.click(screen.getAllByRole("option")[0]);
    });

    await act(async () => {
      await fireEvent.click(submit);
    });
    expect(screen.getByTestId("form-message-success")).toBeInTheDocument();
  });
  it("should show error message ", async () => {
    mockLogin.mockImplementation(
      () => new Promise<boolean>((resolve, reject) => resolve(false))
    );
    await act(async () => {
      user.type(email, testData.email);
      user.click(description);
    });

    act(() => {
      user.click(screen.getAllByRole("option")[0]);
    });

    await act(async () => {
      await fireEvent.click(submit);
    });
    expect(screen.getByTestId("form-message-error")).toBeInTheDocument();
  });
});
