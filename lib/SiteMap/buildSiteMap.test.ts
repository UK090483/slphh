import buildSitemap from "./buildSitemap";

describe("buildSiteMap", () => {
  it("should render Pages ", async () => {
    const res = await buildSitemap({
      hostname: "https://testurl",
      pages: [
        { slug: "testPage1", slug_t: "testSlug1t" },
        { slug: "testPage2" },
      ],
    });

    expect(res).toMatchSnapshot();
  });
});
