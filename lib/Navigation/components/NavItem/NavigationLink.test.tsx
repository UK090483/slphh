import { render, screen } from "@testing-library/react";

import NavigationLink from "./NavigationLink";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("NavigationLink", () => {
  it("smoke  ", () => {
    useRouter.mockImplementationOnce(() => ({
      query: { locale: "de" },
    }));
    render(<NavigationLink />);
  });
});
