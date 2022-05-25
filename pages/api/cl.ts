import { NextApiRequest, NextApiResponse } from "next";

const token_url = "https://rest.cleverreach.com/oauth/token.php";
const clientId = process.env.CLEVER_REACH_CLIENT_ID;
const clientSecret = process.env.CLEVER_REACH_CLIENT_SECRET;
const groupID = "526730";
const formID = "325411";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user_agent = req.headers["user-agent"] || "1";
  const user_ip = req.headers["x-forwarded-for"]?.toString() || "1";
  const referer = req.headers["host"] || "1";
  const doidata = { user_agent, user_ip, referer };

  const data = JSON.parse(req.body);

  const email = data.email;
  if (!email) return res.json({ error: "missing email" });

  const token = await getToken();
  if (!token) return res.json({ error: "no token" });

  if (!(await addRecipient(groupID, token, { email })))
    return res.json({ error: "not able to create recipient" });

  if (!(await activateRecipient(formID, token, { email, doidata }))) {
    return res.json({ error: "not able to activate recipient" });
  }
  return res.json({ success: true });
}

const addRecipient = async (
  groupID: string,
  token: string,
  data: { email: string }
) => {
  return await cr({
    url: `groups.json/${groupID}/receivers`,
    token,
    method: "POST",
    data: {
      email: data.email,
      registered: Date.now(),
      activated: 0,
    },
  });
};

const activateRecipient = async (
  formID: string,
  token: string,
  data: {
    email: string;
    doidata: { user_ip: string; referer: string; user_agent: string };
  }
) => {
  return await cr({
    url: `forms/${formID}/send/activate`,
    token,
    method: "POST",
    data,
  });
};

const cr = async ({
  url,
  token,
  data,
  method = "GET",
}: {
  url: string;
  token: string;
  data?: any;
  method?: "GET" | "POST";
}) => {
  try {
    const fetchResult = await fetch(
      `https://rest.cleverreach.com/v3/${url}.json`,
      {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        ...(data ? { body: JSON.stringify(data) } : {}),
      }
    );
    console.log(fetchResult.status);
    console.log(fetchResult.statusText);
    if (fetchResult.ok) {
      const json = await fetchResult.json();

      return json as { [t: string]: any };
    } else {
      console.log(await fetchResult.text());
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getToken = async () => {
  const fetchResult = await fetch(token_url, {
    method: "POST",
    headers: {
      Authorization: `Basic   ${new Buffer(
        clientId + ":" + clientSecret
      ).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ grant_type: "client_credentials" }),
  });
  if (fetchResult.ok) {
    const json = await fetchResult.json();
    if (json["access_token"]) {
      return json["access_token"] as string;
    }
  }
  return null;
};
