import { EventsListItemResult } from "./EventsListQuery";
import { isDone, parseDate, parseItem, prepareItems } from "./helper";

describe("eventList helper", () => {
  it("isDone should give right results without endDate", () => {
    expect(isDone({}, "2022-05-04")).toBe(false);
    expect(isDone({ date: "2022-05-05" }, "2022-05-04")).toBe(false);
    expect(isDone({ date: "2022-05-04" }, "2022-05-04")).toBe(false);
    expect(isDone({ date: "2022-05-03" }, "2022-05-04")).toBe(true);
  });

  it("isDone should give right results with endDate", () => {
    expect(isDone({ endDate: "2022-05-05" }, "2022-05-04")).toBe(false);
    expect(
      isDone({ date: "2022-05-05", endDate: "2022-05-05" }, "2022-05-04")
    ).toBe(false);
    expect(
      isDone({ date: "2022-05-05", endDate: "2022-05-04" }, "2022-05-04")
    ).toBe(false);
    expect(
      isDone({ date: "2022-05-05", endDate: "2022-05-03" }, "2022-05-04")
    ).toBe(true);
  });

  it("parse should give right results with endDate", () => {
    expect(parseDate("2022-05-04")).toBe("4.5.2022");
    expect(parseDate("noValidDate")).toBe(undefined);
    //@ts-ignore
    expect(parseDate()).toBe(undefined);
  });

  it("parseItem", () => {
    expect(parseItem({ _id: "testId" }, '"2022-05-04"')).toStrictEqual({
      _id: "testId",
      date: undefined,
      done: false,
      endDate: undefined,
    });
    expect(
      parseItem(
        { _id: "testId", date: "2022-05-05", endDate: "2022-05-03" },
        '"2022-05-04"'
      )
    ).toStrictEqual({
      _id: "testId",
      date: "5.5.2022",
      done: false,
      endDate: "3.5.2022",
    });
  });
  it("parseItems", () => {
    prepareItems([{ _id: "testId" }]);
  });
});
