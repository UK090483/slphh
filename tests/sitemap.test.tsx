import { ServerResponse } from "http";
import { getServerSideProps } from "../pages/sitemap.xml";
import * as Sanity from "@lib/SanityService/sanity.server";

jest.mock("@lib/SanityService/sanity.server");

describe("Sitemap", () => {
  it("should render no Lang ", async () => {
    const getClientMock = jest.spyOn(Sanity, "getSanityClient");
    getClientMock.mockReturnValue({
      //@ts-ignore
      fetch: async () => [{ slug: "testSlug1" }, { slug: "testSlug2" }],
    });
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2020, 3, 1));
    let smRes: any;
    const res = {
      setHeader: () => {},
      write: (sm: string) => (smRes = sm),
      end: () => {},
    } as unknown as ServerResponse;
    //@ts-ignore
    await getServerSideProps({ res });
    expect(smRes).toMatchSnapshot();
  });
});
