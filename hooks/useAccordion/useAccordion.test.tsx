import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import useAccordion from "./useAccordion";

const TestComponent = () => {
  const { ref, maxHeight } = useAccordion();

  return (
    <div data-testid="outer" style={{ maxHeight, overflow: "hidden" }}>
      <div ref={ref} data-testid="inner ">
        Accordion Test Text
      </div>
    </div>
  );
};

describe("useAccordion", () => {
  it("should have init  correct state  ", () => {
    const { result } = renderHook(useAccordion);
    const { isOpen, maxHeight } = result.current;
    expect(isOpen).toBe(false);
    expect(maxHeight).toBe(0);
  });

  it("should act on open ", () => {
    const { result } = renderHook(useAccordion);
    const { open, close, toggle } = result.current;
    act(() => {
      open();
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.maxHeight).toBe(200);

    act(() => {
      close();
    });
    expect(result.current.isOpen).toBe(false);
    expect(result.current.maxHeight).toBe(0);

    act(() => {
      toggle();
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.maxHeight).toBe(200);

    act(() => {
      toggle();
    });
    expect(result.current.isOpen).toBe(false);
    expect(result.current.maxHeight).toBe(0);
  });
});
