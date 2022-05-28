import { NextApiRequest, NextApiResponse } from "next";
import CleverReach from "./CleverReach";

const token_url = "https://rest.cleverreach.com/oauth/token.php";
const clientId = process.env.CLEVER_REACH_CLIENT_ID;
const clientSecret = process.env.CLEVER_REACH_CLIENT_SECRET;
const groupID = process.env.CLEVER_REACH_GROUPE_ID;
const formID = process.env.CLEVER_REACH_FORM_ID;

export default async function cleverReachHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user_agent = req.headers["user-agent"] || "1";
  const user_ip = req.headers["x-forwarded-for"]?.toString() || "1";
  const referer = req.headers["host"] || "1";
  const doidata = { user_agent, user_ip, referer };

  const cR = new CleverReach();
  // if (!formID) {
  //   console.error("formID missing");
  //   return res.json({ error: "formID missing" });
  // }
  // if (!groupID) {
  //   console.error("groupID missing");
  //   return res.json({ error: "groupID missing" });
  // }

  const data = JSON.parse(req.body);
  const email = data.email;
  if (!email) return res.json({ error: "missing email" });

  const recipientData = {
    email,
    global_attributes: {
      firstname: data["first-name"],
      lastname: data["family-name"],
      unternehmen: data["company"],
      name:
        data["first-name"] && data["family-name"]
          ? `${data["first-name"]} ${data["family-name"]}`
          : undefined,
    },
  };

  const token = await getToken();
  if (!token) return res.json({ error: "no token" });

  if (!(await cR.addRecipient(recipientData)))
    return res.json({ error: "not able to create recipient" });

  if (!(await cR.activateRecipient({ email, doidata }))) {
    return res.json({ error: "not able to activate recipient" });
  }
  return res.json({ success: true });
}

const addRecipient = async (
  groupID: string,
  token: string,
  data: {
    email: string;
    global_attributes: {
      firstname?: string;
      lastname?: string;
      unternehmen?: string;
    };
  }
) => {
  return await cr({
    url: `groups.json/${groupID}/receivers`,
    token,
    method: "POST",
    data: {
      global_attributes: data.global_attributes,
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
    console.log(json);

    return json as { [t: string]: any };
  } else {
    console.log(await fetchResult.text());
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
