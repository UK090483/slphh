import CleverReach from "@components/Newsletter/Handler/CleverReach";
import { NextApiRequest, NextApiResponse } from "next";

export default async function cleverReachHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user_agent = req.headers["user-agent"] || "1";
  const user_ip = req.headers["x-forwarded-for"]?.toString() || "1";
  const referer = req.headers["host"] || "1";
  const doidata = { user_agent, user_ip, referer };

  const cR = new CleverReach();

  //  const receivers = await cR.getReceivers();

  //   const add = await cR.addRecipient({
  //     email: "konradullrich@me.com",
  //     global_attributes: {},
  //   });

  //   const activate = await cR.activateRecipient({
  //     email: "konradullrich@me.com",
  //     doidata: {
  //       user_ip: "1.2.3.4",
  //       referer: "http://www.wayne-enterprises.com",
  //       user_agent: "Brucilla/1.0 (HerOS/Linux)",
  //     },
  //   });

  //   if (!(await cR.addRecipient(recipientData)))
  //     return res.json({ error: "not able to create recipient" });

  //   if (!(await cR.activateRecipient({ email, doidata }))) {
  //     return res.json({ error: "not able to activate recipient" });
  //   }
  return res.json({
    success: true,
  });
}
