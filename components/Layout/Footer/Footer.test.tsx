import { customRender, screen, act } from "@tests/test-utils";
import Footer from "./Footer";

describe("Footer", () => {
  it(" should render as expected ", async () => {
    const promise = Promise.resolve();
    customRender(<Footer />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    await act(() => promise);
  });

  it(" should render imprintPage ", async () => {
    const promise = Promise.resolve();
    customRender(<Footer />, {
      data: {
        footer: {},
      },
    });
    expect(screen.getByTestId("footer")).toBeInTheDocument();

    expect(screen.getByText("testLabel")).toHaveAttribute("href", "testHref");
    await act(() => promise);
  });
});
