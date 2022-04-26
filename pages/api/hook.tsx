import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //   try {
  //     await res.unstable_revalidate('/path-to-revalidate')
  //     return res.json({ revalidated: true })
  //   } catch (err) {
  //     // If there was an error, Next.js will continue
  //     // to show the last successfully generated page
  //     return res.status(500).send('Error revalidating')
  //   }
};

export default handler;
