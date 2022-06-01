import CleverReach from "./CleverReach";

const getCleverReach = (addEnv: boolean = true) => {
  if (addEnv) {
    process.env.CLEVER_REACH_CLIENT_ID = "dev";
    process.env.CLEVER_REACH_CLIENT_SECRET = "fg";
    process.env.CLEVER_REACH_GROUPE_ID = "fgdfg";
    process.env.CLEVER_REACH_FORM_ID = "jjkh";
  }
  return new CleverReach();
};

const fetchMock = (global.fetch = jest.fn());

const Mock = ({
  ok = true,
  status = 200,
  json = {},
  text = {},
}: {
  ok?: boolean;
  status?: number;
  json?: any;
  text?: any;
}) => {
  fetchMock.mockImplementation(() => {
    return Promise.resolve({
      status,
      statusText: "testStatus Text",
      ok,
      json: () => Promise.resolve(json),
      text: () => Promise.resolve(text),
    });
  });
};

describe("Clever Reach", () => {
  const OLD_ENV = process.env;
  afterAll(() => {
    process.env = OLD_ENV;
  });

  it("should fail with missing env ", () => {
    let hasThrown = false;
    try {
      getCleverReach(false);
    } catch (error) {
      hasThrown = true;
    }
    expect(hasThrown).toBeTruthy();
  });

  it("should get token", async () => {
    getCleverReach();
    Mock({ json: { access_token: "testToken" } });
    const cR = new CleverReach();
    const res = await cR.getToken();
    expect(res).toBe("testToken");
  });
});
