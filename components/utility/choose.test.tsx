import choose from "./choose";

type Input = "a" | "b" | "c" | null | undefined;

let input: Input;

describe("choose", () => {
  it("return empty string", () => {
    expect(choose(input, {})).toBe("");
    expect(choose(input, { getA: "a" })).toBe("");
  });
  it("should return with string input", () => {
    input = "a";
    expect(choose(input, { getA: "a" })).toBe("getA");
    input = "b";
    expect(choose(input, { getA: "a" })).toBe("");
    expect(choose(input, { getA: "a", getB: "b" })).toBe("getB");
    expect(choose(input, { getA: "a", "getB asString": "b" })).toBe(
      "getB asString"
    );
  });
  it("should return with array input", () => {
    input = undefined;
    expect(choose(input, { getAorB: ["a", "b"] })).toBe("");
    input = "a";
    expect(choose(input, { getAorB: ["a", "b"] })).toBe("getAorB");
    input = undefined;
    expect(choose(input, { getAorB: ["a", "b", "none"] })).toBe("getAorB");
  });
});
