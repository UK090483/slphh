import CleverReach from "@components/Newsletter/Handler/CleverReach";
import { NextApiRequest, NextApiResponse } from "next";

export default async function cleverReachHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cR = new CleverReach();
  const Newsletter = await cR.healthCheck();
  return res.json({ vercel_url: process.env.VERCEL_URL, Newsletter });
}
