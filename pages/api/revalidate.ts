import { NextApiRequest, NextApiResponse } from "next";
import { LocationConfig } from "types";
import config from "../../app.config.json";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  // if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
  //   return res.status(401).json({ message: "Invalid token" });
  // }
  // Check for secret to confirm this is a valid request

  // if (!req.query.page) {
  //   return res.status(401).json({ message: "Invalid token" });
  // }

  console.log(req.body);

  try {
    //@ts-ignore
    await res.unstable_revalidate("/home");
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}

const handlePage = ({
  body,
  locales,
}: {
  body: any;
  locales: LocationConfig;
}) => {
  const slugs = [];

  if (body.slug) {
    slugs.push(body.slug);
  }

  return slugs;
};
