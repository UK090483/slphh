import CleverReach from "@components/Newsletter/Handler/CleverReach";
import { NextApiRequest, NextApiResponse } from "next";

export default async function cleverReachHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const raw = req.rawHeaders;
  const cR = new CleverReach();

  // const r = await cR.getReceivers();

  return res.json({
    header: req.headers,
    //r,
  });
}
