import CleverReach from "@components/Newsletter/Handler/CleverReach";
import { NextApiRequest, NextApiResponse } from "next";

export default async function cleverReachHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cR = new CleverReach();

  const groups = await cR.getGroups();
  const forms = await cR.getForms();

  return res.json({ success: true, groups, forms });
}
