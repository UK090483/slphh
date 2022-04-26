import { customRender, fireEvent, screen } from "@tests/test-utils";
import Filter from "./Filter";

const initItem = { label: "All", value: "all" };
const first = { label: "testLabel1", value: "testValue1" };
const second = { label: "testLabel2", value: "testValue2" };
export const testItems = [first, second];

describe("ListingFilter", () => {
  it("smoke ", () => {
    customRender(<Filter items={[]} onChange={() => {}} />);
    expect(screen.getByTestId("ListingFilter"));
    expect(screen.getByRole("radio")).toHaveTextContent("All");
  });

  it("should render Items correctly a", () => {
    customRender(<Filter items={testItems} onChange={() => {}} />);
    expect(screen.getByText("All")).toHaveAttribute("aria-checked", "true");
    expect(screen.getByText(first.label)).toHaveAttribute(
      "aria-checked",
      "false"
    );
    expect(screen.getByText(second.label)).toHaveAttribute(
      "aria-checked",
      "false"
    );
  });
  it("should render Items correctly b", () => {
    customRender(
      <Filter items={testItems} active={first.value} onChange={() => {}} />
    );
    expect(screen.getByText("All")).toHaveAttribute("aria-checked", "false");
    expect(screen.getByText(first.label)).toHaveAttribute(
      "aria-checked",
      "true"
    );
    expect(screen.getByText(second.label)).toHaveAttribute(
      "aria-checked",
      "false"
    );
  });

  it("should handle click ", () => {
    const onChange = jest.fn();
    customRender(<Filter items={testItems} onChange={onChange} />);

    fireEvent.click(screen.getByText(first.label));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toBeCalledWith(first);

    fireEvent.click(screen.getByText(second.label));
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toBeCalledWith(second);
  });

  it("should handle KeyboardInput", () => {
    const onChange = jest.fn();
    customRender(<Filter items={testItems} onChange={onChange} />);
    fireEvent.focus(screen.getByTestId("ListingFilter"));

    fireEvent.keyDown(screen.getByTestId("ListingFilter"), {
      key: "ArrowRight",
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toBeCalledWith(first);

    fireEvent.keyDown(screen.getByTestId("ListingFilter"), {
      key: "ArrowUp",
    });
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toBeCalledWith(first);

    fireEvent.keyDown(screen.getByTestId("ListingFilter"), {
      key: "ArrowDown",
    });
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange).toBeCalledWith(second);

    fireEvent.keyDown(screen.getByTestId("ListingFilter"), {
      key: "ArrowLeft",
    });
    expect(onChange).toHaveBeenCalledTimes(4);
    expect(onChange).toBeCalledWith(second);
  });

  it("should handle KeyboardInput last Item", () => {
    const onChange = jest.fn();
    customRender(
      <Filter items={testItems} active={second.value} onChange={onChange} />
    );
    fireEvent.focus(screen.getByTestId("ListingFilter"));

    fireEvent.keyDown(screen.getByTestId("ListingFilter"), {
      key: "ArrowRight",
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toBeCalledWith(initItem);

    fireEvent.keyDown(screen.getByTestId("ListingFilter"), {
      key: "ArrowUp",
    });
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toBeCalledWith(initItem);

    fireEvent.keyDown(screen.getByTestId("ListingFilter"), {
      key: "ArrowDown",
    });
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange).toBeCalledWith(first);

    fireEvent.keyDown(screen.getByTestId("ListingFilter"), {
      key: "ArrowLeft",
    });
    expect(onChange).toHaveBeenCalledTimes(4);
    expect(onChange).toBeCalledWith(first);
  });
});
