import CleverReach from "@components/Newsletter/Handler/CleverReach";
import { NextApiRequest, NextApiResponse } from "next";

export default async function cleverReachHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const raw = req.rawHeaders;
  const cR = new CleverReach();
  //   const result = await cR.eraseRecipient("konradullrich@me.com");
  //   const add = await cR.addRecipient({
  //     email: "konradullrich@me.com",
  //     global_attributes: {},
  //   });
  //   const activate = await cR.activateRecipient({
  //     email: "konradullrich@me.com",
  //     doidata: { referer: "asd", user_agent: "dfg", user_ip: "1.2.3.4" },
  //   });

  return res.json({
    header: req.headers,
  });
}
