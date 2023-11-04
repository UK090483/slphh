import { NextApiRequest, NextApiResponse } from "next";
import CleverReach from "./CleverReach";

export default async function cleverReachHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user_agent = req.headers["user-agent"] || "1";
  const user_ip = req.headers["x-forwarded-for"]?.toString() || "1";
  const referer = req.headers["host"] || "1";
  const doidata = { user_agent, user_ip, referer };

  const cR = new CleverReach();

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
      contacttype: data["description"],
    },
  };

  if (!(await cR.addRecipient(recipientData)))
    return res.json({ error: "not able to create recipient" });

  if (!(await cR.activateRecipient({ email, doidata }))) {
    return res.json({ error: "not able to activate recipient" });
  }
  return res.json({ success: true });
}
